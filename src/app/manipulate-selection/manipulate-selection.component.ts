import {Component} from '@angular/core';
import { ProgressBarService } from './../../services/progress-bar.service';
import { LoggerService } from './../../services/logger.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
    selector: 'manipulate-selection-controls',
    templateUrl: './manipulate-selection.component.html'
})
export class ManipulateSelectionComponent{
    progressService: ProgressBarService;
    loggerService: LoggerService;

    constructor (progressBarService: ProgressBarService, loggerService: LoggerService){
        this.progressService = progressBarService;
        this.loggerService = loggerService;
        this.subscribeOnChange();
    }

    async onHighlightClick(){            
        this.progressService.showProgressBar();
        try {
            await Excel.run(async context => {

                //TODO: check why not working on desktop
                const range = context.workbook.getSelectedRanges();
      
                range.load("address");

                range.format.fill.color = "yellow";
                
                await context.sync();
                this.loggerService.log(`The range address was ${range.address}.`);
            });
          } catch (error) {
                this.loggerService.error(error);
          }finally{
            this.progressService.hideProgressBar();
          }
    }

    async onCellInfoClick(){
        this.progressService.showProgressBar();
        try{            
            await Excel.run(async context => {
                const range = context.workbook.getSelectedRange();
                range.load("address");
                range.load("rowCount");
                range.load("columnCount");
                range.load("text");
                await context.sync();

                const numRows = range.rowCount;
                const numCols = range.columnCount;
              
                for (let i = 0; i < numCols; i++) {
                  for (let j = 0; j < numRows; j++) {
                      console.log(`i=${i}  j=${j}`)
                    const cell = await range.getCell(j, i);
                    
                    cell.load("text");
                    cell.load("address");
                    await context.sync();
                    this.loggerService.log(`${cell.address}  ->  ${cell.text}`)
                  }
                };
            });
        }catch(error){
            this.loggerService.error(error);
        }finally{
            this.progressService.hideProgressBar(); 
        }
    }

    async getSum(){
        this.progressService.showProgressBar();
        try{            
            await Excel.run(async context => {
                const ranges = context.workbook.getSelectedRanges();

                ranges.load("address");
                await context.sync();

                const address = ranges.address;
                const valueCellsAddress = address.split(',')[0];
                const sumCellAddress = address.split(',')[1];

                const formula = [[`=SUM(${valueCellsAddress})`]];

                const sumCell = context.workbook.worksheets.getActiveWorksheet().getRange(sumCellAddress);
                sumCell.formulas = formula;
            });
        }catch(error){
            this.loggerService.error(error);
        }finally{
            this.progressService.hideProgressBar(); 
        }
    }      
    
    async subscribeOnChange(){
        await Excel.run(async context => {
                var sheet = context.workbook.worksheets.getFirst();
                sheet.onChanged.add(async data => {
                    this.loggerService.warn(`${data.address} was edited:  ${data.details.valueBefore} changed to ${data.details.valueAfter}`);
                });
                // this.onChange.bind(this)
            });
    }

    async onChange(data){
        if(data.changeType == "RangeEdited")
        {
            this.loggerService.warn(`${data.address} was edited:  ${data.details.valueBefore} changed to ${data.details.valueAfter}`);
        }
    }
}
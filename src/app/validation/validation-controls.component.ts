import {Component} from '@angular/core';
import { ProgressBarService } from 'src/services/progress-bar.service';
import { LoggerService } from 'src/services/logger.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'validation-controls',
    templateUrl: './validation-controls.component.html'
})
export class ValidationControlsComponent{

    constructor (private _progressService: ProgressBarService, private _loggerService: LoggerService, private _http: HttpClient){}
        
    async onBasicClick() {

        try{
            this._progressService.showProgressBar();

            let data = [];

            await Excel.run(async context => {
                const range = context.workbook.getSelectedRange();
                range.load("address");
                range.load("text");
                await context.sync();

                console.log(range.address);

                data = [].concat(...range.text);
            });            
            
            let result = await this._http.post<Array<any>>('https://localhost:44356/api/UserValidation', data).toPromise();
           

            for (let i = 0; i < result.length; i++) {

                if(result[i].isValid){
                    this._loggerService.ok(`Value ${result[i].id}  Valid`);
                }else {
                    this._loggerService.error(`Value ${result[i].id}  Not Valid`);
                }
            }
        }catch(error){
            this._loggerService.error(error.message);
        }finally{
            this._progressService.hideProgressBar(); 
        }
    }
}
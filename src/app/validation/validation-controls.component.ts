import {Component} from '@angular/core';
import { ProgressBarService } from 'src/services/progress-bar.service';
import { LoggerService } from 'src/services/logger.service';

@Component({
    selector: 'validation-controls',
    templateUrl: './validation-controls.component.html'
})
export class ValidationControlsComponent{
    progressService: ProgressBarService;
    loggerService: LoggerService;

    constructor (progressService: ProgressBarService, loggerService: LoggerService){
        this.progressService = progressService;
        this.loggerService = loggerService;
    }
        
    onBasicClick() {
        this.progressService.showProgressBar();

        var cells = new Array()
        
    }
}
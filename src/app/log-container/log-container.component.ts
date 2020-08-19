import {Component} from '@angular/core';
import {LoggerService} from './../../services/logger.service'

@Component({
    selector: 'log-container',
    templateUrl: './log-container.component.html'
})
export class LogContainer{
    loggerService: LoggerService;

    constructor(logService: LoggerService){
        this.loggerService = logService;
    }

    onDeleteClick(){
        this.loggerService.logs= new Array();
    }
    
}
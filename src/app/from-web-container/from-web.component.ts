import {Component} from '@angular/core';
import { ProgressBarService } from './../../services/progress-bar.service';
import { LoggerService } from './../../services/logger.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'from-web',
    templateUrl: './from-web.component.html'
})
export class FromWebComponent{

    _randomCount: number;
    _stringLength: number = 1;
    _isNumeric: boolean = false;
    _isUpperCase: boolean = false;
    _isLowerCase: boolean = false;

    constructor (private _progressService: ProgressBarService, private _loggerService: LoggerService, private _http: HttpClient){ 
        this._randomCount = 1;
    }
        
    async onGetRandomClick() {
        try{
            this._progressService.showProgressBar();
            var url = `https://localhost:44355/api/proxy?count=${this._randomCount}&length=${this._stringLength}&isNumeric=${this._isNumeric}&isUpper=${this._isUpperCase}&isLower=${this._isLowerCase}`;

            let result  = await this._http.get<any>(url).toPromise();
            if(result){
                this._loggerService.ok(result.length + " objects received");

                for (let index = 0; index < result.length; index++) {
                    this._loggerService.log(result[index]);                    
                }                
            }

        }catch(error){
            this._loggerService.error(error.message);
        }finally{
            this._progressService.hideProgressBar(); 
        } 
    }

    
    updateRandomCount(event) {
        if(event.value > 0){
            this._randomCount = event.value;
        }
    }

    updateStringLength(event) {
        if(event.value > 0){
            this._stringLength = event.value;
        }
    }

    randomCount(value: number) {  
        return value;
    }

    stringLength(value: number) {  
        return value;
    }

    isNumeric(checked: boolean) {
        this._isNumeric = checked;
    }

    isUpperCase(checked: boolean) {
        this._isUpperCase = checked;
    }

    isLowerCase(checked: boolean) {
        this._isLowerCase = checked;
    }
}
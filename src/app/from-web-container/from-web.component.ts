import {Component} from '@angular/core';
import { ProgressBarService } from './../../services/progress-bar.service';
import { LoggerService } from './../../services/logger.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'from-web',
    templateUrl: './from-web.component.html'
})
export class FromWebComponent{

    constructor (private _progressService: ProgressBarService, private _loggerService: LoggerService, private _http: HttpClient){    }
        
    async onGetRandomClick() {
        try{
            this._progressService.showProgressBar();

            let responce ;
            
            // var result  = this._http.get<any>('https://www.passwordrandom.com/query?command=password').toPromise().then(data => {
            //     responce = data;
            //     this._loggerService.log('Subscribe executed.' + data);
            // }).catch(error => { this._loggerService.error(error); });
            var result  = await this._http.get<string>('https://www.passwordrandom.com/query?command=password').toPromise();
            console.log(result);
            var cells = new Array()      
            
        }catch(error){
            this._loggerService.error(error);
        }finally{
            this._progressService.hideProgressBar(); 
        }
 
    }
}
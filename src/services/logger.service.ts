import {LogEntry} from './../models/log-entry';
import {LogLevel} from './../enums/log-level';

export class LoggerService{
    LogLevel = LogLevel;
    logs: LogEntry[] = new Array();

    constructor(){
    }

    error(msg: any){
        this.logs.push(new LogEntry(msg, LogLevel.Error ));
    };

    ok(msg: any){
        this.logs.push(new LogEntry(msg, LogLevel.Ok ));
    };

    warn(msg: any){
        this.logs.push(new LogEntry(msg, LogLevel.Warning ));
    };

    log(msg: any){
        this.logs.push(new LogEntry(msg, LogLevel.Log ));
    };
    
    clean(){
        this.logs = new Array;
    }
    
}
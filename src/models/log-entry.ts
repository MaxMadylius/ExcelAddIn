import {LogLevel} from './../enums/log-level'

export class LogEntry{
    text: string;
    logLevel: LogLevel;

    constructor (text: string, logLevel: LogLevel){
        this.text = text;
        this.logLevel = logLevel;
    }
}

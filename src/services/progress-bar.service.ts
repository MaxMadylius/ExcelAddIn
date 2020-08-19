import { async } from 'rxjs/internal/scheduler/async';

export interface IProgressBarService{
    showProgressBar: () => void;
    hideProgressBar: () => void;
    readonly IsVisible: boolean;
    
}

export class ProgressBarService implements IProgressBarService{
    private _isVisible: boolean = false;
    
    public get IsVisible(): boolean {
        return this._isVisible;
    }

    async showProgressBar(){ 
        this._isVisible = true;
    }
    async hideProgressBar(){ 
        this._isVisible = false;
    }
}
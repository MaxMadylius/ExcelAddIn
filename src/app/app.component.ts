import { ProgressBarService } from './../services/progress-bar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAddIn'
  showProgress: boolean; 
  progressService: ProgressBarService;

  constructor(progressService: ProgressBarService){
    this.progressService = progressService;
  }
}

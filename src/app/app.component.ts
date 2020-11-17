import { ProgressBarService } from './../services/progress-bar.service';
import { Component } from '@angular/core';
import * as sso from "office-addin-sso";

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
    signIn();
  }
}

// TODO: fix
async function signIn() {
  try {
      let bootstrapToken = await OfficeRuntime.auth.getAccessToken({ allowSignInPrompt: true });
      console.log(bootstrapToken);
      // The /api/DoSomething controller will make the token exchange and use the
      // access token it gets back to make the call to MS Graph.
      //getData("/api/DoSomething", bootstrapToken);
  }
  catch (exception) {
      if (exception.code === 13003) {
        console.log("-------------------------------");
        console.log(exception);
          // SSO is not supported for domain user accounts, only
          // Microsoft 365 Education or work account, or a Microsoft account.
      } else {
        console.log(exception);
          // Handle error
      }
  }
}
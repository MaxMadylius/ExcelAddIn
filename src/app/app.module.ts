import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ProgressBarService } from 'src/services/progress-bar.service';
import { LoggerService } from 'src/services/logger.service'

import { ValidationControlsComponent } from 'src/app/validation/validation-controls.component';
import { ManipulateSelectionComponent } from 'src/app/manipulate-selection/manipulate-selection.component';
import { LogContainer } from 'src/app/log-container/log-container.component';
import { FromWebComponent } from 'src/app/from-web-container/from-web.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationControlsComponent,
    ManipulateSelectionComponent,
    LogContainer,
    FromWebComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    HttpClientModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCheckboxModule
  ],
  providers: [ProgressBarService, LoggerService],
  bootstrap: [AppComponent]
})

export class AppModule {}

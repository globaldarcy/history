import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { ContentComponent } from './components/content/content.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { HeaderComponent } from './components/header/header.component';
import {ServicesService} from './services.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    ContentComponent,
    RightBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

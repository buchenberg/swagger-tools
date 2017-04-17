import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdButtonModule, MdCheckboxModule, MdSidenavModule, MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AceEditorModule, AceEditorDirective } from 'ng2-ace-editor';


import { AppComponent } from './app.component';
import { AceComponent } from './ace/ace.component';

@NgModule({
  declarations: [
    AppComponent,
    AceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent, AceComponent]
})
export class AppModule { }

import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdButtonModule, MdCheckboxModule, MdSidenavModule, MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AceEditorModule, AceEditorDirective } from 'ng2-ace-editor';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { AceEditorComponent } from './ace-editor/ace-editor.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ace-editor', component: AceEditorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    AceEditorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AceEditorModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

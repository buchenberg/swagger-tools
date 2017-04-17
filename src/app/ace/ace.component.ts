import { Component } from '@angular/core';

//to use theme "eclipse"
//with angular-cli add "../node_modules/ace-builds/src-min/ace.js" 
//and "../node_modules/ace-builds/src-min/theme-eclipse.js" to "scripts" var into the file angular-cli.json

@Component({
selector: 'ace',
  template: `
  <div ace-editor
       [(text)]="text" 
       [mode]="'json'"
       [theme]="'monokai'"
       [options]="options"
       [readOnly]="false"
       [autoUpdateContent]="true" 
       [durationBeforeCallback]="1000" 
       (textChanged)="onChange($event)"
       style="min-height: 200px; width:100%; overflow: auto;">
       </div>
  `
})
export class AceComponent {
    text:string = "";
    options:any = {maxLines: 1000, printMargin: false};
    
    onChange(code) {
        console.log("new code", code);
    }
}
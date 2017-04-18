import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ace-editor',
  templateUrl: './ace-editor.component.html',
  styleUrls: ['./ace-editor.component.css']
})
export class AceEditorComponent implements OnInit {

  text = '';
  options: any = { maxLines: 1000, printMargin: false };

  constructor() { }

  ngOnInit() { }

  onChange(code) {
    console.log('new code', code);
  }

}

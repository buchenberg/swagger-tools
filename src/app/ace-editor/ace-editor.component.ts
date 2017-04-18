import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ace-editor',
  templateUrl: './ace-editor.component.html',
  styleUrls: ['./ace-editor.component.css']
})
export class AceEditorComponent implements OnInit {

  someObj = {
    'foo': 'bar'
  };
  someObj2 = {
    'foo': 'baz'
  };

  text = '';

  // text = JSON.stringify(this.someObj, null, 2);
  options: any = { maxLines: 1000, printMargin: false };

  constructor() {
    this.text = JSON.stringify(this.someObj, null, 2);
  }

  ngOnInit() {
    this.text = JSON.stringify(this.someObj2, null, 2);
  }

  onChange(code) {
    console.log('new code', code);
  }

}

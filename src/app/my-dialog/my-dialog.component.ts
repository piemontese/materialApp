import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  constructor( public dialog: MdDialog ) { }

  openDialog() {
      this.dialog.open(DialogOverviewExampleDialog);
  }

  ngOnInit() {
  }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    template: `
        <h1 md-dialog-title>This is a dialog</h1>

        <md-dialog-actions>
          <button md-raised-button md-dialog-close>CLOSE</button>
        </md-dialog-actions>
        `
})
export class DialogOverviewExampleDialog {}
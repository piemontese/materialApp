import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  openDialog() {
      this.dialog.open(DialogOverviewExampleDialog);
  }

  ngOnInit() {
  }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    styles: [
      `
      img {
        max-width: 100%;
      }`
    ],
    template: `
    <h2 mat-dialog-title>Neptune
      <!-- This fills the remaining space of the current row -->
      <span class="example-fill-remaining-space"></span>
      <span align="end">
        <button mat-icon-button tooltip="Close" tooltipPosition="below" mat-dialog-close><mat-icon>clear</mat-icon></button>
      </span>
    </h2>
    <mat-dialog-content>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"/>
      <p>
        Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the
        Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet,
        and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more
        massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger
        than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1
        astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the
        astronomical symbol ♆, a stylised version of the god Neptune's trident.
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <div layout="row" layout-align="end center">
        <button mat-raised-button mat-dialog-close>Close</button>
        <button mat-raised-button color="primary" mat-dialog-close>OK</button>
      </div>
    </mat-dialog-actions>
  `
})
export class DialogOverviewExampleDialog {}

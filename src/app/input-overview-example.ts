import {Component, ViewChild, ElementRef} from '@angular/core';
import {FocusMonitor, FocusOrigin} from '@angular/cdk/a11y';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {
  selectedWestEast = 'west'
  lonDegree : number;

   @ViewChild('lon_degree') lonDegreeInput: ElementRef<HTMLInputElement>;
   @ViewChild('lon_minute') lonMinuteInput: ElementRef<HTMLInputElement>;
   @ViewChild('lon_decimal') lonDecimalInput: ElementRef<HTMLInputElement>;

 constructor(private focusMonitor: FocusMonitor){

 }

   focus(element: ElementRef<HTMLInputElement>){
     this.focusMonitor.focusVia(element.nativeElement, 'keyboard');
   }

     onKey(e: KeyboardEvent) { // with type info
    console.log(e.charCode);
    console.log(this.lonDegreeInput.nativeElement.value);
      console.log("value: " + this.lonDegree);
      if ((e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57))
      {
        if (this.lonDegreeInput.nativeElement.value.length==3){
          this.focus(this.lonMinuteInput);
        }
      }
            //   if (((e.keyCode < 65 || e.keyCode > 90)) && (e.keyCode < 96 || e.keyCode > 105)) {
            // e.preventDefault();
        // }
}
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
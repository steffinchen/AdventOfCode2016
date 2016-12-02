import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {

  // input = 'ULL\nRRDDD\nLURDL\nUUUUD';
  result = '';

  input = {value: ''};


  constructor() { }

  ngOnInit() {
    // this.followInstructions();
  }

  followInstructions() {
    this.result = '';
    let lines = _.split(this.input.value, '\n');
    let that = this;
    _.reduce(lines, function(currNumber, line) {
      let digit = _.reduce(line, function(acc, direction) {
        return that.moveOnKeypad(acc, direction);
      }, currNumber);
      that.result += digit;
      return digit;
    }, 5);
  }

  moveOnKeypad(currNumber: number, direction) {
    let newNumber: number;
    if (direction === 'U') {
      newNumber = currNumber - 3;
    } else if (direction === 'D') {
      newNumber = currNumber + 3;
    } else if (direction === 'L' && _.indexOf([1, 4, 7], currNumber) === -1) {
      newNumber = currNumber - 1;
    } else if (direction === 'R' && _.indexOf([3, 6, 9], currNumber) === -1) {
      newNumber = currNumber + 1;
    }

    let result;
    if (newNumber && newNumber > 0 && newNumber <= 9) {
      result =  newNumber;
    } else {
      result = currNumber;
    }
    // console.log('moveOnKeypad result ', result);
    return result;
  }

}

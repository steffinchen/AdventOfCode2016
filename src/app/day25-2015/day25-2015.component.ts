import { Component, OnInit } from '@angular/core';
import { Coordinate } from './../coordinate';
import * as _ from 'lodash';

@Component({
  selector: 'app-day25-2015',
  templateUrl: './day25-2015.component.html',
  styleUrls: ['./day25-2015.component.css']
})
export class Day252015Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.buildGrid();
  }

  buildGrid() {
    let board = [];
    let x = 1;
    let y = 1;
    let that = this;
    _.forEach(_.range(1, 16), function(val) {
      if (!board[y]) {
        board[y] = [];
      }
      board[y][x] = val;
      let co = that.calculateNextCell(x, y);
      x = co.x;
      y = co.y;
    });
    console.log(board);
  }

  calculateNextCell(x: number, y: number) {
    let co = new Coordinate();
    if (y === 1) {
      // new row
      co.x = 1;
      if (x === 1) {
        co.y = 2;
      } else {
        co.y = x + 1;
      }
    } else {
      co.x = x + 1;
      co.y = y - 1;
    }
    return co;
  }
}

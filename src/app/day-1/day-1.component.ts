import { Component, OnInit } from '@angular/core';
import { Coordinate } from './../coordinate';
import * as _ from 'lodash';

@Component({
  selector: 'app-day-1',
  templateUrl: './day-1.component.html',
  styleUrls: ['./day-1.component.css']
})
export class Day1Component implements OnInit {

  input = 'L5, R1, R4, L5, L4, R3, R1, L1, R4, R5, L1, L3, R4, L2, L4, R2, L4, L1, R3, R1, R1, L1, R1, L5, R5, R2, L5, R2, R1, L2, L4, L4, R191, R2, R5, R1, L1, L2, R5, L2, L3, R4, L1, L1, R1, R50, L1, R1, R76, R5, R4, R2, L5, L3, L5, R2, R1, L1, R2, L3, R4, R2, L1, L1, R4, L1, L1, R185, R1, L5, L4, L5, L3, R2, R3, R1, L5, R1, L3, L2, L2, R5, L1, L1, L3, R1, R4, L2, L1, L1, L3, L4, R5, L2, R3, R5, R1, L4, R5, L3, R3, R3, R1, R1, R5, R2, L2, R5, L5, L4, R4, R3, R5, R1, L3, R1, L2, L2, R3, R4, L1, R4, L1, R4, R3, L1, L4, L1, L5, L2, R2, L1, R1, L5, L3, R4, L1, R5, L5, L5, L1, L3, R1, R5, L2, L4, L5, L1, L1, L2, R5, R5, L4, R3, L2, L1, L3, L4, L5, L5, L2, R4, R3, L5, R4, R2, R1, L5';
  // input = 'R8, R4, R4, R8';
  visited = [];

  visitedMulti;

  result;

  constructor() { }

  ngOnInit() {
    let turns = _.split(this.input, ', ');
    let startCoord = new Coordinate();
    startCoord.x = 0;
    startCoord.y = 0;
    startCoord.facing = 'N';
    let that = this;

    let end = _.reduce(turns, function(coord, turn) {
      return that.followInstruction(coord.x, coord.y, coord.facing, turn[0], Number(turn.substring(1)));
    }, startCoord);
    this.result = this.calcTaxicabDistance(startCoord, this.visitedMulti);
  }

  calcTaxicabDistance(coord1: Coordinate, coord2: Coordinate) {
    console.log(coord1, coord2);
    // distance between two points is the sum of the absolute differences of their Cartesian coordinates.
    return Math.abs(coord1.x - coord2.x) + Math.abs(coord1.y - coord2.y);
  }

  makeStep(coord: Coordinate, axis, steps: number, negative: boolean) {
    for (let i = 0; i < steps; i++) {
      coord[axis] = negative ? coord[axis] - 1 : coord[axis] + 1;
      if (_.indexOf(this.visited, coord.x + '_' + coord.y) === -1) {
        this.visited.push(coord.x + '_' + coord.y);
      } else {
        if (!this.visitedMulti) {
          let v2 = new Coordinate();
          v2.x = coord.x;
          v2.y = coord.y;
          this.visitedMulti = v2;
        }
      }
    }
    return coord;
  }

  followInstruction(x: number, y: number, facing, turn, steps: number) {
    console.log(steps);
    let coord = new Coordinate();
    coord.x = x;
    coord.y = y;
    if (facing === 'N' && turn === 'R') {
      coord = this.makeStep(coord, 'x', steps, false);
      coord.facing = 'E';
    } else if (facing === 'N' && turn === 'L') {
      coord = this.makeStep(coord, 'x', steps, true);
      // coord.x = coord.x - steps;
      coord.facing = 'W';
    } else if (facing === 'E' && turn === 'R') {
      coord = this.makeStep(coord, 'y', steps, true);
      // coord.y = coord.y - steps;
      coord.facing = 'S';
    } else if (facing === 'E' && turn === 'L') {
      coord = this.makeStep(coord, 'y', steps, false);
      // coord.y = coord.y + steps;
      coord.facing = 'N';
    } else if (facing === 'S' && turn === 'R') {
      coord = this.makeStep(coord, 'x', steps, true);
      // coord.x = coord.x - steps;
      coord.facing = 'W';
    } else if (facing === 'S' && turn === 'L') {
      coord = this.makeStep(coord, 'x', steps, false);
      // coord.x = coord.x + steps;
      coord.facing = 'E';
    } else if (facing === 'W' && turn === 'R') {
      coord = this.makeStep(coord, 'y', steps, false);
      // coord.y = coord.y + steps;
      coord.facing = 'N';
    } else if (facing === 'W' && turn === 'L') {
      coord = this.makeStep(coord, 'y', steps, true);
      // coord.y = coord.y - steps;
      coord.facing = 'S';
    }
    return coord;
  }

}

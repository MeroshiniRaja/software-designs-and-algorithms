import { Point } from "./point";

export abstract class Shape {
  abstract getType(): string;
  protected color:string;
  protected filled:boolean;
  points:Point[];
  constructor(points:Point[]);
  constructor(points:Point[],color:string,filled:boolean);
  constructor(points:Point[],color?:string,filled?:boolean){
    this.points = points;
    if(this.points.length < 3){
      throw new TypeError("Points should be greater than 2");
    }
    if(color){
     this.color = color;
     this.filled = filled?filled:false;
    } else {
      this.color = 'green';
      this. filled = true;
    }
  }
  toString(){
    const filledValue = this.filled? 'filled' : 'not filled'; 
    return `A Shape with color of ${this.color} and ${filledValue}. Points: ${this.points}.`
  }
  
}

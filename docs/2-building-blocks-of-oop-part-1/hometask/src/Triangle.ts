import { Point } from "./point";
import { Shape } from "./Shape";

export class Triangle extends Shape  {
    v1:Point;
    v2:Point;
    v3:Point;
    constructor(p1:Point,p2:Point,p3:Point){
        super([p1,p2,p3]);
        this.v1 = p1;
        this.v2 = p2;
        this.v3 = p3;
    }
    toString(): string {
        console.log(this.v1)
        return `Traingle[v1=${this.v1},v2=${this.v2},v3=${this.v3}]`;
    }
    public override getType(): string {
        
        return '';
    }

}
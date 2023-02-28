export class Point {
    x: number;
    y: number;

    constructor();
    constructor(x:number, y:number)
    constructor(x?:number, y?:number){
       this.x=x?x:0;
       this.y=y?y:0;
    }
    toString(){
        return `(${this.x}, ${this.y})`;
    }
    distance();
    distance(x1:number,y1:number);
    distance(other: Point);
    distance(x1orPoint?:Point|number, y1?:number){
        if(typeof x1orPoint === undefined || x1orPoint === null){
            return Math.hypot(this.x-0, this.y-0);
        } else if (typeof x1orPoint === 'number' && y1) {
            return Math.hypot(this.x-x1orPoint, this.y-y1);
        } else {
            return '';
        }
    }
}

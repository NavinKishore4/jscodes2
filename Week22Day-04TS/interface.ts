interface Shape
{
    getArea():number;
    getVolume():number;
}

class Rectangle implements Shape{
    w:number;
    h:number;
    l:number;

    constructor(w:number,h:number,l:number)
        {
            this.w=w;
            this.h=h;
            this.l=l;
        }

    getArea(): number {
        return(this.w * this.h);
    }
    getVolume(): number {
        return(this.w * this.h);
    }
}

var r1=new Rectangle(10,20,5);
console.log(r1.getArea());
console.log(r1.getVolume());
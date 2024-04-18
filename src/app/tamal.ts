export class Infantry {
    private name: string;
    private power: number;
    private skill: string;

    constructor(n: string, p:number, s: string){
        this.name = n;
        this.power = p;
        this.skill = s;

    }


    print(){
        console.log(`Hi I'm an infantry called ${this.name}, my power is ${this.power} and my super skill is ${this.skill}! `)
    }
    
}

export class Cavalry {
    private name: string;
    private power: number;
    private skill: string;

    constructor(n: string, p:number, s: string){
        this.name = n;
        this.power = p;
        this.skill = s;

    }


    print(){
        console.log(`Hi I'm a cavalry called ${this.name}, my power is ${this.power} and my super skill is ${this.skill}! `)
    }
    
}



export class Archer {
    private name: string;
    private power: number;
    private skill: string;

    constructor(n: string, p:number, s: string){
        this.name = n;
        this.power = p;
        this.skill = s;

    }


    print(){
        console.log(`Hi I'm archer called ${this.name}, my power is ${this.power} and my super skill is ${this.skill}! `)
    }
    
}

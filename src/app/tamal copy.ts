export class ArmyBuilder {
    private type: string = '';
    private name: string = '';
    private power: number = 0;
    private skill: string = '';


    public setType(type: string): ArmyBuilder{
         this.type = type
         return this;
    }

    public setName(name: string): ArmyBuilder{
         this.name = name
         return this
    }

    public setPower(power: number): ArmyBuilder {
         this.power = power
         return this
    }

    public setSkill(skill: string): ArmyBuilder{
         this.skill = skill
         return this;
    }


    public build(): Army{
        return new Army(this.type,this.name, this.power, this.skill);
    }
    
}

export class Army {
    private type: string;
    private name: string;
    private power: number;
    private skill: string;

    constructor(t: string, n: string, p:number, s: string){
        this.type = t;
        this.name = n;
        this.power = p;
        this.skill = s;

    }


    print(){
        console.log(`Hi I'm of type ${this.type} and my name is ${this.name}, my power is ${this.power} and my super skill is ${this.skill}! `)
    }
    
}





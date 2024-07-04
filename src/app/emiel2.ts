export abstract class Asteroid {
    protected abstract diameter: number;
    protected abstract velocity: number;

    public toString(): string {
        return `Astroid of size ${this.diameter} travelling at ${this.velocity} km/s`
    }

    public move(): void {
        console.log(this.toString())
        console.log('This Asteriod is moving in a random direction');
    }

}


export class smallAsteroid extends Asteroid {
    protected override diameter: number = 100 ;
    protected override velocity: number = 40;
}
export class mediumAsteroid extends Asteroid  {
    protected override diameter: number = 200;
    protected override velocity: number = 30; 
}
export class largeAsteroid extends Asteroid {
    protected override diameter: number = 300;
    protected override velocity: number = 20;
}

export class DesktopGame {
    protected asteroids: Asteroid[] = [];

    constructor(private astroidFactory: AstroidFactory){
    
    }

    public gameLoop(): void {
        this.createAsteroids();
        this.moveAsteroids();
    }

    private createAsteroids(){
        if(this.asteroids.length == 0){
         this.asteroids = this.astroidFactory.createAstroids()
        }
    }

    private moveAsteroids(): void {
        this.asteroids.forEach((a) => {
            a.move();
        })
    }
}

export abstract class AstroidFactory {
    public abstract createAstroids(): Asteroid[]
}

export class FixedAmountsAstoidFactory extends AstroidFactory {
    constructor( private small: number, private medium: number, private large:number ){
        super()
    }

    public override createAstroids(): Asteroid[] {
        const small =  this.createObjects(this.small, 'small')
        const medium =  this.createObjects(this.medium, 'medium')
        const large =  this.createObjects(this.large, 'large')
        return [...small,...medium,...large];
    }

    private createObjects(amount: number, type: string): Asteroid[] {
        const list = [];
        for(let i=0; i < amount; i++) {
            if(type == 'small'){ list.push(new smallAsteroid())} 
            if(type == 'medium'){ list.push(new mediumAsteroid())} 
            if(type == 'large'){ list.push(new largeAsteroid())} 
        }

        return list
    }
    
    
}
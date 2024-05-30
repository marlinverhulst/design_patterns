// interfaces 
export interface Engine {
    fly: ()=> void 
}

export interface Guns {
    fire: () =>  void
}

export interface Shields {
    raiseShields: () =>  void
}






// abstract classes
export abstract class Ship {
    public abstract name: string;
    public fly(){
        this.engine.fly();
    }

    public fire() {
        this.guns.fire();
    }

    public raiseShields() {
        if(!this.shields)   return
        this.shields.raiseShields();
    }

    public changeEngine(engine: Engine){
        this.engine = engine;
    }

    public constructor(private engine: Engine, private guns: Guns, private shields?: Shields ){}
    

}

// concrete engines

export class HeavyEngine implements Engine {
    fly(){
        console.log('Im doing heavy flying');
    };
    
}
export class NimbleEngine implements Engine {
    fly(){
        console.log('Im doing nimble flying');
    };
    
}

// concrete Guns
export class Laser implements Guns {
    fire(){
        console.log('Im shooting lasers');
    };
    
}

export class Rockets implements Guns {
    fire(){
        console.log('Im shooting Rockets');
    };
    
}
export class Clusters implements Guns {
    fire(){
        console.log('Im shooting Clusters');
    };
    
}


// concrete shields 

export class BasicShield implements Shields {
    raiseShields(){
        console.log('Basic shields are up!')
    }
}



// concrete ships

export class Dreadnough  extends Ship {
    public override name = 'Dreadnough';

    public constructor() {
        super(new HeavyEngine(), new Clusters(), new BasicShield())
    }

}
export class Interceptor extends Ship {
    public override name = 'Interceptor';
    
    public constructor() {
        super(new NimbleEngine(), new Laser())
    }

}  
export class Warhammer extends Ship {
    public override name = 'Warhammer';

    public constructor() {
        super(new HeavyEngine(), new Rockets(), new BasicShield())
    }
    
} 
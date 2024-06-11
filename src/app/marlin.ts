export interface Renderable {
 render():void
}
//**ABSTRACT CLASSES */
export abstract class UiInterface implements Renderable {
 private value: string | number = '';

 public setvalue( value: string | number): void {
    this.value = value;
 }

 public getValue(): string {
    return this.value.toString();
 }

 public abstract render(): void 
}

export abstract class Level {
    abstract name: string
    public player;
    public enemies: Enemy[] = []
    public ui: UiInterface[] = []

    constructor(player: Player){
        this.player = player
    }

    render(): void {
        console.log(`${this.name} rendering`)
        this.player.render()
        this.enemies.forEach(e => e.render())
        this.ui.forEach(ui => ui.render())
    }
    
    abstract update(): void
}

//** CONCRETE CLASSES */
export class Player implements Renderable {
    public render(): void {
        console.log("Player render")
    }
}

export class Enemy implements Renderable {
    public render(): void {
        console.log("enemy rendering")
    }
}

export class ScoreUi extends UiInterface {
    public override render(): void {
        console.log(`current score: ${this.getValue()} `);
    }
}


export class LivesUi extends UiInterface {
    public override render(): void {
        console.log(`current lives: ${this.getValue()} `)
    }

}


export class Game {
    private currentLevel: Level

    public getLevelName(): string {
        return this.currentLevel.name
    }

    public loadLevel(level:Level): void {
        this.currentLevel = level;
    }

    constructor(initLevel: Level) {
        this.currentLevel = initLevel

    }

    public gameLoop(): void {
        this.currentLevel.update();
        this.currentLevel.render();
    }
}

export class Settings {
    private static instance: Settings| undefined = undefined
    public score = 0;
    public lives = 3;

     static getInstance(): Settings {
       if(!this.instance){
         this.instance = new Settings()
       }
       return this.instance;
    }
}  


//*******************SPACE LEVEL******************************************* */

export class SpaceStage extends Level {
    public name = "SPACE STAGE"
    private settings: Settings
    private scoreUi = new ScoreUi()
    private livesUi = new LivesUi()

    
    constructor(){
        const enemies = [new Enemy(), new Enemy()]
        super(new Player)
        this.enemies.push(...enemies)
        this.settings = Settings.getInstance()

        // setting the values 
        this.scoreUi.setvalue(this.settings.score);
        this.livesUi.setvalue(this.settings.lives);

        //add them to the renderQue 
        this.ui.push(this.scoreUi, this.livesUi)
        
    }
    override update(): void {
        this.settings.lives = this.settings.lives - 1;
        this.settings.score = this.settings.score + 300;

         //update the score in the ui
         this.scoreUi.setvalue(this.settings.score);
         this.livesUi.setvalue(this.settings.lives);

        console.log('we Lost one live');
        console.log('300 score added ')
    }

}


//*************EARTH LEVEL********************* */

export class EarthStage extends Level {
    public name = "EARTH STAGE"
    private settings: Settings
    private scoreUi = new ScoreUi()
    private livesUi = new LivesUi()

    
    constructor(){
        const enemies = [new Enemy(), new Enemy(), new Enemy()]
        super(new Player)
        this.enemies.push(...enemies)
        this.settings = Settings.getInstance()

        // setting the initial values 
        this.scoreUi.setvalue(this.settings.score);
        this.livesUi.setvalue(this.settings.lives);
        // add ui to the renderque 
        this.ui.push(this.scoreUi, this.livesUi)
    }

    override update(): void {
        this.settings.lives = this.settings.lives + 4;
        this.settings.score = this.settings.score + 4000;

        //update the score in the ui
        this.scoreUi.setvalue(this.settings.score);
        this.livesUi.setvalue(this.settings.lives);

        console.log('we gained 4 lives');
        console.log('4000 score added ')
    }
}


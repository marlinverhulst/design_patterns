import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public trafficLight = new TrafficLight()

}



abstract class State {
  color:string = ""
  sound:string = "noise"
  abstract trafficLight: TrafficLight
  abstract buttonPressed(): void 
  abstract switch(): State 


} 

class TrafficLight {
  public soundBox = new SoundBox()
  public delay = 4000
  public currentState: State | undefined = undefined;


  public onButtonPress(){
   this.currentState?.buttonPressed()
  }

  public switchLight(state?: State){
   this.currentState = state? state : this.currentState?.switch() 
   this.soundBox.turnOnSound(this.currentState?.sound || "noise")
  } 


  constructor(){
    this.switchLight(new YellowLight(this));
    setInterval(() => {
      this.switchLight()
    }, this.delay)
  }

}

class RedLight extends State {
  override color = 'red'
  override sound = "Tik Tik"
  override trafficLight: TrafficLight;


  override buttonPressed(): void {
    this.trafficLight.switchLight(new GreenLight(this.trafficLight))
  }
  override switch(): State {
    return  new GreenLight(this.trafficLight)   
  }

  constructor(trafficLight: TrafficLight){
    super()
    this.trafficLight = trafficLight
  }

}

class YellowLight extends State {
  override color = 'yellow'
  override sound = "Tok Tok"
  override trafficLight: TrafficLight;


  override buttonPressed(): void {
    this.trafficLight.switchLight(new RedLight(this.trafficLight))
  }
  override switch(): State {
    return  new RedLight(this.trafficLight)   
  }

  constructor(trafficLight: TrafficLight){
    super()
    this.trafficLight = trafficLight
  }

}


class GreenLight extends State {
  override color = 'green'
  override sound = "Go Go Go!"
  override trafficLight: TrafficLight;


  override buttonPressed(): void {
   return
  }
  override switch(): State {
    return  new YellowLight(this.trafficLight)   
  }

  constructor(trafficLight: TrafficLight){
    super()
    this.trafficLight = trafficLight
  }

}




class SoundBox {
  public currentlyPlaying: string	= 'none'
  public turnOnSound(name:string){
    this.currentlyPlaying = name
  }
  public turnOffSound(){
    this.currentlyPlaying = 'none'
  } 
}

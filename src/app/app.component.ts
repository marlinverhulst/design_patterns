import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Archer, Cavalry, Infantry } from './tamal';
import { ArmyBuilder } from './tamal copy';
import { DocumentsManager, User } from './randy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   documentsManager = new DocumentsManager();
   traineeEmployee  = new User('Marlin', 'Trainee', [])
   SeniorEmployee  = new User('Randy', 'Trainee', ['secretDocuments'])

   response: string =  '';


   public requestDocs(requester: User): string {
    return this.response = this.documentsManager.requestDocuments(requester)
   }

  



}


// class TrafficLight {
//   public soundBox = new SoundBox()
//   public currentLightColor: string =''
//   public redLight = new Light('red')
//   public yellowLight = new Light('yellow')
//   public greenLight = new Light('green')
//   public lightOptions = ['green', 'yellow', 'red']
//   public lightIndex = 0
//   public delay = 4000


//   public onButtonPress(){
   
//     switch(this.currentLightColor){
//       case 'red':
//         this.lightIndex = 0
//         this.switchLight(this.lightOptions[this.lightIndex])
//         break
//       case 'yellow':
//         this.lightIndex = 2
//         this.switchLight(this.lightOptions[this.lightIndex])
//         console.log(this.currentLightColor)
//         break
//       case 'green':
//         break    
//     }
//   }

//   public switchLight(color: string){
//     switch(color){
//       case'red': {
//         this.currentLightColor = color
//         this.redLight.turnOn
//         this.yellowLight.turnOff
//         this.redLight.turnOff
//         this.soundBox.turnOnSound('Tik   Tik')
//         break
//       }
//       case'yellow': {
//         this.currentLightColor = color
//         this.redLight.turnOff
//         this.yellowLight.turnOn
//         this.greenLight.turnOff
//         this.soundBox.turnOnSound('Tok Tok')
//         break
//       }
//       case'green': {
//         this.currentLightColor = color
//         this.redLight.turnOff
//         this.yellowLight.turnOff
//         this.greenLight.turnOn
//         this.soundBox.turnOnSound('GO GO GO!')
//         break
//       }
//     }
//   }

//   constructor(){
//     setInterval(() => {
//       if(this.lightIndex < this.lightOptions.length){
//         this.lightIndex = this.lightIndex + 1
//       } else {
//         this.lightIndex = 0
//       }
//       console.log(this.lightIndex)
//       this.switchLight(this.lightOptions[this.lightIndex])
//     }, this.delay)
//   }

// }

// class Light {
//   public turnOn(){}
//   public turnOff(){}
//   constructor(public color: string){}
// }

// class SoundBox {
//   public currentlyPlaying: string	= 'none'
//   public turnOnSound(name:string){
//     this.currentlyPlaying = name
//   }
//   public turnOffSound(){
//     this.currentlyPlaying = 'none'
//   } 
// }

import { Component } from "@angular/core";
import { HttpService} from "./http.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})


// interface Data{
//   message: string,
//   data:[any],
// }

export class AppComponent {
  title = "Ninja Gold";  
    gold_count = 0;
    log = [];

  constructor(private _httpService: HttpService){

  }
//   ngOnInit(){
// this.createNewGame()
//   }
//   createNewGame(){
// let obs = this._httpService.createNewGame(this.gold)
//  obs.subscribe(data => this.gold = data['data']
// })
// }

  click(val){
    // switch(val){
    //   var max;
    //   var min;
    //   case 'farm':
    //   max = 5;
    //   min = 2;
    //   break;
    //   case 'casino':
    //   max = 100;
    //   min = -100;
    //   break;
    //   default:
    //   console.log('something happened')
    // }
    //   let temp = Math.floor(Math.random() * (max - min + 1)+ min)
    // }

    if (val == 'farm') {
      var temp = Math.floor(Math.random() * (3) + 2)
      this.gold_count += temp
      this.log.push(`You earned ${temp} at the farm.`)
    }
    else if (val == 'cave') {
      var temp = Math.floor(Math.random() * (5) + 5)
      this.gold_count += temp
      this.log.push(`You earned ${temp} at the cave.`)
    }
    else if (val == 'house') {
      var temp = Math.floor(Math.random() * (8) + 7)
      this.gold_count += temp
      this.log.push(`You earned ${temp} at the house.`)
    }
    else if (val == 'casino') {
      var temp = Math.floor(Math.random() * (200) -100)
      this.gold_count += temp
      if (temp>0){
        this.log.push(`You earned ${temp} at the casino.`)
      }
      else {
        temp= Math.abs(temp)
        this.log.push(`You lost ${temp} at the casino.`)
      }
      
    }
    // this._httpService.updateGame(this.gold_count);
    this._httpService.postResult(this.gold_count, this.log)

  }
}


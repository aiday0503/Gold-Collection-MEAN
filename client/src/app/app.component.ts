import { Component } from "@angular/core";
import { HttpService} from "./http.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Ninja Gold";
  gold_count = 0;
  log = [];
  constructor(private _httpService: HttpService){}
  click(val){
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
    
    this._httpService.postResult(this.gold_count, this.log)

  }
}


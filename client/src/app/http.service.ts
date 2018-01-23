import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}

  // createNewGame(gold){
  // return this._http.post('/gold', gold)
  //   }
  //   updateGame(gold){
  //     return this._http.patch('/gold', gold)
  //   }
  
  
  
  // getGold(){   
  //   let tempObservable = this._http.get('/gold');
  //   tempObservable.subscribe(data => console.log("Got golds!", data));
  //   console.log(tempObservable);
  // }
  postResult(total,log){
    let tempObservable = this._http.post('/gold',{gold:total, logs:log});
    tempObservable.subscribe(data => console.log("post data", data));
    console.log(tempObservable)
  }
}


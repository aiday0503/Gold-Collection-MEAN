import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getGold();

  }
  getGold(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/gold');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our golds!", data));
  }
  postResult(total,log){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.post('/gold',total,log);
    
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("post this one task", data));
    console.log(tempObservable)
  }
}


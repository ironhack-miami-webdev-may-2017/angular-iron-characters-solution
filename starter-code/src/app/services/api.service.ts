import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {

  baseUrl = "http://ih-api.herokuapp.com"

  constructor(private myHttp: Http) { }


  getList () {
    let endPoint = "/characters"
    //make http request to http://ih-api.herokuapp.com/characters
    return this.myHttp.get(this.baseUrl+endPoint)
    //we get back a magical Angular array and use
    //.map to turn it into a regular old json array
      .map(result => result.json());
  }

  getOne(id){
    let endPoint = "/characters/"+id
    // make http request to /characters/whatever-the-id-is
    return this.myHttp.get(this.baseUrl+endPoint)
    // make request to api, receive a magical Angular object
    //use .map to turn it into a regular json object
      .map(result => result.json());
  }

  deleteOne (id) {
    let endPoint = "/characters/"+id
    return this.myHttp.delete(this.baseUrl+endPoint)
  }

  changeCharacterinDatabase (id, infoToPost) {
    let endPoint = "/characters/"+id;
    return this.myHttp.post(this.baseUrl+endPoint, infoToPost);
  }


  addToDatabase(theCharacter) {
    let endPoint = "/characters"
    // http request to our api/characters
    // the request is apost request to function takes 2 arguments
    // first argument is the URL, second is the data to send
    return this.myHttp.post(this.baseUrl+endPoint, theCharacter);

  }


}

import { Component, OnInit,Input,Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters = [
    {name: "TheName",
    id: "TheID",
    occupation: "TheOccupation",
    debt: "TheDebt",
    weapon: "TheWeapon"
  }
  ];


fetchID = ""

deleteID = ""


  constructor(private myApiService: ApiService) { }

  ngOnInit() {
  }

  fetchAll () {
    // console.log("fetching all")
    //we call the getList function from our service
    // we don't know how long this function will take to execute so we
    this.myApiService.getList()
    // subscribe to the return value of the function, and once it executed
    //this value is available to use as theList
    .subscribe((theList)=>{
      //once we have the array, we set that array equal to our this.characters array
      this.characters = theList;
      // since we have an ngFor for this.characters, the html will
      //automatically update

    })
  }

  fetchOne (id) {
    //console log the id to make sure the function receives the correct id
    console.log("the ID is", id)
    //call the getOne function from api service
    this.myApiService.getOne(id)
    //subscribe to the return value of that function
    //because we don't know how long it will take to execute
    .subscribe((theCharacter)=>{
      // the brackets are literally just an array with one variable inside
      //that variable happens to be an object containing all the info
      //about the characters we just looked up
      this.characters = [theCharacter];
      this.fetchID = ""
  });
}

  deleteOne (id) {
    //console log message to make sure function is executing
    //also console log value of id to make sure correct value is passed
    console.log("the ID is", id)
    //call my apiService's deleteOne function and pass the id as the argument
    this.myApiService.deleteOne(id)
    .subscribe((deletedCharacter)=>{});
    console.log("character deleted")
    this.deleteID = ""
    this.characters = []
  }



}

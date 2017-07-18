import { Component, OnInit,Input,Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-characters-forms',
  templateUrl: './characters-forms.component.html',
  styleUrls: ['./characters-forms.component.css']
})
export class CharactersFormsComponent implements OnInit {

  characterToCreateOrEdit = {
      name: "",
      id: "",
      occupation: "",
      debt: "",
      weapon: ""
  };

  constructor(private myApiService: ApiService) { }

  ngOnInit() {
  }

  createNew(){
    console.log("createNew Called");
    //console log characterToCreateOrEdit to check that ngModels in
    //html are correctly updating this value
    console.log(this.characterToCreateOrEdit);
    this.myApiService.addToDatabase(this.characterToCreateOrEdit)
    //send this.characterToCreateOrEdit as argument to function in service
    .subscribe((response)=>{});
    //subscribe to reponse because Angular demands it!
  }

  editOne(id){
    console.log("editOne Called", id);
    //console log to make sure function is running
    //also check the value of the id so we know we are aditing the right character
    //then, we console log characterToCreateOrEdit to make sure values are correct
    console.log(this.characterToCreateOrEdit);
    this.myApiService.changeCharacterinDatabase(id, this.characterToCreateOrEdit)
    //send this.characterToCreateOrEdit as argument to function in service
    // .subscribe((response)=>{});
    //subscribe to reponse because Angular demands it!

  }

}

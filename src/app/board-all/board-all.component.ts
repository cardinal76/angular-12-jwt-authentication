import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Country} from "../model/country";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-board-all',
  templateUrl: './board-all.component.html',
  styleUrls: ['./board-all.component.css']
})
export class BoardAllComponent implements OnInit {
  myControl = new FormControl();

  countries: Country[] = [ {id: '1', name: 'Italy', capital: 'Rome'}, {id: '1', name: 'USA', capital: 'New York'}, {id: '3', name: 'France', capital: 'Paris'}  ];
  filteredOptions!: Observable<Country[]>;
  posts: Object = [];

  constructor(private http : HttpClient) {

  }

  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

  }

  private _filter(country: Country): Country[] {
    const filterValue = country.name.toLowerCase();

    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  getUsers(country: Country){
    console.log(country.id);
    let url = 'https://jsonplaceholder.typicode.com/posts?userId='+country.id;
    console.log(url);
    this.http.get(`${url}`).subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
}

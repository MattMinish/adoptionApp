import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';


@Component({
  selector: 'app-adopt-filter-nav',
  templateUrl: './adopt-filter-nav.component.html',
  styleUrls: ['./adopt-filter-nav.component.css']
})
export class AdoptFilterNavComponent implements OnInit {

  constructor(private PetService: PetService) { }

  ngOnInit(): void {
  }

  getAdoptions() {
    let type_input = document.getElementById("type-input")["value"];
    let zip_input = document.getElementById("zip-input")["value"];
    let breed_input = document.getElementById("Breed-input")["value"];
    let gender_input = document.getElementById("gender-input")["value"];
    console.log(gender_input);
    this.PetService.fetchAdoptions(type_input,zip_input,breed_input,gender_input);
    // this.PetService.drawData();
  }

}


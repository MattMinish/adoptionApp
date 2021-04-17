import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-adoption-results',
  templateUrl: './adoption-results.component.html',
  styleUrls: ['./adoption-results.component.css']
})
export class AdoptionResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

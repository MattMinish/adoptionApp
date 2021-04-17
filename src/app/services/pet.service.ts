import { Injectable } from '@angular/core';
import { Client } from "@petfinder/petfinder-js";

let adoptionList = [];
let apiKey = 'EPoig6IreYlRPoIl8Ts9MDXrgp7yH3iv6iNzCvFhBAJsa5zWwv';
let secret = 'jRub6gSJHbibfALrw0ew6x8wPK1Gfsl5yh3VRifa';
const client = new Client({ apiKey: apiKey, secret: secret });

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }

  fetchAdoptions = (type_input: string, zip_input: string, breed_input: string, gender_input: string) => {

    if (zip_input == '') {
      client.animal.search({
        type: type_input,
        breed: breed_input,
        gender: gender_input,
        page: 1,
        limit: 15,
      }).then(function (response) {
        adoptionList = response.data.animals;
        drawData();
      })
        .catch(function (error) {
          console.log(error)// Handle the error
        });
    } else {
      client.animal.search({
        type: type_input,
        breed: breed_input,
        location: zip_input,
        page: 1,
        limit: 15,
      }).then(function (response) {
        adoptionList = response.data.animals;
        drawData();
      })
        .catch(function (error) {
          console.log(error)// Handle the error
        });
    }

  }

}

function drawData() {
  console.log(adoptionList);
  let resultList = document.querySelector("#adoption-list");
  resultList.innerHTML = '';

  for (let i = 0; i < adoptionList.length; i++) {
    let li = document.createElement('li');
    li.classList.add("list-group-item");

    if (adoptionList[i].description == null) {
      adoptionList[i].description = "the very bestest doge!";
    }
    if (adoptionList[i].primary_photo_cropped == null) {
      adoptionList[i].primary_photo_cropped = "https://graphicriver.img.customer.envatousercontent.com/files/270440720/CartoonDogPointer%20p.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=d7ccf47eef9f9a8f679c134cc70bffa5";
      li.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${adoptionList[i].primary_photo_cropped}" class="card-img-top" alt="${adoptionList[i].name}'s avatar">
          <div class="card-body">
            <h5 class="card-title">${adoptionList[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${adoptionList[i].size}</h6>
            <h7 class="card-subtitle mb-2 text-muted">${adoptionList[i].gender}</h7>
            <h8 class="card-subtitle mb-2 text-muted">${adoptionList[i].breeds.primary}</h8>
            <p class="card-text">${adoptionList[i].description}</p>
            <a href="${adoptionList[i].url}" class="card-link">Thier page</a>
          </div>
        </div>
        `;
      resultList.appendChild(li);
    } else {

      li.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${adoptionList[i].primary_photo_cropped.small}" class="card-img-top" alt="${adoptionList[i].name}'s avatar">
          <div class="card-body">
            <h5 class="card-title">${adoptionList[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${adoptionList[i].size}</h6>
            <h7 class="card-subtitle mb-2 text-muted">${adoptionList[i].gender}</h7>
            <h8 class="card-subtitle mb-2 text-muted">${adoptionList[i].breeds.primary}</h8>
            <p class="card-text">${adoptionList[i].description}</p>
            <a href="${adoptionList[i].url}" class="card-link">Thier page</a>
          </div>
        </div>
        `;
      resultList.appendChild(li);
    }
  }

}




let apiKey = 'EPoig6IreYlRPoIl8Ts9MDXrgp7yH3iv6iNzCvFhBAJsa5zWwv';
let secret = 'jRub6gSJHbibfALrw0ew6x8wPK1Gfsl5yh3VRifa';
let bearerToken = '';
let adoptionList = [];
let client_credentials = 'client_credentials';



    const getAdoptions = async () => {
        let type_input = document.getElementById("type-input").value;
        let zip_input = document.getElementById("zip-input").value;
        var pf = new petfinder.Client({ apiKey: apiKey, secret: secret });

        await pf.animal.search({
            type: type_input,
            location: zip_input,
            page: 1,
            limit: 15,
        })
            .then(function (response) {
                adoptionList = response.data.animals;
                drawData();
            })
            .catch(function (error) {
                console.log(error)// Handle the error
            });
        
    }


    let drawData = () => {
        console.log(adoptionList);
        let resultList = document.querySelector("#adoption-list");
        resultList.innerHTML = '';
        
        for(let i = 0; i < adoptionList.length; i++) {
            // Make a list element and add the appropriate class
            let li = document.createElement('li');
            li.classList.add("list-group-item");
            li.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${adoptionList[i].primary_photo_cropped.small}" class="card-img-top" alt="${adoptionList[i].name}'s avatar">
              <div class="card-body">
                <h5 class="card-title">${adoptionList[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${adoptionList[i].size}</h6>
                <p class="card-text">${adoptionList[i].description}</p>
                <a href="${adoptionList[i].url}" class="card-link">Thier page</a>
              </div>
            </div>
            `;
        
            // Finally, append the li we've built up to the parent element
            resultList.appendChild(li);
          }
    }

    
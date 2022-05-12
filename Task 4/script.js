/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json'; // stilius tragiskas si karta :) :) :) 

    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((user) => {
            const brand = document.createElement('h4');
            brand.innerText = user.brand;
            brand.classList.add('brand');
        
            const models = document.createElement('h4');
            models.innerText = user.models;
            models.classList.add('model');

            const carCard = document.createElement('div');
            carCard.classList.add('car-card');
            carCard.append(brand,models)

            document.getElementById('output').append(carCard);
        });
    });

/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("search").addEventListener("input", function(e) {
    e.preventDefault();
    let kgs = e.target.value;
    document.getElementById("outputLb").innerHTML = kgs * 0.0022046 + ' Weight Lbs';
    document.getElementById("outputG").innerHTML = kgs / 0.0010000 + ' Weight Grams';
    document.getElementById("outputOz").innerHTML = kgs * 35.274 + ' Weight Oz';
});

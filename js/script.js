var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

//console.log(fans.outerHTML);
//console.log(fish.outerHTML);
//console.log(pets.outerHTML);

fans.addEventListener ("mouseover", function(){
    fans.innerText ="123K";
});
fish.addEventListener ("mouseover", function(){
    fish.innerText ="47K";
})
pets.addEventListener ("mouseover", function(){
    pets.innerText ="20K";
})
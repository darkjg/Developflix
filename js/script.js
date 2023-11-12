import peliculas from './peliculas.js'
const accion= document.getElementById("genero-28");
const thriller= document.getElementById("genero-53");
const aventura= document.getElementById("genero-12");
const arrayAccion=[];//28
const arrayThriller=[];//53
const arrayAventura=[];//12

for (let i = 0; i < peliculas.length; i++) {
    
    if(peliculas[i].genre_ids.includes(28)){
        arrayAccion.unshift(peliculas[i]);
    }
    if(peliculas[i].genre_ids.includes(53)){
        arrayThriller.unshift(peliculas[i]);
    }
    if(peliculas[i].genre_ids.includes(12)){
        arrayAventura.unshift(peliculas[i]);
    }
}


for (let i = 0; i < arrayAccion.length; i++) {   
    accion.innerHTML+="<div ><img src=https://image.tmdb.org/t/p/w500"+arrayAccion[i].poster_path+"><p>"+arrayAccion[i].title+"</p></div>"
   
}
for (let i = 0; i < arrayThriller.length; i++) {
    thriller.innerHTML+="<div ><img src=https://image.tmdb.org/t/p/w500"+arrayThriller[i].poster_path+"><p>"+arrayThriller[i].title+"</p></div>"
}
for (let i = 0; i < arrayAventura.length; i++) {
    aventura.innerHTML+="<div ><img src=https://image.tmdb.org/t/p/w500"+arrayAventura[i].poster_path+"><p>"+arrayAventura[i].title+"</p></div>"
}
console.log(peliculas)
console.log(arrayAccion);
console.log(arrayThriller);
console.log(arrayAventura);
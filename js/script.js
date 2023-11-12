import peliculas from './peliculas.js'
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

console.log(peliculas)
console.log(arrayAccion);
console.log(arrayThriller);
console.log(arrayAventura);
// 1. Mix for e includes

const movies = [
    { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
    { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
    { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
    { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
];



const movieCategories = [
    { comedia: [] },
    { aventura: [] },
    { accion: [] },
    { thriller: [] },
    { animacion: [] }
];

for (let movie of movies) {
    if (movie.categories.includes("comedia" || "aventura" || "acción" || "thriller" || "animación")) {
        if (movie.categories.includes("comedia" && "aventura")) {
            movieCategories[0].comedia.push(movie.title);
            movieCategories[1].aventura.push(movie.title);
        } else if (movie.categories.includes("aventura" && "acción")) {
            movieCategories[1].aventura.push(movie.title);
            movieCategories[2].accion.push(movie.title);
        } else if (movie.categories.includes("comedia" && "thriller")) {
            movieCategories[0].comedia.push(movie.title);
            movieCategories[3].thriller.push(movie.title);
        } else if (movie.categories.includes("comedia" && "aventura" && "animación")) {
            movieCategories[0].comedia.push(movie.title);
            movieCategories[1].aventura.push(movie.title);
            movieCategories[4].animacion.push(movie.title)
        }
    }
}
console.log(movieCategories)


// for (let movie of movies) {
//     if (movie.categories.includes("comedia")) {
//         movieCategories[0].comedia.push(movie.title)
//     } else if (movie.categories.includes("aventura")) {
//         movieCategories[1].aventura.push(movie.title)
//     } else if (movie.categories.includes("acción")) {
//         movieCategories[2].accion.push(movie.title)
//     } else if (movie.categories.includes("thriller")) {
//         movieCategories[3].thriller.push(movie.title)
//     } else if (movie.categories.includes("animación")) {
//         movieCategories[4].animacion.push(movie.title)
//     }

// }

// console.log(movieCategories)



// for (let movie of movies) {
//     if (movie.categories.includes("comedia")) {
//         movieCategories[0].comedia.push(movie.title)
//     } else if (movie.categories.includes("aventura")) {
//         movieCategories[1].aventura.push(movie.title)
//     } else if (movie.categories.includes("acción")) {
//         movieCategories[2].accion.push(movie.title)
//     } else if (movie.categories.includes("thriller")) {
//         movieCategories[3].thriller.push(movie.title)
//     } else if (movie.categories.includes("animación")) {
//         movieCategories[4].animacion.push(movie.title)
//     }
// }

// console.log(movieCategories)
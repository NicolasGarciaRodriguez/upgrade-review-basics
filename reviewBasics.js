// 1. Mix for e includes

// const movies = [
//     { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
//     { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
//     { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
//     { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
// ];



// const movieCategories = [
//     { comedia: [] },
//     { aventura: [] },
//     { accion: [] },
//     { thriller: [] },
//     { animacion: [] }
// ];

// for (let movie of movies) {
//     if (movie.categories.includes("comedia" || "aventura" || "acción" || "thriller" || "animación")) {
//         if (movie.categories.includes("comedia" && "aventura")) {
//             movieCategories[0].comedia.push(movie.title);
//             movieCategories[1].aventura.push(movie.title);
//         } else if (movie.categories.includes("aventura" && "acción")) {
//             movieCategories[1].aventura.push(movie.title);
//             movieCategories[2].accion.push(movie.title);
//         } else if (movie.categories.includes("comedia" && "thriller")) {
//             movieCategories[0].comedia.push(movie.title);
//             movieCategories[3].thriller.push(movie.title);
//         } else if (movie.categories.includes("comedia" && "aventura" && "animación")) {
//             movieCategories[0].comedia.push(movie.title);
//             movieCategories[1].aventura.push(movie.title);
//             movieCategories[4].animacion.push(movie.title)
//         }
//     }
// }
// console.log(movieCategories)




// 2. Mix fors

// const users = [{
//         name: 'Manolo el del bombo',
//         favoritesSounds: {
//             waves: { format: 'mp3', volume: 50 },
//             rain: { format: 'ogg', volume: 60 },
//             firecamp: { format: 'mp3', volume: 80 },
//         }
//     },
//     {
//         name: 'Mortadelo',
//         favoritesSounds: {
//             waves: { format: 'mp3', volume: 30 },
//             shower: { format: 'ogg', volume: 55 },
//             train: { format: 'mp3', volume: 60 },
//         }
//     },
//     {
//         name: 'Super Lopez',
//         favoritesSounds: {
//             shower: { format: 'mp3', volume: 50 },
//             train: { format: 'ogg', volume: 60 },
//             firecamp: { format: 'mp3', volume: 80 },
//         }
//     },
//     {
//         name: 'El culebra',
//         favoritesSounds: {
//             waves: { format: 'mp3', volume: 67 },
//             wind: { format: 'ogg', volume: 35 },
//             firecamp: { format: 'mp3', volume: 60 },
//         }
//     },
// ]

// const volumes = [
//     { name: "Manolo el del bombo" },
//     { name: "Mortadelo" },
//     { name: "Super Lopez" },
//     { name: "El culebra" },
// ]



// 3. Mix fors






// 4. Metodos find array index

// const textos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

// function findArrayIndex(array, text) {
//     if (array.includes(text)) {
//         console.log(array.indexOf(text))
//     }
// }

// findArrayIndex(textos, "Salamandra")
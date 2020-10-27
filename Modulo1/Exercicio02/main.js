const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = [];

usuarios.map(usuario => {
    idades.push(usuario.idade)
})

console.log(idades)
console.log("=====================================")

const osmelhores = usuarios.filter(usuario => {
    return (usuario.idade > 18 && usuario.empresa == "Rocketseat")
})

console.log(osmelhores)
console.log("=====================================")

const google = usuarios.find(usuario => {
    return usuario.empresa == "Google";
})

console.log(google)

console.log("=====================================")

let multi = usuarios.map(usuario =>({
    ...usuario, idade : usuario.idade * 2
})).filter(usuario => {
    return usuario.idade < 50;
})
console.log(multi)

// const number = prompt('Diganos ¿cuantos usuarios va a agregar hoy?')
// const nombre = ['Felipe', 'Ailen', 'Marina', 'Renata', 'Diego', 'Gustavo', 'Lucas', 'Andres', 'Nidia', 'Lucia', 'Luca', 'Santiago', 'Federico', 'Cristian', 'Alma', 'Morena', 'Ivan', 'Fidel']
// const edad = ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']
// const peso = ['40', '41', '42', '43', '44', '45', '46', '47', '48', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90']
// const altura = ['1.45', '1.46', '1.47', '1.48', '1.50', '1.51', '1.52', '1.53', '1.54', '1.55', '1.56', '1.57', '1.58', '1.59', '1.60', '1.61', '1.62', '1.63', '1.64', '1.65', '1.66', '1.67', '1.68', '1.69', '1.70', '1.71', '1.72', '1.73', '1.74', '1.75', '1.76', '1.77', '1.78', '1.79', '1.80', '1.81', '1.82', '1.83', '1.84', '1.85', '1.86', '1.87', '1.88', '1.89', '1.90']

// for (i = 1 ; i <= number ; i++){

//     let nombre = prompt('¿Cual es su nombre?')
//     let res = (nombre);
//     console.log(res);

//     let edad = prompt('¿Que edad tiene?')
//     let res2 =(edad);
//     console.log(res2);

//     let peso = prompt('¿Cual es su peso?')
//     let res3 =(peso); 
//     console.log (res3);

//     let altura = prompt('¿Cual es su altura?')
//     let res4 =(altura);
//     console.log (res4);


// if (nombre && edad && peso && altura){

//     let users = new Persona(nombre,edad,peso,altura)
//     console.log(users)
// }else{
//     alert ('Es necesario que coloque todos los datos')
// }
// }
// alert ('Perfecto, usuario inscripto en nuestra aplicacion')


const users = []


function Persona(nombre, edad, peso, altura) {
    this.nombre = nombre,
        this.edad = edad,
        this.peso = peso,
        this.altura = altura
}
document.getElementById("miboton").onclick = function () {
    var minombre = document.getElementById("minombre").value;
    console.log("Buenas", minombre);

    var miedad = document.getElementById("miedad").value;
    console.log("Perfecto tienes", miedad, "años");

    var mipeso = document.getElementById("mipeso").value;
    console.log("Perfecto pesas", mipeso, "kilos");

    var mialtura = document.getElementById("mialtura").value;
    console.log("Perfecto mides", mialtura);
    const newUser = new Persona(minombre, miedad, mipeso, mialtura)

    users.push(newUser)
    console.log(newUser)
}

const btn = document.querySelector('#miboton')
miboton.addEventListener("click", (e) => {
e.preventDefault()
Swal.fire({
title: 'Genial!',
text: 'Enviaste tus datos correctamente',
icon: 'success',
showConfirmButton: false

});
});
a
const btnn = document.getElementById('button');

fetch('https://jsonplaceholder.typicode.com/posts', {
method: "POST",
body: JSON.stringify(users),
headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_8abrz9f';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar sus datos';
                alert('Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'Enviar sus datos';
                alert(JSON.stringify(err));
            });
    });


sessionStorage.setItem('minombre', 'Felipe', true);
sessionStorage.setItem('miedad', '18', true);
sessionStorage.setItem('mialtura', '1.90', true);
sessionStorage.setItem('mipeso', '70', true);

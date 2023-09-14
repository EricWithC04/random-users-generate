import { nombres } from "./nombres.mjs";
import { apellidos } from "./apellidos.mjs";
import { nacionalidades } from "./nacionalidades.mjs";
import { calles } from "./calles.mjs";

function randomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let alumnado = []

function generarAlumnosAleatorios (studentsNumber) {
    for (let i = 0; i < 10000; i++) {
        let nombre = randomNumbers(0, nombres.length - 1)
        let apellido = randomNumbers(0, apellidos.length - 1)
        let nacionalidad = randomNumbers(0, nacionalidades.length - 1)
        let dni = 30000000 + (i * 1000) + randomNumbers(1, 999)
        let calle = randomNumbers(0, calles.length - 1)
        let anio = randomNumbers(2015, 2023)
        let mes = randomNumbers(1, 12)
        let dia;
        if (mes === 2) {
            dia = randomNumbers(1, 28)
        } else {
            dia = randomNumbers(1, 30)
        }
        
        alumnado.push({
            nombre: nombres[nombre],
            apellido: apellidos[apellido],
            nacionalidad: nacionalidades[nacionalidad],
            dni,
            domicilio: {
                calle: calles[calle],
                altura: randomNumbers(1, 10000)
            },
            ingreso: `${dia}/${mes}/${anio}`,
            tutor: "holis"
        })
    }
}

generarAlumnosAleatorios()

console.log(alumnado);
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


///////////////////////////// ESERCIZIO 1
// SBAGLIATO
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// GIUSTO
for (let i = 0; i < 5; i++) {
    console.log(i);
}



///////////////////////////// ESERCIZIO 2
// SBAGLIATO
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }


// GIUSTO
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}




////////////////////////////// ESERCIZIO 3

// SBAGLIATO
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }


// GIUSTO
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


////////////////////////////// ESERCIZIO 4 (suggerimento: ci sono 7 errori)

// SBAGLIATO
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// GIUSTO
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
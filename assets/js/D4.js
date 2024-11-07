/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(7, 9));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 2------");

function crazySum(num1, num2) {
  if (num1 != num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
}
console.log(crazySum(0, 0));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 3------");

function crazyDiff(num1) {
    const num2 = 19;
  const differenza = num1 - num2;
  if (num1 > 19) {
    return differenza * 3;
  } else {
    return Math.abs(differenza);
  }
}
console.log(crazyDiff(23));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 4------");

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(22));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 5------");

function epify(myString) {
  const position = myString.indexOf("EPICODE");
  if (position < 0) {
    return "EPICODE" + myString;
  } else {
    return myString;
  }
}
console.log(epify("epicode è bello"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 6------");

function check3and7(num1) {
  if (num1 <= 0) {
    return false;
  } else {
    if (num1 % 3 === 0 || num1 % 7 === 0) {
        return true;
    }
    else {
        return false;
    }
  }
}
console.log(check3and7(77));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 7------");

function reverseString(myString) {
    return myString.split('').reverse().join('');
} console.log(reverseString('Camilla'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 8------");

function upperFirst(myString) {
    let words = myString.split(' ');
    let result = [];
    for (let i = 0; i < words.lenght; i++) {
        let first = words[i].charAt(0);
        let firstUpper = first.toUppercase();
        let cut = words[i].slice(1);
        let final = firstUpper + cut;
        result.push(final);
    }
    console.log(result.join(' '));
} console.log(upperFirst('ciao sono camilla'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 9------");
const cutString = function (str) {
    return str.slice(1, str.length - 1)
  }
  console.log(cutString('EPICODE'))
  const giveMeRandomm = function (n) {
    const arr = []
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 10))
    }
    return arr
  }
  console.log(giveMeRandomm(5))

/* console.log("------ES 8------");
function cutString (myString) {
    const myString = myString.su
} console.log(cutString('questa è la mia stringa'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------ES 10------");
const giveMeRandom = function (n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }
  return arr
}
console.log(giveMeRandom(5))
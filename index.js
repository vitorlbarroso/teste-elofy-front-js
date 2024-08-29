/* 

Teste 1 - Palíndromo (Palavra de trás para frente)
Crie uma função que teste se a palavra é um palíndromo e retorne true ou false.
Não é permitido usar método array.reverse ou array.toReversed().

*/

var str = "Anha";
str = str.toLowerCase();

let isPalindromo = true;

for(let i = 0; i < str.length; i++) {
    console.log(str[i], str[(str.length - 1) - i]);


    if (isPalindromo) {
        if (str[i] == str[((str.length - 1) - i)]) {
            isPalindromo = true;
        } else {
            isPalindromo = false;
        }
    }
}

return console.log(isPalindromo);
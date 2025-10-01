// Permutation de variables

// Solution classique utilisant une variable temporaire

// Solution alternative valable uniquement pour des nombres
/*
// Échange de nombre1 et nombre2 sans variable temporaire
*/
let a = 7;
let b = 3;
let tmp = null//abscence de valeure pas 0

//sauvgarde de la var a
//tmp = 7
//tmp =  a;
//valeurs destructive a et b = ===
//a = 3
//a = b;
//pour pouvoir permeuter la valeur de a
//b = 7
//b = tmp

//ou methode 2
console.log(a, b);
[a,b]=[b,a];//ceci vas intervetire du code
console.log(a, b);

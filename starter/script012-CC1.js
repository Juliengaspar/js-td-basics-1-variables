/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
// 2. Calculez le BMI de chacun.
// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
//
// BONNE CHANCE 😀
const poidsJohn =  parseFloat(prompt("quel est le poids de John kg"));
const poidsMark = parseFloat(prompt("quel est le poids de Mark kg"));
const tailleJohn = parseFloat(prompt("quel est la tailles de John M "));
const tailleMark = parseFloat(prompt("quel est la tailles de Mark M "));
const bmiJohn = poidsJohn / (tailleJohn*tailleJohn);
const bmiMark = poidsMark/ (tailleMark*tailleMark);
let markBimSuperieur;
if (bmiMark > bmiJohn){
    markBimSuperieur = true;
    console.log(`Est-ce que le BMI de Mark ${bmiMark} est plus élevé que celui de John  ${bmiJohn} ? ${markBimSuperieur}`)
}else {
    markBimSuperieur = false;
    console.log(`Est-ce que le BMI de Mark ${bmiMark} est plus élevé que celui de John  ${bmiJohn} ? ${markBimSuperieur}`)
}
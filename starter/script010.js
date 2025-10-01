/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2019, 28 et 33.
let  now = 2019;
const ageJohn = 28;
const ageMark = 33;
let yearJohn;
let yearMark;
// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(`Mark est né en ${yearJohn}.`);
console.log(`John est né en ${yearJohn}.`);
// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
now = now+2;
console.log(now)
now = 2019;
now = now*2;
console.log(now)
now = 2019;
now = now/10;
console.log(now)
// Opérateurs logiques
const ageToto = 21;
const ageTiti = 21;

console.log(ageTiti>ageToto);//plus grand que
console.log(ageTiti>=ageToto);//plus grand ou egale que
console.log(ageTiti<ageToto);//plus petits que
console.log(ageTiti<=ageToto);//plus petits ou egales que
//console.log(ageTiti == ageToto);//est egale à ==> false
console.log(ageTiti === ageToto);//est strictement ===  à valeur et le type et donc là ===> true
console.log(ageTiti !== ageToto);//est differnt !==  à valeur et le type et donc là ===> false
console.log(typeof ageToto);//number
console.log(typeof ageTiti);//string

console.log(!true);//false

console.log((ageTiti > 18) &&(ageTiti<21));//true
console.log((ageTiti > 18) || (ageTiti<21));//true
console.log(1 && 1);//true
// 4. … (Veuillez préciser votre question ou vos actions ici)

// Opérateur typeof
console.log(typeof now);

let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
let jour = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let tout = [[jour, mois], [days, months]]

console.log(tout[0][1][10]) //On prend la 2nd catégorie puis 
// encore la seconde catégorie et enfin l'élément 10

console.log(tout[1][0][4])
console.log(" ")
console.log("Mois en anglais: ")
for (let i = 0; i < tout[1][1].length; i++) {
    console.log(tout[1][1][i])
}
console.log(" ")
console.log("Jour en français: ")
for (let i = 0; i < tout[0][0].length; i++) {
    console.log(tout[0][0][i])
}
console.log(`Voilà le tableau au complet:`)
console.table(tout)
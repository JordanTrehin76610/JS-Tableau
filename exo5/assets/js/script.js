let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
let jour = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let tout = []
let fr=[]
let en=[]


fr.push(jour, mois)
en.push(days, months)
tout.push(fr, en)

console.log(tout[1][1][10]) //On prend la 2nd catégorie puis 
// encore la seconde catégorie et enfin l'élément 10

console.log(tout[1][0][4])
console.log(tout[1][1])
console.log(tout[0][0])
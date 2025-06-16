let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]

console.table(mois)

mois.forEach(function (item, index, array) {
  console.log(item, index);
});
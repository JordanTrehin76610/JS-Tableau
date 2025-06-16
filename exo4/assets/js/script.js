let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]

mois.forEach(function (item, index, mois) {
  console.log((index + 1) + "-" + item) //index+1 pour éviter que Janvier = 0
});
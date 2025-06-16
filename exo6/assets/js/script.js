let princesse = ["Cendrillon"]

princesse.push("Mulan",
    "Peach",
    "Raiponce",
    "Belle",
    "Vaiana",
    "Daisy",
    "Jasmine")

console.log(princesse)

princesse.splice(2, 1) //Pop pour supprimer le dernier élément 
princesse.splice(5, 1)

// princesse.splice(princesse.indexOf("Raiponce"),1)   POSSIBLE AUSSI POUR SUPPR
// princesse.splice(princesse.indexOf("Daisy"),1)

console.log(princesse)

princesse.sort() //Trie dans l'ordre croissant ou alphabétique

console.log(princesse)

console.log(`Il y a ${princesse.length} princesses dans ce château`)
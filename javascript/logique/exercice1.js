
//exercice1 fonction nombre pair
function estPair(nombre) {
    if (nombre % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(estPair(23));
console.log(estPair(10));


//Fonction sommeTableau(tableau)
function sommeTableau(tableau) {
    let sommeT = 0
    for (let i = 0; i < tableau.length; i++) {
        sommeT += tableau[i]
    }
    return sommeT
}

console.log("la somme du tableau:", sommeTableau([12, 10, 9]));


// 3. Fonction classifierNote(note)
function classifierNote(note) {
    if (note >= 16 && note <= 20) {
        return 'exellent'
    } else if (note >= 12 && note <= 16) {
        return "bien"
    } else if (note >= 10 && note <= 12) {
        return "Passable"
    } else {
        return "Insuffisant"
    }
}

console.log(classifierNote(12));


// 4. Manipulation d'objet
function moyenneEtudiant(etudiant) {
    let somme = 0
    for (let i = 0; i < etudiant.notes.length; i++) {
        somme += etudiant.notes[i]
    }
    let moyenne = somme / etudiant.notes.length
    return "la moyenne de " +  etudiant.nom  + ' est ' + moyenne  
}

console.log(moyenneEtudiant({
    nom: "Kouassi",
    prenom: "Awa",
    notes: [14, 9, 16, 12]
}));


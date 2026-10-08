// 1. Changer la couleur de fond au clic
let bouton = document.querySelector(".Théme");
let body = document.querySelector('body');

bouton.addEventListener('click', function (e) {
    e.preventDefault()
        body.style.backgroundColor = "blue"
})


// 2. Mettre en valeur un champ actif
const AllInput = document.querySelectorAll('input')
AllInput.forEach((input) => {
    input.addEventListener("focus", () => {
        input.style.borderColor = "green"
    });

    input.addEventListener('blur', function () {
        input.style.borderColor = "#ccc"
    })


});

// 3. Mode sombre / mode clair
document.querySelector('.mode-sombre')
    .addEventListener('click', function () {
        document.body.classList.toggle("hidden")
    })


// 4. Message dynamique a la soumission
const Message = document.querySelector('.Message')
const prenom = document.getElementById('lastname')

let soumission = document.getElementById('submit');
soumission.addEventListener('click', function (event) {
    event.preventDefault();

    let valeur = prenom.value

    if (prenom.value === "") {
        Message.textContent = "";
    } else {
        Message.textContent = `Bienvenue  ${valeur} !`
    }

    AllInput.forEach((input) => {
        input.value = ""
    })
})
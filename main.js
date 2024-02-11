/*****************/
/****  SWIPER  ****/
/*****************/
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  });
});

/*****************/
/****  TABS  ****/
/*****************/
const tabs = document.querySelectorAll("li");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });

    const tabContents = document.querySelectorAll(".tabcontent");
    //console.log(tabContents);
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    this.classList.add("tab-active");

    if (this.classList.contains("tab-MarkKeali")) {
      document.getElementById("Mark Keali i Ho omalu").classList.add("active");
    } else if (this.classList.contains("tab-Elvis")) {
      document.getElementById("Elvis Presley").classList.add("active");
    } else if (this.classList.contains("tab-Wynonna")) {
      document.getElementById("Wynonna Judd").classList.add("active");
    }
  });
});

/**********************/
/****  DARK MODE  ****/
/********************/
const switchBox = document.querySelector(".switchbox");
const btn = document.querySelector(".btn");
const icone = document.querySelector("i");
const container = document.querySelector(".container-dark");
const titre = document.querySelector("h1");

switchBox.addEventListener("click", function () {
  btn.classList.toggle("btn-change");
  icone.classList.toggle("icone-change");
  icone.classList.toggle("fa-sun");
  switchBox.classList.toggle("switch-change");
  container.classList.toggle("container-change");

  if (titre.innerText === "LIGHT MODE") {
    titre.innerText = "DARK MODE";
  } else {
    titre.innerText = "LIGHT MODE";
  }
});

/*****************/
/****  FORM  ****/
/*****************/
const form = document.getElementById("formulaire");
console.log(form);
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const msgError = document.querySelectorAll("error");
const sucessMsg = document.getElementById("message-success");

document.getElementById("formulaire").addEventListener("submit", function (e) {
  e.preventDefault();

  //Récupération des valeurs des inputs
  const nomValue = nom.value.trim(); //trim pour les espaces
  const prenomValue = prenom.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();

  msgError.forEach((error) => {
    error.classList.add("invisible");
  });

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  // Je vérifie les informations de l'utilisateur
  if (nomValue.length < 2 || nomValue.length > 10) {
    console.log("erreur nom");
    nom.nextElementSibling.classList.remove("invisible"); //nextElementSibling récupère l'élément qui suit
  } else if (prenomValue.length < 3 || prenomValue.length > 15) {
    console.log("erreur prenom");
    prenom.nextElementSibling.classList.remove("invisible");
  } else if (emailValue.length < 10 || emailValue.length > 100) {
    console.log("erreur email");
    email.nextElementSibling.classList.remove("invisible");
  } else if (passwordValue < 12 || passCheck.test(passwordValue) === false) {
    console.log("erreur mot de passe");
    password.nextElementSibling.classList.remove("invisible");
  } else if (passwordValue2 !== passwordValue || passwordValue2 === "") {
    console.log("erreur message");
    password2.nextElementSibling.classList.remove("invisible");
  } else {
    console.log("succès");
    sucessMsg.innerText = "Inscription réussi !";
    form.remove();
  }
  //const passwordConfirm = document.querySelector("#password2");
});

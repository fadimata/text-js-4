// console.log(chanson);
// Structure de Chanson:
// - auteur: string
// - titre: string
// - paroles : [Couplet, Couplet, ...]

// Structure de Couplet:
// id : string
// type : string
// chanteur : string
// contenu: tableau contenant les lignes du couplet

// 1.
const body = document.body;

const title = document.createElement("h1");
body.appendChild(title);
title.innerHTML = `<small>${chanson.auteur} -</small> ${chanson.titre}`;

// 2.
const contenu = document.createElement("div");
contenu.classList.add("paroles");
body.appendChild(contenu);
const paroles = chanson.paroles;
for (let i = 0; i < paroles.length; i++) {
  const paragraphe = document.createElement("p"),
    parolesContenu = paroles[i].contenu;
  //paragraphe.innerHTML = parolesContenu.join("<br>")
  for (let f = 0; f < parolesContenu.length; f++) {
    paragraphe.appendChild(document.createTextNode(parolesContenu[f]));
    paragraphe.appendChild(document.createElement("br"));
  }
  contenu.appendChild(paragraphe);
}

// 3.
const footer = document.createElement("footer"),
  graphe = document.createElement("p");
body.append(footer);
footer.append(graphe);
graphe.textContent = "© Copyright 2023 - Fady ";

// 4.
const label1 = document.createElement("label"),
  label2 = document.createElement("label"),
  button1 = document.createElement("input"),
  button2 = document.createElement("input"),
  texte1 = document.createTextNode(" Masquer les versets"),
  texte2 = document.createTextNode(" Masquer les paroles"),
  ligne = document.createElement("hr");

button1.setAttribute("type", "checkbox"); // type
button2.setAttribute("type", "checkbox"); // type

label1.append(button1, texte1);
label2.append(button2, texte2);

//l'emplacement des button et la ligne en dessous du h1
title.after(label1, label2, ligne);
//l'emplacement des button et la ligne en dessous du h1

//masquer les paroles: quand je click le checkbox les paroles doivent etre masquer
button2.addEventListener("click", function (e) {
  if (e.target.checked) {
    contenu.classList.add("hidden");
    ligne.classList.add("hidden");
  } else {
    contenu.classList.remove("hidden");
    ligne.classList.remove("hidden");
  }
});

// ici c'est pour recuperé les paragraphes
const paragraphes = contenu.getElementsByTagName("p");
for (let i = 0; i < paragraphes.length; i++) {
  const contenuChanson = chanson.paroles[i];
  paragraphes[i].classList.add(contenuChanson.type);
  if (contenuChanson.type === "verset") {
    const contenuParagraphe = paragraphes[i].innerHTML;
    paragraphes[i].textContent = "";
    const span1 = document.createElement("span"),
      span2 = document.createElement("span");
    span1.classList.add("definition", "hidden");
    span2.classList.add("contenu");
    span1.innerHTML = "[Verset]<br />";
    span2.innerHTML = contenuParagraphe;
    paragraphes[i].append(span1, span2);
  }
}

const versetElement = document.querySelectorAll("p.verset");
button1.addEventListener("click", (e) => {
  if (e.target.checked) {
    for (let i = 0; i < versetElement.length; i++) {
      const definition = versetElement[i].querySelector(".definition"),
         contenu = versetElement[i].querySelector(".contenu");
      definition.classList.remove("hidden");
      contenu.classList.add("hidden");

      definition.addEventListener("mouseenter", () => {
        contenu.classList.remove("hidden");
      });

      definition.addEventListener("mouseleave", () => {
        contenu.classList.add("hidden");
      });
    }
  } else {
    for (let i = 0; i < versetElement.length; i++) {
      const definition = versetElement[i].querySelector(".definition"),
        contenu = versetElement[i].querySelector(".contenu");
      definition.classList.add("hidden");
      contenu.classList.remove("hidden");
    }
  }
});

// const lists = document.getElementById("lists")

// const liNode = document.createElement("li");

// const textnode = document.createTextNode("Atelier meet");

// liNode.append(textnode)

// lists.appendChild(liNode)

// console.log(liNode);

/**
 * <li>Atelier meet</li>
 * ! CREER <li></li> : document.createElement("li")
 * 
 * ! CREER LE TEXT A INSERER DANS <li></li> : document.createTextNode("Atelier meet");
 * 
 * ! AJOUTER(append) LE TEXT DANS LE NODE <li></li> 
 */


// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);

// const element = document.getElementById("monElement")

// function insererNode(element , balise , contenu = "") {
//     const nouvelleElement = document.createElement(balise);

//     // inserer element
//     nouvelleElement.innerHTML = contenu

//     // Ajout de l'element
//     element.appendChild(nouvelleElement);
// }

// insererNode(element, "p" ,"On fait un meet 1") // p
// insererNode(element, "div" ,"On fait un meet 2") // div
// insererNode(element, "li" ,"On fait un meet 3") // li
// insererNode(element, "section" ,"On fait un meet 4") // section


const element = document.getElementById("monElement")
function insererNode(balise,contenu) {
    const baliser = document.createElement(balise)
    const texte = document.createTextNode(contenu)
    baliser.append(texte)
    return element.appendChild(baliser)
}


insererNode("p" ,"On fait un meet 1") // p
insererNode("div" ,"On fait un meet 2") // div
insererNode("li" ,"On fait un meet 3") // li
insererNode("section" ,"On fait un meet 4") // section
insererNode("h2" ,"On fait un meet 5") // h2


























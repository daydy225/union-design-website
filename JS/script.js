//Selectionner la div contenant toutes les images
const groupImg = document.querySelector(".main__page--photos");

// Nodelist de toutes de la div selectionner
const image = groupImg.querySelectorAll(".main__page--img");
// console.log(image);

// liens des images a ajouter
const imgList = [
  "https://picsum.photos/id/1027/300",
  "https://picsum.photos/id/1/300",
  "https://picsum.photos/id/1001/300",
  "https://picsum.photos/id/1005/300"
];

// Pour toutes images qu'on va survoler
image.forEach((img) => {
  // action declencher au survol de la souris
  img.addEventListener("mouseover", () => {
    // copie de la liste contenant les images a update
    let srcList = [...imgList];

    //generer un index aleatoire de srcList
    randomSrc = Math.floor(Math.random() * srcList.length);

    //update une differente images
    img.src = srcList[randomSrc];
  });
});

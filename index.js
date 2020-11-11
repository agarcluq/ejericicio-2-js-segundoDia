const listParent = document.querySelector(".color-list");
const firstChild = listParent.firstChild.nextSibling;

const child2=document.createElement('li');
const t_child2=document.createTextNode('color:white');

child2.appendChild(t_child2)
firstChild.appendChild(child2)

var dupNode1=firstChild.cloneNode(false);
listParent.append(dupNode1);

var dupNode2=firstChild.cloneNode(false);
listParent.append(dupNode2);

var dupNode3=firstChild.cloneNode(false);
listParent.append(dupNode3);

var dupNode4=firstChild.cloneNode(false);
listParent.append(dupNode4);
/*
  let lChild2=document.createElement('li')
  let lChild3=document.createElement('li')
  let lChild4=document.createElement('li')

  let s_child2=document.createElement('span')
  const t_child2=document.createTextNode("color:white");
  lChild2.appendChild(s_child2)
  s_child2.appendChild(t_child2)
  lChild2.classList.add("color-item--odd");

  let s_child3=document.createElement('span')
  const t_child3=document.createTextNode("color:red");
  lChild3.appendChild(s_child3)
  s_child3.appendChild(t_child3)
  lChild3.classList.add("color-item--odd");

  let s_child4=document.createElement('span')
  const t_child4=document.createTextNode("color:red");
  lChild4.appendChild(s_child4)
  s_child4.appendChild(t_child4)
  lChild4.classList.add("color-item--odd");

  listParent.appendChild(lChild2);
  listParent.appendChild(lChild3);
  listParent.appendChild(lChild4);



console.log(listParent);
*/


const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

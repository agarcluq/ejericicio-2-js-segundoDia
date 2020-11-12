const listParent = document.querySelector(".color-list");
const firstChild = listParent.firstChild.nextSibling;
//hijo 9
let child9=document.createElement('li'); //creo el li
//div 1 hijo 9
let s_child9=document.createElement('div') //creo el div
let t_child9=document.createTextNode('color:silver'); //creo el texto
child9.appendChild(s_child9); //añado el div al li
s_child9.appendChild(t_child9); //añado el texto al div
s_child9.classList.add("color-name") //añado la clase al div

//div 2 hijo 9
let s_child9b=document.createElement('div') //creo el div
let t_child9b=document.createTextNode('muestra'); //creo el texto
child9.appendChild(s_child9b); //añado el div al li
s_child9b.appendChild(t_child9b); //añado el texto al div
s_child9b.classList.add("color-show") //añado la clase al div

//div 3 hijo 9
let s_child9c=document.createElement('button') //creo el div
let t_child9c=document.createTextNode('Next item color'); //creo el texto
child9.appendChild(s_child9c); //añado el div al li
s_child9c.appendChild(t_child9c); //añado el texto al div
s_child9c.classList.add("color-set") //añado la clase al div

//div 4 hijo 9
let s_child9d=document.createElement('button') //creo el div
let t_child9d=document.createTextNode('Page color'); //creo el texto
child9.appendChild(s_child9d); //añado el div al li
s_child9d.appendChild(t_child9d); //añado el texto al div
s_child9d.classList.add("color-set") //añado la clase al div

//union al padre y crear clase li
child9.classList.add("color-item--odd") //añado la clase el li
firstChild.insertAdjacentElement('afterend',child9) //uno el li a su padre ul

////////

//hijo 8
let child8=document.createElement('li'); //creo el li
//div 1 hijo 8
let s_child8=document.createElement('div') //creo el div
let t_child8=document.createTextNode('color:green'); //creo el texto
child8.appendChild(s_child8); //añado el div al li
s_child8.appendChild(t_child8); //añado el texto al div
s_child8.classList.add("color-name") //añado la clase al div

//div 2 hijo 8
let s_child8b=document.createElement('div') //creo el div
let t_child8b=document.createTextNode('muestra'); //creo el texto
child8.appendChild(s_child8b); //añado el div al li
s_child8b.appendChild(t_child8b); //añado el texto al div
s_child8b.classList.add("color-show") //añado la clase al div

//div 3 hijo 8
let s_child8c=document.createElement('button') //creo el div
let t_child8c=document.createTextNode('Next item color'); //creo el texto
child8.appendChild(s_child8c); //añado el div al li
s_child8c.appendChild(t_child8c); //añado el texto al div
s_child8c.classList.add("color-set") //añado la clase al div

//div 4 hijo 8
let s_child8d=document.createElement('button') //creo el div
let t_child8d=document.createTextNode('Page color'); //creo el texto
child8.appendChild(s_child8d); //añado el div al li
s_child8d.appendChild(t_child8d); //añado el texto al div
s_child8d.classList.add("color-set") //añado la clase al div

//union al padre y crear clase li
child8.classList.add("color-item") //añado la clase el li
firstChild.insertAdjacentElement('afterend',child8) //uno el li a su padre ul

////////////////

//hijo 7
let child7=document.createElement('li'); //creo el li
//div 1 hijo 7
let s_child7=document.createElement('div') //creo el div
let t_child7=document.createTextNode('color:pink'); //creo el texto
child7.appendChild(s_child7); //añado el div al li
s_child7.appendChild(t_child7); //añado el texto al div
s_child7.classList.add("color-name") //añado la clase al div

//div 2 hijo 7
let s_child7b=document.createElement('div') //creo el div
let t_child7b=document.createTextNode('muestra'); //creo el texto
child7.appendChild(s_child7b); //añado el div al li
s_child7b.appendChild(t_child7b); //añado el texto al div
s_child7b.classList.add("color-show") //añado la clase al div

//div 3 hijo 7
let s_child7c=document.createElement('button') //creo el div
let t_child7c=document.createTextNode('Next item color'); //creo el texto
child7.appendChild(s_child7c); //añado el div al li
s_child7c.appendChild(t_child7c); //añado el texto al div
s_child7c.classList.add("color-set") //añado la clase al div

//div 4 hijo 7
let s_child7d=document.createElement('button') //creo el div
let t_child7d=document.createTextNode('Page color'); //creo el texto
child7.appendChild(s_child7d); //añado el div al li
s_child7d.appendChild(t_child7d); //añado el texto al div
s_child7d.classList.add("color-set") //añado la clase al div

//union al padre y crear clase li
child7.classList.add("color-item--odd") //añado la clase el li
firstChild.insertAdjacentElement('afterend',child7) //uno el li a su padre ul

////////////////////////

//hijo 6
let child6=document.createElement('li'); //creo el li
//div 1 hijo 6
let s_child6=document.createElement('div') //creo el div
let t_child6=document.createTextNode('color:orchild'); //creo el texto
child6.appendChild(s_child6); //añado el div al li
s_child6.appendChild(t_child6); //añado el texto al div
s_child6.classList.add("color-name") //añado la clase al div

//div 2 hijo 6
let s_child6b=document.createElement('div') //creo el div
let t_child6b=document.createTextNode('muestra'); //creo el texto
child6.appendChild(s_child6b); //añado el div al li
s_child6b.appendChild(t_child6b); //añado el texto al div
s_child6b.classList.add("color-show") //añado la clase al div

//div 3 hijo 6
let s_child6c=document.createElement('button') //creo el div
let t_child6c=document.createTextNode('Next item color'); //creo el texto
child6.appendChild(s_child6c); //añado el div al li
s_child6c.appendChild(t_child6c); //añado el texto al div
s_child6c.classList.add("color-set") //añado la clase al div

//div 4 hijo 6
let s_child6d=document.createElement('button') //creo el div
let t_child6d=document.createTextNode('Page color'); //creo el texto
child6.appendChild(s_child6d); //añado el div al li
s_child6d.appendChild(t_child6d); //añado el texto al div
s_child6d.classList.add("color-set") //añado la clase al div

//union al padre y crear clase li
child6.classList.add("color-item") //añado la clase el li
firstChild.insertAdjacentElement('afterend',child6) //uno el li a su padre ul

////////////////////////

//hijo 5
let child5=document.createElement('li'); //creo el li
//div 1 hijo 5
let s_child5=document.createElement('div') //creo el div
let t_child5=document.createTextNode('color:yellow'); //creo el texto
child5.appendChild(s_child5); //añado el div al li
s_child5.appendChild(t_child5); //añado el texto al div
s_child5.classList.add("color-name") //añado la clase al div

//div 2 hijo 5
let s_child5b=document.createElement('div') //creo el div
let t_child5b=document.createTextNode('muestra'); //creo el texto
child5.appendChild(s_child5b); //añado el div al li
s_child5b.appendChild(t_child5b); //añado el texto al div
s_child5b.classList.add("color-show") //añado la clase al div

//div 3 hijo 5
let s_child5c=document.createElement('button') //creo el div
let t_child5c=document.createTextNode('Next item color'); //creo el texto
child5.appendChild(s_child5c); //añado el div al li
s_child5c.appendChild(t_child5c); //añado el texto al div
s_child5c.classList.add("color-set") //añado la clase al div

//div 4 hijo 5
let s_child5d=document.createElement('button') //creo el div
let t_child5d=document.createTextNode('Page color'); //creo el texto
child5.appendChild(s_child5d); //añado el div al li
s_child5d.appendChild(t_child5d); //añado el texto al div
s_child5d.classList.add("color-set") //añado la clase al div

//union al padre y crear clase li
child5.classList.add("color-item--odd") //añado la clase el li
firstChild.insertAdjacentElement('afterend',child5) //uno el li a su padre ul

////////////////////////

//hijo 4
let child4=document.createElement('li'); //creo el li
//div 1 hijo 4
let s_child4=document.createElement('div') //creo el div
let t_child4=document.createTextNode('color:orange'); //creo el texto
child4.appendChild(s_child4); //añado el div al li
s_child4.appendChild(t_child4); //añado el texto al div
s_child4.classList.add("color-name") //añado la clase al div

//div 2 hijo 4
let s_child4b=document.createElement('div') //creo el div
let t_child4b=document.createTextNode('muestra'); //creo el texto
child4.appendChild(s_child4b); //añado el div al li
s_child4b.appendChild(t_child4b); //añado el texto al div
s_child4b.classList.add("color-show") //añado la clase al div

//div 3 hijo 4
let s_child4c=document.createElement('button') //creo el div
let t_child4c=document.createTextNode('Next item color'); //creo el texto
child4.appendChild(s_child4c); //añado el div al li
s_child4c.appendChild(t_child4c); //añado el texto al div
s_child4c.classList.add("color-set") //añado la clase al div

//div 4 hijo 4
let s_child4d=document.createElement('button') //creo el div
let t_child4d=document.createTextNode('Page color'); //creo el texto
child4.appendChild(s_child4d); //añado el div al li
s_child4d.appendChild(t_child4d); //añado el texto al div
s_child4d.classList.add("color-set") //añado la clase al div

//union al padre y crear clase li
child4.classList.add("color-item") //añado la clase el li
firstChild.insertAdjacentElement('afterend',child4) //uno el li a su padre ul

///////////////////////

//hijo 3
let child3=document.createElement('li'); //creo el li
//div 1 hijo 3
let s_child3=document.createElement('div') //creo el div
let t_child3=document.createTextNode('color:red'); //creo el texto
child3.appendChild(s_child3); //añado el div al li
s_child3.appendChild(t_child3); //añado el texto al div
s_child3.classList.add("color-name") //añado la clase al div

//div 2 hijo 3
let s_child3b=document.createElement('div') //creo el div
let t_child3b=document.createTextNode('muestra'); //creo el texto
child3.appendChild(s_child3b); //añado el div al li
s_child3b.appendChild(t_child3b); //añado el texto al div
s_child3b.classList.add("color-show") //añado la clase al div

//div 3 hijo 3
let s_child3c=document.createElement('button') //creo el div
let t_child3c=document.createTextNode('Next item color'); //creo el texto
child3.appendChild(s_child3c); //añado el div al li
s_child3c.appendChild(t_child3c); //añado el texto al div
s_child3c.classList.add("color-set") //añado la clase al div

//div 4 hijo 3
let s_child3d=document.createElement('button') //creo el div
let t_child3d=document.createTextNode('Page color'); //creo el texto
child3.appendChild(s_child3d); //añado el div al li
s_child3d.appendChild(t_child3d); //añado el texto al div
s_child3d.classList.add("color-set") //añado la clase al div

//union al padre y crear clase li
child3.classList.add("color-item--odd") //añado la clase el li
firstChild.insertAdjacentElement('afterend',child3) //uno el li a su padre ul

////////////////////////
//hijo 2
let child2=document.createElement('li'); //creo el li
//div 1 hijo 2
let s_child2=document.createElement('div') //creo el div
let t_child2=document.createTextNode('color:white'); //creo el texto
child2.appendChild(s_child2); //añado el div al li
s_child2.appendChild(t_child2); //añado el texto al div
s_child2.classList.add("color-name") //añado la clase al div

//div 2 hijo 2
let s_child2b=document.createElement('div') //creo el div
let t_child2b=document.createTextNode('muestra'); //creo el texto
child2.appendChild(s_child2b); //añado el div al li
s_child2b.appendChild(t_child2b); //añado el texto al div
s_child2b.classList.add("color-show") //añado la clase al div

//div 3 hijo 2
let s_child2c=document.createElement('button') //creo el div
let t_child2c=document.createTextNode('Next item color'); //creo el texto
child2.appendChild(s_child2c); //añado el div al li
s_child2c.appendChild(t_child2c); //añado el texto al div
s_child2c.classList.add("color-set") //añado la clase al div

//div 4 hijo 2
let s_child2d=document.createElement('button') //creo el div
let t_child2d=document.createTextNode('Page color'); //creo el texto
child2.appendChild(s_child2d); //añado el div al li
s_child2d.appendChild(t_child2d); //añado el texto al div
s_child2d.classList.add("color-set") //añado la clase al div

//union al padre y crear clase li
child2.classList.add("color-item") //añado la clase el li
firstChild.insertAdjacentElement('afterend',child2) //uno el li a su padre ul






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

//1) Select the section with an id of container without using querySelector.
const q1Container=document.getElementById("container");
console.log(q1Container)

//2) Select the section with an id of container using querySelector.
const q2Container=document.querySelector("section");
console.log(q2Container)

//3) Select all of the list items with a class of "second".
const q3SecondElements= document.getElementsByClassName("second")
console.log(q3SecondElements)

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const q4ol=q2Container.querySelector("ol")
const q4Third=q4ol.getElementsByClassName("third")
console.log(q4Third)

//5) Give the section with an id of container the text "Hello!".
const q5Hello=document.createElement("p")
q5Hello.innerText="Hello!"
q2Container.appendChild(q5Hello)
console.log(q2Container)

//6) Add the class main to the div with a class of footer.
q6Footer=document.getElementsByClassName("footer");
q6Footer[0].className += " main "
console.log(q6Footer)

//7) Remove the class main on the div with a class of footer.
q6Footer[0].remove("main")
console.log(q6Footer)

//8) Create a new li element.
q8li=document.createElement("li")
console.log(q8li);

//9) Give the li the text "four".
q8li.innerText="four"
console.log(q8li.innerText)

//10) Append the li to the ul element.
q10ul=q2Container.querySelector("ul")
q10ul.appendChild(q8li)
console.log(q10ul)

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
for(li in q4ol){
    q4ol.style.backgroundColor="green";
}

//13) Remove the div with a class of footer.
q6Footer.remove



//actual dom implementation using js
const div=document.createElement("div");
const h1=document.createElement("h1");
h1.innerText="hi bushra";
div.appendChild(h1);
const id=document.getElementById("root");//for access
id.appendChild(div);
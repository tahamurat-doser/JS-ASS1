const headerSelect = document.querySelector("header")
console.log(headerSelect);
headerSelect.style.backgroundColor = "#FFAFC5"
headerSelect.style.color = "#8D9CF4"
headerSelect.style.padding = "10px"
headerSelect.style.textAlign = "center"

const titleld = document.getElementById("title")
console.log(titleld);
titleld.textContent = "Javascript Dom Assignment 1"

const navItem = document.querySelector(".nav-item")
console.log(navItem);
navItem.style.display = "flex"
navItem.style.justifyContent = "center"
navItem.style.gap = "10px"
navItem.style.listStyle = "none"

const username = document.querySelector("#username")
console.log(username);
const password = document.querySelector("#password")
console.log(password);
username.value = "Taha Murat"
password.value = "98765432"

password.type = "visible"

username.disabled = true
password.disabled = true

username.style.backgroundColor = "gray"
username.style.color = "#E0ACF6"
username.style.borderRadius = "5px"

password.style.backgroundColor = "gray"
password.style.color = "#E0ACF6"
password.style.borderRadius = "5px"

const button = document.querySelector(".btn")
console.log(button);

button.style.backgroundColor = "#E0ACF6"
button.style.color = "gray"
button.style.padding = "5px"
button.style.borderRadius = "5px"
button.style.cursor = "pointer"
button.innerText = "Giriş Yap"

const project = document.getElementById("projects")
console.log(project); 

project.firstElementChild.textContent = "Js Dom Projects"
project.style.color = "#8D9CF4"
project.style.fontSize = "1.5rem"

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];


/* const liList = document.querySelector("main section#projects ul")
console.log(liList); */

projects.lastElementChild.innerHTML = `<li>${myProjects[0]}</li>
                                    <li>${myProjects[1]}</li>
                                    <li>${myProjects[2]}</li>
                                    <li>${myProjects[3]}</li>
                                    <li>${myProjects[4]}</li>`
projects.lastElementChild.style.fontSize = '1.5rem'
const lis = document.querySelectorAll('#projects li')
lis.forEach(item => item.style.fontSize = '1rem')
lis.forEach(item => item.style.listStyle = 'number')
lis.forEach(item => item.style.padding = '6px')
lis.forEach(item => item.style.cursor = 'pointer')
lis.forEach(item => item.style.color = "#FFD9D9")
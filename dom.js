//console.dir(document);

//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);  
//console.log(document.all[10]); 
//document.all[10].textContent='Hello';  
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//getelemntsby id
var headerTitle = document.getElementById('header-title'); 
var header= document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'goodbye';
//console.log(headerTitle.textContent);
//headerTitle.innerHTML = '<h3>Helloo</h3>';
//headerTitle.style.borderBottom = 'Solid 3px #000';
var items = document.getElementsByClassName('list-group-item');
items[1].textContent = 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'lightgreen';
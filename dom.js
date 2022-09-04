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
//var headerTitle = document.getElementById('header-title'); 
//var header= document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'goodbye';
//console.log(headerTitle.textContent);
//headerTitle.innerHTML = '<h3>Helloo</h3>';
//headerTitle.style.borderBottom = 'Solid 3px #000';
//var li = document.getElementsByTagName('li');
//items[1].textContent = 'Hello';
//items[1].style.fontWeight = 'bold';
//li[3].style.backgroundColor = 'lightgreen';

//for(var i=0;i<li.length;i++){
  //li[i].style.fontWeight = 'bold';
  
//}

//quarySelector
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #green';

//var input = document.querySelector('input');
i//nput.value = 'Hello World';
  
//var submit = document.querySelector('input[type="submit"]');
//submit.value="send";
//var item = document.querySelector('.list-group-item');
//item.style.color = 'lightgreen';
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'ligthgreen'; 

//querySelectorAll
var titles =document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';;
 
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor = 'lightgreen';
}




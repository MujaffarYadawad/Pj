 var form =document.getElementById('addForm');
 var itemList = document.getElementById('items');
//var filter = document.getElementById('filter');
 //form submit event
 form.addEventListener('submit', addItem);
 // delate event
 itemList.addEventListener('click', removeItem);
 itemList.addEventListener('click',edit);
 // filter event
 //filter.addEventListener('keyup',filterItems);
// add item
function addItem(e){
 e.preventDefault();
  
  //get input value
  var newItem= document.getElementById('item').value;

  //create new li element
  var li = document.createElement('li');

  // add class
  li.className = 'list-group-item';
  //console.log('li');

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // create del button element
  var deleteBtn = document.createElement("button");
  var editBtn= document.createElement('button');
  //add classes to del button
editBtn.className ='btn btn-edit bt-sm float-right edit';
deleteBtn.className = 'btn   btn-danger btn-sm float-right delete';

deleteBtn.appendChild(document.createTextNode('x'));
editBtn.appendChild(document.createTextNode('Edit'));

//append button to li\
li.appendChild(deleteBtn);
li.appendChild(editBtn)

//append button to all
 
  itemList.appendChild(li);
  
 // itemList.
}

//function remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li  = e.target.parentElement;
      itemList.removeChild(ff);
    }
  }
}

// filter items
// function filterItems(e){
//   // convert text to lowercase 
//   var text = e.target.value.toLowercase();
//   var items = itemList.getElementsByTagName('li');
//   //convert to an array
//   Array.form(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowercase().indexof(text) != -1){
//       item.style.display = 'block';
//     }else{
//       item.style.display = 'none';
//     }

//   });
// }
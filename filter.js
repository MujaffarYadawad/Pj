var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var edit=document.getElementById('edit')
var discription = document.getElementById('discription');

// Form submit event
form.addEventListener('submit', addItem);
form.addEventListener('onsubmit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//edit event
itemList.addEventListener('click',edit);
// Filter event
filter.addEventListener('keyup' , filterItems)
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
var newDiscription = document.getElementById('discription').value;
  // Create new li element
  var li = document.createElement('li');

  //create edit obj
  var editBtn =document.createElement('edit');
  editBtn.className = document.createElement('button');
  editBtn.className = 'btn btn-Edit btn-sm float-right';
  editBtn.appendChild(document.createTextNode('Edit'));

  // Add class
  li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem));
   li.appendChild(document.createTextNode(" "+ newDiscription));
    //itemList.appendChild(li);
  //addDiscription.className = 'list-group-item';

  // Add text node with input value
  //li.appendChild(document.createTextNode(newItem));
  //li.appendChild(document.createTextNode(newDiscription));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

 

    // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
   // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items


function filterItems(e){
    let input = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent ;
        let discname = item.childNodes[1].textContent ;

        if(itemName.toLowerCase().indexOf(input)!= -1  || discname.toLowerCase().indexOf(input)!=-1){
            item.style.display ="block";
        } else{
            item.style.display = "none";
        }
    })
}
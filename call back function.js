function DOMCONTENTLOADED(){

  let count=0;
  document.getElementById("clickMe")
 .addEventListener("click",function xyz(){
  console.log("DOM has loaded",++count);

 });

}
DOMCONTENTLOADED();
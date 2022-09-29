function buyACar(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
    res("bought a car");

  },3000);

  })
  
   
}
function plantrip(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
    res('lets go to mumbai');
  },1000);

  })
  
}
function reachMumbai(){
  return new Promise((res,rej)=>{
    setTimeout(() => {
    res("reached Mumbai");
  },1000);

  })
  
}
 async function trip(){
  const car = await buyACar();
  console.log(car)

  const planedTrip = await plantrip();

  console.log(planedTrip);

  const reachedMumbai = await reachMumbai();
  console.log(reachedMumbai);

 }
 trip();
  

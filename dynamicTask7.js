console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie = async () =>  {
  const  promiseWifeBringingTicketes = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('ticket')
  },3000)
});


const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
const getButter = new Promise((resolve, reject) => resolve(`butter`));
const getColdDrinks  = new Promise((resolve, reject) => resolve(`cold Dinks`));

  let ticket = await promiseWifeBringingTicketes;

  console.log(`husbund : i have ${ticket}`);
  console.log('husbund : we should go in ');
  console.log('wife : no i am hungry');
  
  let popcorn = await getPopcorn;
  console.log(`husbund : i got some ${popcorn}`);
  console.log('husbund : we should go in');
  console.log('wife : i need butter on my popcorn');

  let butter = await getButter;
  console.log(`husband : i got some ${butter} on popcorn`);
  console.log(`husband : anything else`);
  console.log(`wife: no i need cold Drinks`);
  

  let coldDrink = await butter;
  console.log(`husbaund : got ${coldDrink}`);
  console.log(`wife: lets go we are getting late`);
  console.log(`husband : thank you for the rimender`);

// let[popcorn, butter, coldDrink] = await Promise.all([getPopcorn,getButter,getColdDrinks])
// console.log(`${popcorn},${butter},${coldDrink}`);



return ticket;

}

preMovie().then((m)=> console.log(`person 3; shows ${m}`));




// 

//   
   
// });

// const getButter= getPopcorn.then((t) => {
//;

//   return new Promise((resolve,reject) => resolve(`${t} butter`));
// });
// getButter.then((t) => console.log(t));
console.log('person 4: shows ticket');
console.log('person 5: shows ticket');
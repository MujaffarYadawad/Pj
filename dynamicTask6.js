const posts = [
  {title : 'Post1',body:'this is post one', createdAt : new Date().getTime()},
  {title : 'Post2',body:'this is post two', createdAt : new Date().getTime()}
];
let intervalId = 0;

function getPosts(){
   
    clearInterval(intervalId);
    setInterval(()=>{
      let output = '';
       for(let i =0; i<posts.length; i++){
      output += `<li>${posts[i].title} - last updated ${(new Date().getTime()  - posts[i].createdAt) / 1000}seconds ago</li>`;
    }
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            const error=false;
            if(!error)
            {
                resolve()
            }else{
                reject()
            }

        },2000)
    }
    )}

function deletePosts(){
  console.log('del');
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(posts.length>0){
      const lastElement = posts.pop();
      resolve();
    }
    else{
      reject('Array is empty now');

    }

    },1000);
    
  })
  
}
// deletePosts();
//creat post

createPost({ title: 'post Three', body: 'This is post three'})
 .then(()=>{
  getPosts()
  deletePosts().then(()=>{
    getPosts();
  })
 })


   .catch(err => console.log(err));
 


//working with asynchronous code in JS

//an asynchronous code doesn't finish immediately, it takes a litte time, let's have an example
setTimeout(() => {
    console.log('Timer is done');//this takes 3 secs to get printed

},3000);


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
      .then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');
  

//the sync (synchronious code)
/*This code will be printed before the code above 
cause node and JS doesn't block the execution
So while waiting the above code finish, it will execute the next task*/
console.log('Hi');
console.log('What\'s your name?');


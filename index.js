// Documet Object Model 
// Add, change and delete content
// Make a cool pop-up effect in the webpage

// what is the Dom is the somthing that is load by the browser when HTML Document is load inside it

//  steps in adding and removing content on a webpage

// quering the dom

// const para = document.querySelector('p');

// console.log(para)

// const para3  = document.querySelector('div.errror');

// console.log(para3)

// to grab a single elemnet use querySelector

// to grab multiple element use querySelectorAll

const paras = document.querySelectorAll('p')
const error = document.querySelectorAll('.error');
console.log(error)
console.log(paras[2]);

// get element by ID
  const title = document.getElementById('page-title');
  console.log(title);

// grab element by their class name
 const errors = documet.getElementsByclassName('error');
 console.log(errors);
// grab element ny their tag name
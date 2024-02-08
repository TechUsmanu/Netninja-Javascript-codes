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

// const paras = document.querySelectorAll('p')
// const error = document.querySelectorAll('.error');
// console.log(error)
// console.log(paras[2]);

// // get element by ID
//   const title = document.getElementById('page-title');
//   console.log(title);

// to change a text or element inside a HTML tag

const para = document.querySelector('p');

// console.log(para.innerText);
// to change something on the page
// para.innerText = 'ninjas are awesome!';

// to change the text of several items

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para.innerText);
//   // to udte the concept
//   para.innerText += 'new text';
// }
  
// );
// to chnage the HTML on somthing

const content = document.querySelector('.content');

// console.log(content.innerHTML);

// to update  with another thing
// += to append and = normal equal to overide it


// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});





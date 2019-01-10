document
.querySelector("html")
 // Everytime we click the body 
  .addEventListener("click", () => {
  

  // Add an element to the body 
  document.querySelector("body").insertAdjacentHTML("beforeend","<h1> Happy New Year 2019 </h1>")
})

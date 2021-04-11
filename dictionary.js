/* Tutorial credit: @yoyo on codepen*/

const transDict = "data.json";

const txtBox = document.querySelector(".text");
const form = document.querySelector(".searchText");
const searchWord = document.querySelector(".word");
const description = document.querySelector(".definition");

function searchDict(event) {
  event.preventDefault();
  fetch(transDict)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      event.preventDefault;
      let word = txtBox.value;
      console.log(txtBox.value);
      let searchKeyword = word.toLowerCase();
      Object.keys(data).forEach(function(key) {
        if (key === searchKeyword) {
          searchWord.innerHTML = searchKeyword;
          if(searchKeyword === data[key]){
            description.innerHTML = "none";
          }
          else{
             description.innerHTML = data[key];
          }
          
          console.log(data[key]);
        }
      });
    });
}

form.addEventListener("submit", searchDict);
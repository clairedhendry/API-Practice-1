 'use strict'

 function getRandomDogs(number) {
    const value = $("input#input-number").val();
    
     if ((number <= 50) && (number > 0)) {
     const fetchNumber = `https://dog.ceo/api/breeds/image/random/${number}`
     fetch(fetchNumber)
     .then(response => response.json())
     .then(responseJson => console.log(responseJson))
 }  else { 
     fetch('https://dog.ceo/api/breeds/image/random/3')
     .then(response => response.json())
     .then(responseJson => console.log(responseJson))

 }
}

function getNumber() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
        const value = $("input#input-number").val();
        getRandomDogs(value);
    })   
}


$(getRandomDogs)
$(getNumber)




 
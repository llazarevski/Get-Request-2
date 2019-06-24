
function getDogPic(breed){
    let imageUrl ='https://dog.ceo/api/breed/'+ breed +'/images/random';
    console.log(imageUrl);
    fetch(imageUrl)
      .then(response => response.json())
      // .then(response => console.log(response.status))
      .then(responseJson => {
      if (responseJson.status === "success"){
          displayResults(responseJson);
  } else {
        $('.imageContainer').removeClass('hidden');
        $('.imageContainer').html("Sorry, we do not have pictures of that breed.  Please try another.")
  };
    })
    .catch(error => alert('Something went wrong. Try again later.'))
  };
    
  function errorMessage(){
    $(".imageContainer").append(`<div class="error">Sorry we do not have pictures of that breed.  Please try another</div>`);
  };
                            
  function displayResults(responseJson){
    // let image = responseJson.message;
      console.log(responseJson.message);
      $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`);
      $('.imageContainer').removeClass('hidden');
   };
  
  function watchForSubmit(){
  $('form').submit(event=> {
    event.preventDefault();
    let breed= $('.breed').val();
      console.log(breed);
      getDogPic(breed);
  });
  };
  
  watchForSubmit();
  
  
  
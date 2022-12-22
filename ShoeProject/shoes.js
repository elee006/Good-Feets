var request = new XMLHttpRequest()

request.open('GET', 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=17', true)
request.setRequestHeader("X-RapidAPI-Key", "56a6db7998msh79e284753227031p1b6cc5jsn3b5d1ced5855");
request.setRequestHeader("X-RapidAPI-Host", "sneaker-database-stockx.p.rapidapi.com");
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(shoes => {
      console.log(shoes.make);
    })
  } else {
    console.log('error')
  }
  function showMostPopular(image) {
	var image = document.createElement('img');
	image.src = shoe.thumbnail;
	document.getElementById('img');


}
  return data;
}

request.send()



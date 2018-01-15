
var Bloodhound = function(client, user) {

    // Pegar o page view - v
    // Pegar o usuário - v
    // Enviar pro servidor salvar - v
    // Co relacionar o usuário ao browser - 
    // Criar usuário único do app (bloodID) - 

    var location = window.location;
    var navigator = window.navigator;

    console.log('client', client);
    console.log('user', user);
    console.log('location', location);
    console.log('navigator', navigator);

    var xhttp = new XMLHttpRequest();    
    var url = 'http://localhost:3000/post';
   
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
       
      }
    };

    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({client, user, location, navigator}));
    
};
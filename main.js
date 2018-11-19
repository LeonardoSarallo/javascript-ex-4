// Una funzione per capire se la parola è palindroma

var parola = 'croce';

var parolapalindroma = '';

for (var i = parola.length -1; i >= 0; i--)
{
  parolapalindroma = parolapalindroma + parola[i];
}

  if (parolapalindroma == parola) {
    alert('la parola è palindorma');
  }

  else {
    alert('la parola non è palindroma');

  }

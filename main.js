// bottone che avvia e citazione inziale
var btnStart = document.querySelectorAll('.btnStart');
var cit = document.querySelector('#cit');
// blocco tratte
var citSceltaTratta = document.querySelectorAll('.sceltaTratta')[0];
var elencoSceltaTratta = document.querySelectorAll('.sceltaTratta')[1];
// variabili dei click sulle tratte
var tratta1 = document.getElementById('tratta1');
var tratta2 = document.getElementById('tratta2');
var tratta3 = document.getElementById('tratta3');
var tratta4 = document.getElementById('tratta4');
// tutte le tratte
var tratte = document.getElementsByClassName('trip');
// blocco munero passeggeri
var numPasseggeriArea = document.getElementById('numPasseggeriArea');
var numPassenger = document.querySelector('#numPassenger');

//situazioni non display di default dei blocchi che entrano dopo

citSceltaTratta.style.display = 'none';
elencoSceltaTratta.style.display = 'none';
numPasseggeriArea.style.display = 'none';

// da  inizio a selziona trarra
var i;
for (let i = 0; i < btnStart.length; i++) {
  btnStart[i].addEventListener('click', () => {
    btnStart[0].style.display = 'none';
    btnStart[1].style.display = 'none';
    cit.style.display = 'none';
    citSceltaTratta.style.display = 'block';
    elencoSceltaTratta.style.display = 'flex';
  });
}

var distance;

tratta1.addEventListener('click', () => {
  return (distance = 123.8);
});
tratta2.addEventListener('click', () => {
  return (distance = 83.9);
});
tratta3.addEventListener('click', () => {
  return (distance = 407.2);
});
tratta4.addEventListener('click', () => {
  return (distance = 230.14);
});

for (let i = 0; i < tratte.length; i++) {
  tratte[i].addEventListener('click', () => {
    citSceltaTratta.style.display = 'none';
    elencoSceltaTratta.style.display = 'none';
    numPasseggeriArea.style.display = 'block';
    numPassenger.focus();
  });
}

// si passa a inserimento numero di passeggeri
// nascondere messsaggio err se non mettonono numero in input numero passeggeri
var errorNumPass = document.querySelector('#errorNumPass');
errorNumPass.style.display = 'none';

var quantitaPasseggeri;

numPassenger.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    if (isNaN(parseInt(numPassenger.value))) {
      errorNumPass.style.display = 'inline-block';
    } else {
      quantiaPassegeri = parseInt(numPassenger.value);
      console.log(parseInt(numPassenger.value));
    }
  }
});

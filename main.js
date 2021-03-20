// bottoni che avviano e citazione inziale
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
// area ci sono minnori?
var minoriSiNo = document.getElementById('minoriSiNo');
var siMinori = document.getElementById('siMinori');
var noMinori = document.getElementById('noMinori');
var numMinPasseggeriArea = document.getElementById('numMinPasseggeriArea');
var numPassengernumMinPassenger = document.getElementById(
  'numPassengernumMinPassenger'
);
var errorNumMinPass = document.getElementById('errorNumMinPass');
// area ci sono over 65 ?
var vecchiSiNo = document.getElementById('vecchiSiNo');
var noVecchi = document.getElementById('noVecchi');
var siVecchi = document.getElementById('siVecchi');
var numVecchiPasseggeriArea = document.getElementById(
  'numVecchiPasseggeriArea'
);
var numVecchiPassenger = document.getElementById('numVecchiPassenger');
var errorNumVecchiPass = document.getElementById('errorNumVecchiPass');
// blocco munero passeggeri
var numPasseggeriArea = document.getElementById('numPasseggeriArea');
var numPassenger = document.querySelector('#numPassenger');

//situazioni non display di default dei blocchi che entrano dopo

citSceltaTratta.style.display = 'none';
elencoSceltaTratta.style.display = 'none';
numPasseggeriArea.style.display = 'none';
minoriSiNo.style.display = 'none';
numMinPasseggeriArea.style.display = 'none';
errorNumMinPass.style.display = 'none';
vecchiSiNo.style.display = 'none';
numVecchiPasseggeriArea.style.display = 'none';

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
    minoriSiNo.style.display = 'block';
  });
}

// opzione minori si
siMinori.addEventListener('click', () => {
  minoriSiNo.style.display = 'none';
  numMinPasseggeriArea.style.display = 'block';
});

// opzione minori no
noMinori.addEventListener('click', () => {
  minoriSiNo.style.display = 'none';
  vecchiSiNo.style.display = 'block';
});

// campo che chiede quanti minori
var quantitaPasseggeriMinori = 0;

numMinPassenger.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    if (isNaN(parseInt(numMinPassenger.value))) {
      errorNumMinPass.style.display = 'inline-block';
    } else {
      quantitaPasseggeriMinori = parseInt(numMinPassenger.value);
      numMinPasseggeriArea.style.display = 'none';
      vecchiSiNo.style.display = 'block';
    }
  }
});

//campo che chiede quanti anziani

var quantitaPasseggeriVecchi = 0;

numVecchiPassenger.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    if (isNaN(parseInt(numVecchiPassenger.value))) {
      errorNumVecchiPass.style.display = 'inline-block';
    } else {
      quantitaPasseggeriVecchi = parseInt(numVecchiPassenger.value);
      numVecchiPasseggeriArea.style.display = 'none';
      vecchiSiNo.style.display = 'block';
    }
  }
});

// opzione vecchi si
siVecchi.addEventListener('click', () => {
  vecchiSiNo.style.display = 'none';
  numVecchiPasseggeriArea.style.display = 'block';
});

// opzione vecchi no
noVecchi.addEventListener('click', () => {
  vecchiSiNo.style.display = 'none';
  numPasseggeriArea.style.display = 'block';
});

// si passa a inserimento numero di passeggeri
// nascondere messsaggio err se non mettonono numero in input numero passeggeri
// var errorNumPass = document.querySelector('#errorNumPass');
// errorNumPass.style.display = 'none';

// var quantitaPasseggeri;

// numPassenger.addEventListener('keypress', () => {
//   if (event.keyCode === 13) {
//     if (isNaN(parseInt(numPassenger.value))) {
//       errorNumPass.style.display = 'inline-block';
//     } else {
//       quantiaPassegeri = parseInt(numPassenger.value);
//       console.log(parseInt(numPassenger.value));
//     }
//   }
// });

//contatore

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var counter = document.getElementById('counter');

plus.addEventListener('click', () => {
  var num = parseInt(counter.innerText);
  num++;
  counter.innerHTML = num;
});
minus.addEventListener('click', () => {
  if (parseInt(counter.innerText) > 0) {
    var num = parseInt(counter.innerText);
    num--;
    counter.innerHTML = num;
  }
});

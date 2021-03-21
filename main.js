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
// blocco munero passeggeri èta media
var numPasseggeriArea = document.getElementById('numPasseggeriArea');
var numPassenger = document.querySelector('#numPassenger');
var btnImpostatiPassegMedi = document.querySelector('#btnImpostatiPassegMedi');
// possibili date
var possibiliDate = document.querySelector('#possibiliDate');
// blocco presentazione biglietto
var presentaBigliettoArea = document.querySelector('#presentaBigliettoArea');

//situazioni non display di default dei blocchi che entrano dopo

citSceltaTratta.style.display = 'none';
elencoSceltaTratta.style.display = 'none';
numPasseggeriArea.style.display = 'none';
minoriSiNo.style.display = 'none';
numMinPasseggeriArea.style.display = 'none';
errorNumMinPass.style.display = 'none';
vecchiSiNo.style.display = 'none';
numVecchiPasseggeriArea.style.display = 'none';
errorNumVecchiPass.style.display = 'none';
possibiliDate.style.display = 'none';
presentaBigliettoArea.style.display = 'none';

// da  inizio a selziona trarra
var i;
for (let i = 0; i < btnStart.length; i++) {
  btnStart[i].addEventListener('click', () => {
    btnStart[0].style.display = 'none';
    btnStart[1].style.display = 'none';
    cit.style.display = 'none';
    citSceltaTratta.style.display = 'block';
    elencoSceltaTratta.style.display = 'fleelemPercorso';
  });
}

var distance = 0;
var tragitto;

tratta1.addEventListener('click', () => {
  distance = 123.8;
  tragitto = 'Perth-Glasgow‎';
});
tratta2.addEventListener('click', () => {
  distance = 83.9;
  tragitto = 'Edimburgo‎-Glasgow‎‎';
});
tratta3.addEventListener('click', () => {
  distance = 407.2;
  tragitto = 'Edimburgo‎-Skye';
});
tratta4.addEventListener('click', () => {
  distance = 230.14;
  tragitto = 'Stiling‎-Iverness';
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
  numMinPassenger.focus();
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

// opzione vecchi si
siVecchi.addEventListener('click', () => {
  vecchiSiNo.style.display = 'none';
  numVecchiPasseggeriArea.style.display = 'block';
  numVecchiPassenger.focus();
});

// opzione vecchi no
noVecchi.addEventListener('click', () => {
  vecchiSiNo.style.display = 'none';
  numPasseggeriArea.style.display = 'block';
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
      numPasseggeriArea.style.display = 'block';
    }
  }
});

//cotatore su numero passeggeri età media
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

// cliccare bottone conferma passeggeri età media

var titoloDateDisponibili = document.getElementById('titoloDateDisponibili');
var quantitaPasseggeriMedi = 0;

btnImpostatiPassegMedi.addEventListener('click', () => {
  var quantitaPasseggeriMedi = parseInt(counter.innerText);
  numPasseggeriArea.classList.add('fade-out');
  possibiliDate.style.display = 'block';
  titoloDateDisponibili.innerHTML =
    'per la tratta che hai scelto, "' +
    tragitto +
    '", ci sono queste date disponibili:';
  /* area passeggeri display non solo 
    quando su animazione fade out finita */
  setTimeout(function () {
    numPasseggeriArea.style.display = 'none';
  }, 400);
});

// sezione scelta una delle date disponibili

var timeStampDUtente;

// variabili delle date disponibii

var tra5min = document.getElementById('tra5min');
var giu2021 = document.getElementById('giu2021');
var gen2022 = document.getElementById('gen2022');
var nov2022 = document.getElementById('nov2022');

// otteneri i secondi mancanti alla data del viaggio

tra5min.addEventListener('click', () => {
  timeStampDUtente = new Date().getTime() + 300000;
  callCountDown();
});
giu2021.addEventListener('click', () => {
  timeStampDUtente = new Date(2021, 5, 10, 13, 50, 0, 0).getTime();
  callCountDown();
});
gen2022.addEventListener('click', () => {
  timeStampDUtente = new Date(2022, 0, 8, 17, 10, 0, 0).getTime();
  callCountDown();
});
nov2022.addEventListener('click', () => {
  timeStampDUtente = new Date(2022, 10, 13, 10, 05, 0, 0).getTime();
  callCountDown();
});

// variabile elemento countdown
var countDownElement = document.getElementById('countDownElement');

//CHIMARE FUNZIONE SUBITO E POI OGNI SECONDO
function callCountDown() {
  upDateCountDown();
  setInterval(upDateCountDown, 1000);
  ticketTemplate();
}

function upDateCountDown() {
  timeStampAllaChimataFunz = new Date().getTime();
  seconds = Math.floor((timeStampDUtente - timeStampAllaChimataFunz) / 1000);
  //NUMERO MINUTI E SECONDI E ORE NEL COUNTDOWN
  var years = Math.floor(seconds / 60 / 60 / 24 / 365);
  var days = Math.floor(seconds / 60 / 60 / 24);
  var hours = Math.floor(seconds / 60 / 60);
  var minutes = Math.floor(seconds / 60);
  //NUMERO DEI SECONDI MINUTI E ORE IN MODULO SESSAGESIMALE
  var secondsInModulo = seconds % 60;
  var minutes = minutes % 60;
  var hours = hours % 24;
  var days = days % 365;

  //SCRIVERE BENE I SECONDI/MINUTI/ORE CON 0 DAVANTI SE < DI 10
  secondsInModulo =
    secondsInModulo < 10 ? `0` + secondsInModulo : secondsInModulo;
  minutes = minutes < 10 ? `0` + minutes : minutes;
  hours = hours < 10 ? `0` + hours : hours;
  /* Inserire "conto alla rovescia che si rinnova
        ogni secondo nel p costruito apposta + if per sapere
        se bisogna scrivere dentro anche anni e giorni"
        ANNI*/
  if (seconds > 60 * 60 * 24 * 365) {
    var contoAllaRovescia = `${years} anni, ${days} giorni +
            ore/minuti/secondi &#8594; ${hours}:${minutes}:${secondsInModulo}`;
  } else if (seconds > 60 * 60 * 24) {
    var contoAllaRovescia = `${days} giorni +
            ore/minuti/secondi &#8594; ${hours}:${minutes}:${secondsInModulo}`;
  } else if (seconds > 60 * 60) {
    var contoAllaRovescia = `${hours} ore, ${minutes} minuti, ${secondsInModulo} secondi`;
  } else if (seconds > 60) {
    var contoAllaRovescia = `${minutes} minuti, ${secondsInModulo} secondi`;
  } else {
    var contoAllaRovescia = `${secondsInModulo} secondi`;
  }
  countDownElement.innerHTML = `tra: ${contoAllaRovescia}`;
  //FAR SI CHE ARRIVATO A 0 FERMI IL COUNDOWN OPPURE CONTINUI A SCALARE UN'UNITA'
  seconds > 0 ? seconds-- : clearInterval(upDateCountDown);
}
// variabili degli elementi in cui inserire dati biglietto
var elemPercorso = document.getElementById('elemPercorso');
var elemkids = document.getElementById('elemkids');
var elemVecchi = document.getElementById('elemVecchi');
var elemfasciaMed = document.getElementById('elemfasciaMed');
var elemTotale = document.getElementById('elemTotale');

// funzione per inserimento dati biglietto
function ticketTemplate() {
  possibiliDate.style.display = 'none';
  presentaBigliettoArea.style.display = 'block';
}

// redo
var redo = document.getElementById('redo');

redo.addEventListener('click', () => {
  btnStart[0].classList.add('fade-in');
  btnStart[1].classList.add('fade-in');
  cit.classList.add('fade-in');
  presentaBigliettoArea.style.display = 'none';
  btnStart[0].style.display = 'block';
  btnStart[1].style.display = 'inline-block';
  cit.style.display = 'block';
});



var numeroTotaleArray = parseInt(prompt('Dammi il numero di array che vuoi creare'));

var arrayMultidimensionale = [];

for (var index = 0; index < numeroTotaleArray; index++) {
  arrayMultidimensionale.push(generaArrayConDieciNumeriCasuali());
}

console.log(arrayMultidimensionale);

var sommeArray = [];

for (var i = 0; i < arrayMultidimensionale.length; i++) {

  sommeArray.push(sommaTuttiGliElementiDi(arrayMultidimensionale[i]));
}

console.log(sommeArray);

var posizioneArrayVincitore = estraiPosizioneNumeroPiuAltoPresenteIn(sommeArray);

console.log('vince array a posizione ' + posizioneArrayVincitore);

function estraiPosizioneNumeroPiuAltoPresenteIn(arrayNumeri) {

  var posizioneArrayVincitore = 0;
  var numeroPiuAlto = 0;

  for (var i = 0; i < arrayNumeri.length; i++) {
    //controlla che gli altri numeri non siano più alti
    if (arrayNumeri[i] > numeroPiuAlto) {
      posizioneArrayVincitore = arrayNumeri.indexOf(arrayNumeri[i]);
      numeroPiuAlto = arrayNumeri[i];
    }
  }

  return posizioneArrayVincitore;
}

function sommaTuttiGliElementiDi(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function generaArrayConDieciNumeriCasuali() {
  var tenElementsArray = [];

  for (var i = 0; i < 10; i++) {
    tenElementsArray.push(generaNumeroPositivoCon(100));
  }

  return tenElementsArray;
}

function generaNumeroPositivoCon(maxNum) {
  return Math.ceil(Math.random() * maxNum);
}

const huette = document.querySelector('#huette');
const date = document.querySelector('#date');
const today = new Date();
const dateSelector = document.querySelector('#dateSelector');

//Kalender wird auf 16 Tage begrenzt
today.setDate(today.getDate() + 15);
const maxDate = today.toISOString().split('T')[0];
date.max = maxDate;
console.log(maxDate);

//Beim Neuladen der Seite wird die Auswahl zurückgesetzt
window.addEventListener('load', () => {
    huette.selectedIndex = 0;
});

window.addEventListener('load', () => {
    date.value = ""
});

//Kalender ist vorerst versteckt
date.hidden = true;

//Bei Auswahl der Hütte oder bei Klicken auf "Datum wählen" wird der Kalender geöffnet
huette.addEventListener('change', () => {
    date.showPicker();
});

dateSelector.addEventListener('click', () => {
    date.showPicker();
})
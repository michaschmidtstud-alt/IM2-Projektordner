const huette = document.querySelector('#huette');
const date = document.querySelector('#date');
/* const today = new Date(); */
const dateSelector = document.querySelector('#dateSelector');
const sonnenaufgang = document.querySelector('#sonnenaufgang');
const sonnenuntergang = document.querySelector('#sonnenuntergang');
/* const button = document.querySelector('#dateSelector') */

//Kalender integrieren
const { Calendar } = calendarjs;

Calendar(document.querySelector('#date'), {
    type: 'inline',
    value: new Date()
});

//Daten abrufen
async function loadData() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.451389&longitude=7.689444&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const data = await loadData();
console.log(data);

//Kalender wird auf 16 Tage begrenzt
/* const minDate = today.toISOString().split('T')[0];
date.min = minDate;

const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 16);

const maxDate = futureDate.toISOString().split('T')[0];
date.max = maxDate; */

const calendarDays = document.querySelectorAll('.lm-calendar-content div');

const today = new Date();
today.setHours(0, 0, 0, 0);

const maxDate = new Date();
maxDate.setDate(today.getDate() + 15);

calendarDays.forEach(day => {
    // deaktivieren wenn außerhalb des Bereichs
    if (calendarDays < today || calendarDays > maxDate) {
        day.dataset.disabled = "true";
    }
});

//Beim Neuladen der Seite wird die Auswahl zurückgesetzt
window.addEventListener('load', () => {
    huette.selectedIndex = 0;
});

/* window.addEventListener('load', () => {
    date.value = ""
});

huette.addEventListener('click', () => {
    date.value = ""
}); */

//Kalender ist vorerst versteckt
date.hidden = true;

//Bei Auswahl der Hütte oder bei Klicken auf "Datum wählen" wird der Kalender geöffnet
huette.addEventListener('change', () => {
    date.hidden = false;
});

dateSelector.addEventListener('click', () => {
    date.hidden = false;
})

//Anzeigen der Uhrzeiten
const selectedDate = document.querySelector('.lm-calendar-content');

sonnenaufgang.hidden = true;
sonnenuntergang.hidden = true;

selectedDate.addEventListener('click', () => {
    sonnenaufgang.hidden = false;
    sonnenuntergang.hidden = false;
    date.hidden = true;
})

huette.addEventListener('click', () => {
    sonnenaufgang.hidden = true;
    sonnenuntergang.hidden = true;
});

dateSelector.addEventListener('click', () => {
    sonnenaufgang.hidden = true;
    sonnenuntergang.hidden = true;
});
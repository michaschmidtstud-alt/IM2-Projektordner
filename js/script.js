const huette = document.querySelector('#huette');
const calendarContainer = document.querySelector('#calendarContainer');
const date = document.querySelector('#date');
/* const today = new Date(); */
const dateSelector = document.querySelector('#dateSelector');
const sonnenaufgang = document.querySelector('#sonnenaufgang');
const sonnenuntergang = document.querySelector('#sonnenuntergang');
const sunriseText = document.querySelector('#sunriseText');
const sunsetText = document.querySelector('#sunsetText');

let selectedFormattedDate = null;

const datenHuetten = {
    balmhornhuette: {
        latitude: 46.451389,
        longitude: 7.689444
    },

    doldenhornhuette: {
        latitude: 46.486891,
        longitude: 7.697416
    },

    dossenhuette: {
        latitude: 46.655111,
        longitude: 8.169611
    },

    fruendenhuette: {
        latitude: 46.4835,
        longitude: 7.74197
    },

    gaulihuette: {
        latitude: 46.623772,
        longitude: 8.216622
    },

    geltenhuette: {
        latitude: 46.369661,
        longitude: 7.339019
    },

    glecksteinhuette: {
        latitude: 46.62514,
        longitude: 8.096581
    },

    gspaltenhornhuette: {
        latitude: 46.51266,
        longitude: 7.81022
    },

    hohganthuette: {
        latitude: 46.782562,
        longitude: 7.906079
    },

    oberaletschhuette: {
        latitude: 46.424902,
        longitude: 7.973836
    },

    sustlihuette: {
        latitude: 46.751706,
        longitude: 8.470794
    },

    wildhornhuette: {
        latitude: 46.37923,
        longitude: 7.388004
    },

    wildstrubelhuette: {
        latitude: 46.383019,
        longitude: 7.467666
    }
};
/* const button = document.querySelector('#dateSelector') */

//Kalender integrieren
const { Calendar } = calendarjs;

Calendar(document.querySelector('#date'), {
    type: 'inline',
    value: new Date(),
    wheel: false
});

console.log(calendarjs)

//Daten abrufen

async function loadWeatherData(huetteName) {
    
    const hut = datenHuetten[huetteName];

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${hut.latitude}&longitude=${hut.longitude}&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16`;

    try{
        const response = await fetch(url);
        return await response.json();

    } catch (error) {

        console.error(error);
        return false;
    }
}

/* //Balmhornhütte
async function loadDataBalmhornhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.451389&longitude=7.689444&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}

//Doldenhornhütte
async function loadDataDoldenhornhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.486891&longitude=7.697416&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Dossenhütte
async function loadDataDossenhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.655111&longitude=8.169611&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Fründenhütte
async function loadDataFruendenhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.4835&longitude=7.74197&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Gaulihütte
async function loadDataGaulihuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.623772&longitude=8.216622&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Geltenhütte
async function loadDataGeltenhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.369661&longitude=7.339019&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Glecksteinhütte
async function loadDataGlecksteinhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.62514&longitude=8.096581&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Gspaltenhornhütte
async function loadDataGspaltenhornhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.51266&longitude=7.81022&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Hohganthütte
async function loadDataHohganthuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.782562&longitude=7.906079&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Oberaletschhütte
async function loadDataOberaletschhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.424902&longitude=7.973836&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Sustlihütte
async function loadDataSustlihuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.751706&longitude=8.470794&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Wildhornhütte
async function loadDataWildhornhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.37923&longitude=7.388004&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


//Wildstrubelhütte
async function loadDataWildstrubelhuette() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=46.383019&longitude=7.467666&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
} */


//Kalender wird auf 16 Tage begrenzt

function disableInvalidDates() {

    const calendarDays = document.querySelectorAll('.lm-calendar-content div');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 15);

    // Monat/Jahr aus Kalender lesen
    const monthText = document.querySelector('[data-view="months"]').textContent;
    const yearText = document.querySelector('[data-view="years"]').textContent;

    // Monatsnamen umwandeln
    const months = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11
    };

    const currentMonth = months[monthText];
    const currentYear = parseInt(yearText);
    
    calendarDays.forEach(day => {

        day.dataset.disabled = "false";
        day.style.opacity = "1";
        day.style.pointerEvents = "auto";

        // Tageszahl holen
        const dayNumber = parseInt(day.textContent.trim());

        if (isNaN(dayNumber)) return;

        // echtes Datum bauen
        const currentDate = new Date(currentYear, currentMonth, dayNumber);

        // Uhrzeit entfernen
        currentDate.setHours(0, 0, 0, 0);

        // deaktivieren wenn außerhalb des Bereichs
        if (currentDate < today || currentDate > maxDate || day.dataset.grey === "true") {
            day.dataset.disabled = "true";
            day.style.opacity = "0.3";
            day.style.pointerEvents = "none";
        }
    });
}

//Beim Laden ausführen
disableInvalidDates();

//Nach Monatswechsel erneut ausführen
const navigationButtons = document.querySelectorAll('.lm-calendar-navigation button');

navigationButtons.forEach(button => {

    button.addEventListener('click', () => {

        // kurz warten bis Kalender neu gerendert wurde
        setTimeout(() => {
            disableInvalidDates();
        }, 50);

    });
})

//Beim Neuladen der Seite wird die Auswahl zurückgesetzt
window.addEventListener('load', () => {
    huette.selectedIndex = 0;
});

//Scrollen im Kalender deaktivieren
const calendar = document.querySelector('#date');

calendar.addEventListener('wheel', (e) => {
    e.preventDefault();
}, { passive: false });

/* window.addEventListener('load', () => {
    date.value = ""
});

huette.addEventListener('click', () => {
    date.value = ""
}); */

//Kalender ist vorerst versteckt
dateSelector.hidden = true;
date.hidden = true;

function showHutInfo() {
    document.querySelectorAll('.huettenInfo').forEach(el => {
        el.style.display = "flex";
    });
}



//Bei Auswahl der Hütte oder bei Klicken auf "Datum wählen" wird der Kalender geöffnet
huette.addEventListener('change', () => {
    date.hidden = !date.hidden;
    dateSelector.hidden = !dateSelector.hidden;
});

dateSelector.addEventListener('click', () => {
    date.hidden = !date.hidden;
    dateSelector.hidden = !dateSelector.hidden;
})

//Anzeigen der Uhrzeiten
const selectedDate = document.querySelector('.lm-calendar-content');

selectedDate.addEventListener('click', async(event) => {
    if (!event.target.matches('div')) return;
    const selectedDay = event.target.textContent.trim();
    const monthText =
        document.querySelector('[data-view="months"]').textContent;

    const yearText =
        document.querySelector('[data-view="years"]').textContent;

    const months = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12
    };

    const month = months[monthText];
    const year = parseInt(yearText);

    selectedFormattedDate = `${year}-${String(month).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
    console.log(selectedFormattedDate);

    //Hütte auswählen
    const selectedHut = huette.value;

    

    //Wetterdaten laden
    const data = await loadWeatherData(selectedHut);
    const index = data.daily.time.indexOf(selectedFormattedDate);
    console.log(index);

    if (index !== -1) {

        const sunrise = data.daily.sunrise[index];
        const sunset = data.daily.sunset[index];

        // Nur Uhrzeit anzeigen
        const sunriseTime = sunrise.split('T')[1];
        const sunsetTime = sunset.split('T')[1];

        sunriseText.textContent = `Sunrise: ${sunriseTime}`;
        sunsetText.textContent = `Sunset: ${sunsetTime}`;

        sonnenaufgang.hidden = false;
        sonnenuntergang.hidden = false;
        
    date.hidden = true;
    dateSelector.hidden = true;
    showHutInfo();
    }
})

huette.addEventListener('click', () => {
    sonnenaufgang.hidden = true;
    sonnenuntergang.hidden = true;
});

dateSelector.addEventListener('click', () => {
    sonnenaufgang.hidden = true;
    sonnenuntergang.hidden = true;
});
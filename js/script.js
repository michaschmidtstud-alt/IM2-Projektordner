const huette = document.querySelector('#huette');
const calendarContainer = document.querySelector('#calendarContainer');
const date = document.querySelector('#date');
/* const today = new Date(); */
const dateSelector = document.querySelector('#dateSelector');
const sonnenaufgang = document.querySelector('#sonnenaufgang');
const sonnenuntergang = document.querySelector('#sonnenuntergang');
const sunriseText = document.querySelector('#sunriseText');
const sunsetText = document.querySelector('#sunsetText');
const huettenInfo = document.querySelector('.huettenInfo');



let selectedFormattedDate = null;
let huettenData = null;

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


// function showHutInfo() {
//     document.querySelectorAll('.huettenInfo').forEach(el => {
//         el.style.display = "flex";
//     });
// }

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

    huette.addEventListener('change', () => {
    console.log(huette.value);
})
})



// Daten zu Hütten
const huettenData = {
    huetten: [
        {
            "id": "huettenInfoBalmhornhuette",
            "value": "balmhornhuette",
            "name": "Balmhornhütte SAC",
            "beschreibung": "Das gemütliche, authentische Sommerhüttli erinnert an frühere Zeiten. Fast senkrecht über dem Kandersteger Gasteretal, auf der Talschulter am Fusse des Balmhorns gelegen, umgeben von grünen Bergwiesen, begeistert das kleine Bijou vor allem wegen seiner Lage auf einer Aussichtskanzel. Alpinwanderer besteigen anderntags gerne den Gasterespitz am Wildelsigegrat mit überwältigender Sicht über den Kanderfirn bis hin zu Eiger, Mönch und Jungfrau.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/balmhornhuette-sac-2147000024/",
            "offen": "Juni–Oktober",
            "schlafplaetze": 20,
            "aufstieg": "1:30–2h von Kandersteg"
        },
        {
            "id": "huettenInfoDoldenhornhuette",
            "value": "doldenhornhuette",
            "name": "Doldenhornhütte SAC",
            "beschreibung": "Die Doldenhornhütte ist eine familienfreundliche SAC-Hütte oberhalb von Kandersteg. Hier übernachtest du auf 1915 Metern inmitten der Bergwelt – mit gemütlicher Atmosphäre und regionaler Verpflegung.",
            "link": "https://www.doldenhornhuette.ch/",
            "offen": "Juni–September",
            "schlafplaetze": 42,
            "aufstieg": "2-2:30h von Kandersteg"
        },
        {
            "id": "huettenInfoDossenhuette",
            "value": "dossenhuette",
            "name": "Dossenhütte SAC",
            "beschreibung": "«Zwischen Himmel und Erde» wird die Hütte südlich der Engelhörner gerne genannt. Tatsächlich liegt sie auf dem schmalen Tossengrat (neue Schreibweise auf der Karte) zwischen dem Rosenlaui und dem Ürbachtal – mit Sonnenauf- und -untergängen der Extraklasse. Für geübte Wanderer im Sommer (kein Winterraum) ein spannendes Tourenziel, landschaftlich eindrückliche Hüttenwege teils mit Drahtseilen und Leitern gesichert. Für Skitourengänger gibt es das Rosenlauibiwak.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/dossenhuette-sac-2147000082/",
            "offen": "Juli–September",
            "schlafplaetze": 51,
            "aufstieg": "4h von Rosenlaui"
        },
        {
            "id": "huettenInfoFruendenhuette",
            "value": "fruendenhuette",
            "name": "Fründenhütte SAC",
            "beschreibung": "Tausend Meter direkt über dem Oeschinensee. Die Hütte für erfahrene, trittsichere Bergwanderer und Hochalpinisten ist umgeben von Fels und Eis. Einst vom Fründengletscher umflossen, reicht seine Zuge heute bis knapp hinter die Hütte und bildet eine reizvolle Landschaft mit kleinen Moränenseen. Teils exponierte Stellen auf dem direkten Hüttenweg. Die Fründschnuer hinten am Oeschinensee ist besonders attraktiv für wirklich Trittsichere und Schwindelfreie.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/fruendenhuette-sac-2147000102/",
            "offen": "Juli–September",
            "schlafplaetze": 58,
            "aufstieg": "3:30-4h über die Untere Fründschnuer"
        },
        {
            "id": "huettenInfoGaulihuette",
            "value": "gaulihuette",
            "name": "Gaulihütte SAC",
            "beschreibung": "Im hinteren Urbachtal am SE-Fuss des Hangendgletscherhorns gelegen. Eigentum der SAC-Sektion Bern, 65 Plätze. Hüttenbewartung während der Frühlings- und Sommersaison. Ausgangspunkt für Hochtouren und alpine Skitouren im östlichen Berner Oberland. Klettern an griffigem Gneis oder der Blick auf den Gauligletscher und die Seen im Vorfeld sind Höhepunkte um diese Hütte. Speziell für Kinder eingerichtete Felsen, der Ausflug zum Gletscher, Baden an den Chipfenseeli und organisierte Kinderkletterlager begeistern Familien. Spezielle «Dakota-Touren» zum Absturzort des amerikanischen Flugzeuges.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/gaulihuette-sac-2147000111/",
            "offen": "April–September",
            "schlafplaetze": 65,
            "aufstieg": "4:30h aus dem Urbachtal"
        },
        {
            "id": "huettenInfoGeltenhuette",
            "value": "geltenhuette",
            "name": "Geltenhütte SAC",
            "beschreibung": "Vom idyllischen Lauenensee an wilden Schluchten und dem donnernden Geltenschuss vorbei, zuletzt hinter dem kleinen Wasserfall durch – der Zustieg zur Wander- und Bergsteigerhütte am Fusse des Wildhorns ist allein schon ein eindrückliches Bergerlebnis. Die Unterkunft mit grosser Gaststube und abgetrennten Schlafplätzen eignet sich für Vereins- und Schulreisen sowie für Familien. Ein wunderschöner Rundweg führt durch das Furggental und das Rottal zurück zur Hütte, Dauer ca. 2h. Im Frühling vielfältige Ski- und Schneeschuhtouren.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/geltenhuette-sac-2147000113/",
            "offen": "März und April, Juli–September",
            "schlafplaetze": 70,
            "aufstieg": "3:15h von Lauenen"
        },
        {
            "id": "huettenInfoGlecksteinhuette",
            "value": "glecksteinhuette",
            "name": "Glecksteinhütte SAC",
            "beschreibung": "Ihr Name stammt von «Gläck» (Viehsalz), das die Hirten den Schafen im Sommer zum Stein brachten. Die SAC-Hütte zum Grindelwalder Wetterhorn, einst als Hotel Gleckstein bekannt, ist heute beliebt bei Alpinisten für Besteigungen und Gletschertouren, als kleiner Seminarort, aber auch bei Bergwanderern, die imposante Gebirgspanoramen suchen und im Aufstieg «Tucki», dem Chef der Steinbockkolonie, begegnen oder die Ruinen des legendären Wetterhornaufzuges bestaunen.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/glecksteinhuette-sac-2147000118/",
            "offen": "Juli–September",
            "schlafplaetze": 70,
            "aufstieg": "2:15-2:45h von Grindelwald"
        },
        {
            "id": "huettenInfoGspaltenhornhuette",
            "value": "gspaltenhornhuette",
            "name": "Gspaltenhornhütte SAC",
            "beschreibung": "Die Zacken und Türme des Gspaltenhorns, Kamel und Roti Zend sind weitherum bekannt. Am Fusse dieser imposanten Felsen, zuhinterst im Kiental, auf einem schmalen Felsvorsprung hoch über dem Gamchigletscher liegt die kürzlich modernisierte Alpin- und Sommerhütte. Neben Besteigungen sind Übergange zu benachbarten Hütten und Tälern (Sefinenfurgga, Hohtürli, Gamchilücke) beliebt. Die Hütte ist eine der 18 bewarteten SAC-Unterkünfte im Unesco-Welterbe.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/gspaltenhornhuette-sac-2147000127/",
            "offen": "Juli–September",
            "schlafplaetze": 60,
            "aufstieg": "3:30h von der Griesalp über Steineberg"
        },
        {
            "id": "huettenInfoHohganthuette",
            "value": "hohganthuette",
            "name": "Hohganthütte SAC",
            "beschreibung": "Die Hohganthütte ist im Besitz der SAC-Sektion Emmental. Knapp unterhalb der Waldgrenze steht diese ausgesprochen gemütliche Hütte. Sie ist für Selbstversorgung eingerichtet und nicht bewartet. Die Hütte ist grundsätzlich geschlossen und eine Reservation ist notwendig. Nach der Reservation erhält man einen Zugangscode für das Türschloss. Alle weiteren Informationen auf der Website.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/hohganthuette-2147000133/",
            "offen": "Ganzes Jahr, nicht bewartet",
            "schlafplaetze": 24,
            "aufstieg": "3:30h von Kemmeribodenbad oder 3:30h von Habkern"
        },
        {
            "id": "huettenInfoOberaletschhuette",
            "value": "oberaletschhuette",
            "name": "Oberaletschhütte SAC",
            "beschreibung": "Massives Steinhaus am Fusse der Fusshörner, mitten im alpinen Gletschergebiet von Aletschhorn, Schinhorn und Nesthorn. Die Hütte ist Ausgangspunkt für vielfältige Ski-, Berg- und Klettertouren. Wegen des Gletscherrückgangs wurde der direkte Weg über den Oberaletschgletscher immer schwieriger und für viele Leute unbegehbar. Der neue Panoramaweg via Lochegga gilt heute als touristische Attraktion im Unesco-Welterbegebiet.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/oberaletschhuette-sac-2147000193/",
            "offen": "April und Juli–September",
            "schlafplaetze": 58,
            "aufstieg": "4:30h von der Belalp"
        },
        {
            "id": "huettenInfoSustlihuette",
            "value": "sustlihuette",
            "name": "Sustlihütte SAC",
            "beschreibung": "Auf sonniger, grüner Geländeterrasse hoch über der Sustenpassstrasse gelegen – und doch mit kurzem Zugang. Stützpunkt für Kletterer und Berggänger, vor allem aber auch für Familien mit Kindern sowie wegen der Umgebung für Kurse und Ausbildung. Ein Eldorado für Kletter- und Kraxelpartien aller Längen und Schwierigkeitsgrade. Bereits der direkte (nicht einzige) Aufstieg über den Leiterliweg zur Hütte findet bei Kindern Anklang.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/sustlihuette-sac-2147000262/",
            "offen": "März und April, Juni–Oktober",
            "schlafplaetze": 67,
            "aufstieg": "1h vom Sustenbrüggli"
        },
        {
            "id": "huettenInfoWildhornhuette",
            "value": "wildhornhuette",
            "name": "Wildhornhütte SAC",
            "beschreibung": "Früher vor allem für die Besteigung des Wildhorns benutzt, ist die geräumige Hütte über dem Iffigsee heute im Sommer oft Stützpunkt für Familien, Vereine, Schulklassen, Kurse und Etappenort für Wanderungen zwischen Lenk, dem Lauenental und dem Rawilgebiet sowie auf der «Tour du Wildhorn». Im Winter treffen sich Schneeschuhläufer und Skitourengänger, so auf der Haute Route Diablerets–Gemmi–Grimsel.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/wildhornhuette-sac-2147000293/",
            "offen": "März und April, Juli–September",
            "schlafplaetze": 79,
            "aufstieg": "5h ab Lenk über Iffigenalp"
        },
        {
            "id": "huettenInfoWildstrubelhuette",
            "value": "wildstrubelhuette",
            "name": "Wildstrubelhütte SAC",
            "beschreibung": "Ziel für Bergwanderer, Skitourengeher und sehr geübte Mountainbiker. An der Kantonsgrenze Bern–Wallis unweit der imposanten Gletscherebene Plaine Morte bietet die Hütte der beiden Sektionen SAC Wildhorn und SAC Kaiseregg auch einen Boulderraum und Hundeboxen. Eindrücklich sind die beiden ursprünglichen Essräume mit Holztischen und Holztäfer. Über die urtümliche Landschaft des Rawils blickt man hinüber zur Gletscherwelt des Wildhorns.",
            "link": "https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/wildstrubelhuette-sac-2147000294/",
            "offen": "März und April, Juli–September",
            "schlafplaetze": 68,
            "aufstieg": "6h von Lenk über Färiche"
        }
    ]
}


// Hütteninfo anzeigen
function updateHutInfo(huetteName) {
    const selectedHut = huettenData.huetten.find(h => h.value === huetteName);
    if (selectedHut) {
        huettenInfo.innerHTML = `
            <h3>${selectedHut.name}</h3>
            <p>${selectedHut.beschreibung}</p>
            <a href="${selectedHut.link}" class="mehr-btn">Mehr Informationen</a>
            <p class="meta">
                offen: ${selectedHut.offen}<br>
                Schlafplätze: ${selectedHut.schlafplaetze}<br>
                Aufstieg: ${selectedHut.aufstieg}
            </p>
        `;
        huettenInfo.hidden = false;
    }
}

// Hütte wechseln
huette.addEventListener('change', () => {
    updateHutInfo(huette.value);
    date.hidden = false;
    dateSelector.hidden = false;
    sonnenaufgang.hidden = true;
    sonnenuntergang.hidden = true;
});
    

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
    updateHutInfo(huette.value);
    }

huette.addEventListener('click', () => {
    sonnenaufgang.hidden = true;
    sonnenuntergang.hidden = true;
});

dateSelector.addEventListener('click', () => {
    sonnenaufgang.hidden = true;
    sonnenuntergang.hidden = true;
});
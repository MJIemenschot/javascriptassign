// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst 6
//totaal aantal cijfers:
console.log(grades.length);

//totaal aantal hoge cijfers
let totalHighGrades = 0;

for (let i = 0; i < grades.length; ++i) {
    if (grades[i] >= 8)
        totalHighGrades++;
} console.log(totalHighGrades);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

//Deze functie krijg ik niet goed werkend

function cumlaude(grades) {
    let count = 0;
    for (i = 0; i < grades.length; ++i) {
        if (grades[i] >= 8)
            count++;
        }console.log("Vergeet deze studenten niet: " + count);

}
cumlaude(9, 7, 8, 6, 4, 6, 9, 10, 8);
cumlaude(4, 5, 6,7);
cumlaude(9, 4, 6, 10);



//Met filter methode lukt het wel
const result = grades.filter(i => i >= 8).length;
console.log("Het aantal studenten met een cijfer hoger dan 8 is " + result);






/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
let sum = 0;
for(let x = 0; x < grades.length; x++) {
    sum = sum + grades[x];
}
average = sum / grades.length;
console.log("Het gemiddelde cijfer is: " + average);
//de volgende methode werkt hier niet zoals ik verwacht
console.log("Het gemiddelde afgerond op 2 decimalen " + (average));
console.log("Het gemiddelde cijfer afgerond: " + Math.round(average) / 1);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

//Deza functie krijg ik helaas weer niet werkend
function averageGrade(grades) {
    let sum = 0;
    for(let x = 0; x < grades.length; x++) {
        sum += grades[x];
    }
    return sum / grades.length;

}
let calculateAverage = averageGrade(9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6);
console.log(calculateAverage);


//probeersel
let getal1 = 543.28 - 451.67;

function afr(getal){
    return Math.round((getal)*100)/100;
}
console.log(afr(getal1));


// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!




/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

    let bestGrade = grades[0];
    for (let j = 1; j < grades.length; j++) {
       if (grades[j] > bestGrade) {
           bestGrade = grades[j];
       }
    }
console.log("Het hoogste cijfer is: " + bestGrade);


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

//Deza functie krijg ik helaas weer niet werkend
function highestGrade(grades) {
    let max = grades[0];
    for (let x = 1; x < grades.length; x++) {

        if (grades[x] > max)
            max = grades[x];
    }
    return max;
}
let maxGrade = highestGrade(9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6);
console.log(maxGrade);
// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

const form = document.getElementById("form");
const wypluwacz = document.getElementById("wypluwacz");
const tabela = document.getElementById("tabela");
const plec = document.getElementById("plec");
const br = "<br>";

form.name.addEventListener("change", function(e) { walidacja(this); });
form.surname.addEventListener("change", function(e) { walidacja(this); });
form.dob.addEventListener("change", function(e) { sprawdzDate(this); });
form.dob.addEventListener("change", function(e) { generujPesel(this); });

function walidacja(input) {
    if (input.value.length > 3) {
        wypluwacz.innerHTML += input.name + ": " + input.value + br;
        input.style.color = "#fff";
        input.style.backgroundColor = "blue";
    } else {
        input.style.color = "#fff";
        input.style.backgroundColor = "red";
    }
} 

function sprawdzDate(dateInput) {
    const dzis = new Date();
    const wybranaData = new Date(dateInput.value);
    const roznicaCzasu = wybranaData - dzis;
    const roznicaGodzin = Math.floor(roznicaCzasu / (60 * 60 * 1000));
    const roznicaDni = Math.floor(roznicaCzasu / (24 * 60 * 60 * 1000)) + 1;
    const roznicaMiesiecy = Math.floor(roznicaCzasu / (24 * 60 * 60 * 1000 * 31)) + 1;
    const roznicaLat = Math.floor(roznicaCzasu / (24 * 60 * 60 * 1000 * 365.25)) + 1;
    const wynik = "H:" + roznicaGodzin + "D:" + roznicaDni + "M:" + roznicaMiesiecy + "R:" + roznicaLat;

    console.log(wynik);
}

function generujPesel(dateInput) {
    let data = dateInput.value;
    const czynnikiKontrolne = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const plecValue = plec.value;
    let pesel = data[2] + data[3] + data[5] + data[6] + data[8] + data[9];
    pesel += Math.floor(Math.random() * 10000);
    let sumaKontrolna = 0;
    
    for (let i = 0; i < czynnikiKontrolne.length; i++) {
        sumaKontrolna += czynnikiKontrolne[i] * (pesel[i] * 1);
    }

    sumaKontrolna = "" + sumaKontrolna;
    const ostatniaCyfraKontrolna = 10 - (sumaKontrolna[1] * 1);
    pesel += ostatniaCyfraKontrolna;

    dodajDoTabeli(dateInput, pesel, plecValue);
}

function dodajDoTabeli(a, b, c) {
    const wiersz = tabela.insertRow(-1);
    const komorka1 = wiersz.insertCell(0);
    komorka1.innerHTML = a.name;
    const komorka2 = wiersz.insertCell(1);
    komorka2.innerHTML = a.value;
    const komorka3 = wiersz.insertCell(2);
    komorka3.innerHTML = "plec: " + c + " pesel: " + b;
}

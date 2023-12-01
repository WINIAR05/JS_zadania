function funkcja() {
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var data = document.getElementById("data").value;
    var plec = document.getElementById("gender").value;
    var dzieci = document.getElementById("dzieci").value;
    var rozmiar = document.getElementById("rozmiar").value;
    var poziom = document.getElementById("level").value;
    var kolor = document.getElementById("color").value;
    var wypluwacz = document.getElementById("wypluwacz");
    
    var dane1 = ['imie', 'nazwisko', 'data', 'dzieci', 'rozmiar', 'poziom', 'kolor'];
    var dane2 = [imie, nazwisko, data, dzieci, rozmiar, poziom, kolor];
    
    var error = false;
    for(var i = 0; i < dane1.length; i++) {
        if(dane2[i].length <= 3) {
            error = true;
            break;
        }
    }
    
    if(error) {
        console.log("Błąd - przynajmniej jedno z pól ma zbyt mało znaków.");
        return;
    }

    for(var i = 0; i < dane1.length; i++) {
        console.log(dane1[i] + ": " + dane2[i]);
    }

    var imieValidation = Walidator(imie, 2);
    var nazwiskoValidation = Walidator(nazwisko, 3);
    var dataValidation = Walidator(data, 10);
    
    wypluwacz.innerHTML = "Ilość znaków w imieniu: " + imieValidation + "<br>" +
                           "Ilość znaków w nazwisku: " + nazwiskoValidation + "<br>" +
                           "Ilość znaków w dacie: " + dataValidation;
}

function Walidator(value, minLength) {
    return value.length < minLength ? "Błąd - zbyt mało znaków." : "OK";
}

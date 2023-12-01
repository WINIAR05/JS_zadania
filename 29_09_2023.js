document.body.innerHTML += "Podaj imię: <br>";
document.body.innerHTML += '<input type="text" id="name" name="name"><br>';
document.body.innerHTML += "Podaj nazwisko: <br>";
document.body.innerHTML += '<input type="text" id="surname" name="surname"><br>';
document.body.innerHTML += "Podaj datę urodzenia: <br>";
document.body.innerHTML += '<input type="date" id="dob" name="dob"><br>';
document.body.innerHTML += "Podaj płeć: <br>";
document.body.innerHTML += '<input type="text" id="gender" name="gender"><br>';
document.body.innerHTML += "Podaj liczbę dzieci: <br>";
document.body.innerHTML += '<input type="number" id="children" name="children"><br>';
document.body.innerHTML += "Podaj rozmiar buta: <br>";
document.body.innerHTML += '<input type="number" id="shoe_size" name="shoe_size"><br>';
document.body.innerHTML += "Podaj ulubiony kolor: <br>";
document.body.innerHTML += '<input type="text" id="color" name="color"><br>';
document.body.innerHTML += '<br><button onclick="funkcja()">przycisk</button><br>';
document.body.innerHTML += '<div id="wypluwacz">tu pluje</div>';

function funkcja() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var children = document.getElementById("children").value;
    var shoe_size = document.getElementById("shoe_size").value;
    var color = document.getElementById("color").value;
    var error = { name: false, surname: false };

    var rexNumber = /^[0-9]+$/.test(name);
    var rexTekst = /^[a-zA-Z]+$/.test(name);
    var rexTekstNumber = /^[a-z0-9]+$/.test(name);

    if (name.length <= 3) {
        error.name = true;
    }
    if (surname.length <= 3) {
        error.surname = true;
    }

    console.log("rexNumber " + rexNumber);
    console.log("rexTekst " + rexTekst);
    console.log("rexTekstNumber " + rexTekstNumber);
    console.log(error);
}

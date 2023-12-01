// alert("kopytko")

f = document.getElementById("form")
w = document.getElementById("wypluwacz")


//spr number
rexN = /^[0-9]+$/
//spr tekst
rexT = /^[a-zA-Z]+$/
//spr date 2023-10-06
rexD = /^\d{2}.\d{2}.\d{4}$/
//  //spr kolor
// rexC = /^#[0-9a-fA-F]{6}$/
// rexN.test(f.name.value)



//alert(f.name.value)

osoba = {
    imie: "Michal",
    nazwisko: "Winiarski",
    wiek: 18,
    zestawDane: function(){
        return "imię: " + this.imie + "<br> nazwisko: " + this.nazwisko
    }
}
console.log(osoba)

f.name.disable = true


f.name.addEventListener("change", function(e) { Valid(this, 3)})
f.surname.addEventListener("change", function(e) { Valid(this, 3)})
f.dob.addEventListener("change", function(e) { Valid(this, 0)})
f.gender.addEventListener("change", function(e) { Valid(this, 0)})
f.children.addEventListener("change", function(e) { Valid(this, 0)})
f.shoe_size.addEventListener("change", function(e) { Valid(this, 0 )})
f.level.addEventListener("change", function(e) { Valid(this, 0)})
f.bt.disabled = true
f.bt.style.color = "red"
f.bt.innerHTML = "zblokowany"

// f.name.addEventListener("change", function(e){
//     if(f.name.value.length > 3){
//         f.name.style.color="#fff";
//         f.name.style.backgroundColor="blue";
//     }else {
//         f.name.style.color="#fff";
//         f.name.style.backgroundColor="red";
//     }
// })
// function funkcja(){
//     dane = f.name.name + " : "
//     dane += f.name.value + "<br>"

// w.innerHTML = osoba.dane
// }


function Valid(v,n=0, typ="N") {
    if(typ == "T"){}
    if(typ == "N"){}
    
 
 
 
    if(v.value.length > n){
        if(rexN.test(v.value))
        v.style.color="#fff";
        v.style.backgroundColor="green";
        f.bt.disabled = false
        f.bt.style.color = "#000"
        f.bt.innerHTML = "wyślij"
    }else{
        v.style.color="#fff";
        v.style.backgroundColor="red";
    }
}



const kino=[];

function select(){
    let option = document.getElementById("film").value
    console.log(option)
}
function visKino(){
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let p of kino){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("kino").innerHTML=ut;
}
function kjopBillett(){
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    //sjekk om film er valgt
    if (film === "") {
        alert("Du må velge en film før du kan kjøpe billett.");
        return;
    }


    //regulering for email og telefonnummer validering
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonnrRegex = /^\d{8}$/;


    //sjekket om noen felt er tomme
    if(antall === "") {
        document.getElementById("error.antall").innerHTML = "Må skrive noe inn i antall!";
    }else {
        document.getElementById("error.antall").innerHTML = "";
    }
    if(fornavn === ""){
        document.getElementById("error.fornavn").innerHTML = "Må skrive noe inn i fornavnet!";
    } else {
        document.getElementById("error.fornavn").innerHTML = "";
    }
    if(etternavn === ""){
        document.getElementById("error.etternavn").innerHTML = "Må skrive noe inn i etternavnet!";
    } else {
        document.getElementById("error.etternavn").innerHTML = "";
    }

    if(telefonnr === ""){
        document.getElementById("error.telefonnr").innerHTML = "Må skrive noe inn i telefonnr!";
    } else {
        document.getElementById("error.telefonnr").innerHTML = "";
    }

    if(epost === ""){
        document.getElementById("error.epost").innerHTML = "Må skrive noe inn i epost!";
    } else {
        document.getElementById("error.epost").innerHTML = "";
    }


    // Valider epost format
    if(!epostRegex.test(epost)) {
        document.getElementById("error.epost").innerHTML = "Ugyldig e-postformat!";
        return;
    } else {
        document.getElementById("error.epost").innerHTML = "";
    }

    if(!telefonnrRegex.test(telefonnr)) {
        document.getElementById("error.telefonnr").innerHTML = "Ugyldig telefonnummer format!";
        return;
    } else {
        document.getElementById("error.telefonnr").innerHTML = "";
    }


    const kunde = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost,
    };

    kino.push(kunde);
    //nullstill inputboksene
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";

    visKino()}

function slettBillett(){
    kino.length = 0;
    visKino();
}
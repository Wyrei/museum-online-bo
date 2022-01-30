const mytitel = document.getElementById("mytitel");
const myimage = document.getElementById("myimage");
const input = document.getElementById("input");

let directionsbuttons = {
    "sea": document.getElementById('sea'),
    "voc": document.getElementById('voc'),
    "port": document.getElementById('port'),
    "ship": document.getElementById('ship'),
    "Paintings": document.getElementById('Paintings'),
    "Instruments": document.getElementById('Instruments'),
    "Photo": document.getElementById('Photo'),
    "Yacht": document.getElementById('Yacht'),
    "Atlases": document.getElementById('Atlases'),
    "Glass": document.getElementById('Glass'),
    "Circus": document.getElementById('Circus'),
    "Expo": document.getElementById('Expo'),
    "tale": document.getElementById('tale'),
    "see": document.getElementById('see'),
    "back": document.getElementById('back')
}

let current_index = 0;

let locaties = [ //array
    { //0 = object
        "titel":"wat wil je weten",
        "image":"img/R.png",
        "directions": {
            "sea": 1,
            "voc": 2
        }
    },
    { //1 = object
        "titel":"Voyage at Sea",
        "image":"",
        "directions": {
            "back": 0

        }
    },
    { //2 = object
        "titel":"",
        "image":"",
        "directions": {
            "back": 0

        }
    },
    { //3 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //4 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //5 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //6 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //7 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //8 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //9 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //10 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //11 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //12 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //13 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //14 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },
    { //15 = object
        "titel":"",
        "image":"",
        "directions": {

        }
    },


];

//mytitel.innerHTML = "dit is door script toegevoegd";
//myimage.src = "img/1.jpg";

function show(index){
    mytitel.innerHTML = locaties[index].titel;
    myimage.src = locaties[index].image;
    current_index = index;
    updatedirections();
}




function updatedirections(){
    let possible = locaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionsbuttons);
    for(const key of button_keys){
        directionsbuttons[key].style.visibility = "hidden"}
    for(const key of possible_keys){
        directionsbuttons[key].style.visibility = 'visible';}
}

function getinput(){
    show(input.value);
    //console.log(input.value)
    input.value = "";
    input.focus();
}

function godirrection(direction){
    let punt_index = locaties[current_index].directions[direction];
    show(punt_index);
}

show(0);
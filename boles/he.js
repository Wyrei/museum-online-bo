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
    //"back": document.getElementById('back')
}

let current_index = 0;

let locaties = [ //array
    { //0 = object
        "titel":"wat wil je weten",
        "image":"img/R.png",
        "directions": {
            "sea": 1,
            "voc": 2,
            "Port": 3,
            "Ship": 4,
            "Paintings": 5,
            "Instruments": 6,
            "Photo": 7,
            "Yacht": 8,
            "Atlases": 9,
            "Glass": 10,
            "Circus": 11,
            "Expo": 12,
            "tale": 13,
            "see": 14
        }
    },
    { //1 = object
        "titel":"Voyage at Sea",
        "image":"img/1.jpg",
        "directions": {
            //"back": 0

        }
    },
    { //2 = object
        "titel":"VOC schip Amsterdam",
        "image":"img/sheep.png",
        "directions": {
            "back": 0

        }
    },
    { //3 = object
        "titel":"Port 24/7",
        "image":"img/3.jpg",
        "directions": {
            "back": 0
        }
    },
    { //4 = object
        "titel":"The Ship Decorations",
        "image":"img/4.jpg",
        "directions": {
            "back": 0
        }
    },
    { //5 = object
        "titel":"The Paintings",
        "image":"img/5.jpg",
        "directions": {
            "back": 0
        }
    },
    { //6 = object
        "titel":"The Navigational Instruments",
        "image":"img/6.jpg",
        "directions": {
            //"back": 0
        }
    },
    { //7 = object
        "titel":"The Photo Albums",
        "image":"img/7.png",
        "directions": {
            //"back": 0
        }
    },
    { //8 = object
        "titel":"The Yacht Models",
        "image":"img/8.jpg",
        "directions": {
            //"back": 0
        }
    },
    { //9 = object
        "titel":"The Atlases",
        "image":"img/9.jpg",
        "directions": {
            //"back": 0
        }
    },
    { //10 = object
        "titel":"The Glass, Silver and Porcelain",
        "image":"img/10.jpg",
        "directions": {
            //"back": 0
        }
    },
    { //11 = object
        "titel":"Sal & Lori and Circus at Sea",
        "image":"img/11.jpg",
        "directions": {
            //"back": 0
        }
    },
    { //12 = object
        "titel":"My.Expo",
        "image":"img/12.jpg",
        "directions": {
           // "back": 0
        }
    },
    { //13 = object
        "titel":"The tale of the whale",
        "image":"img/13.jpg",
        "directions": {
           // "back": 0
        }
    },
    { //14 = object
        "titel":"See you in the Golden Age",
        "image":"img/14.jpg",
        "directions": {
           // "back": 0
        }
    },
];

//mytitel.innerHTML = "dit is door script toegevoegd";
//myimage.src = "img/1.jpg";

function show(index){
    mytitel.innerHTML = locaties[index].titel;
    myimage.src = locaties[index].image;
    //current_index = index;
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
    console.log(input.value)
    input.value = "";
    input.focus();
}

function godirrection(direction){
    let punt_index = locaties[current_index].directions[direction];
    show(punt_index);
}

show(0);
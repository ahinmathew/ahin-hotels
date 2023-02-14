function firstStep(hotel, page) {
    localStorage.clear();
    localStorage.setItem("hotel", hotelName[hotel][0]);
    localStorage.setItem("page", pageId[page]);
}

let pageId = ["Latest Statistics", "Finances", "View Reservations"];

window.onload = function() {
    main();
    displayGuestAndRoom();

};

function main() {
    for(let x = 0; x < 8; x++) {
        if (localStorage.getItem("hotel") === hotelName[x][0]) {
            if (localStorage.getItem("page") === pageId[0]){
                document.getElementById("name").textContent = hotelName[x][0] + " Hotel";
                document.getElementById("occupied").innerText = hotelName[x][1];
                document.getElementById("free").innerText = hotelName[x][2];
                document.getElementById("total").innerText = hotelName[x][1] + hotelName[x][2];
            }
            if (localStorage.getItem("page") === pageId[1]){
                document.getElementById("name1").textContent = hotelName[x][0] + " Hotel Statistics";
                document.getElementById("salary").innerText = hotelName[x][3] + " $";
                document.getElementById("profit").innerText = hotelName[x][4] + " $";
                document.getElementById("expenses").innerText = hotelName[x][5]+ " $";
            }
            if (localStorage.getItem("page") === pageId[2]) {
                document.getElementById("name2").textContent = hotelName[x][0] + " Hotel";
            }
        }
    }
}

function guestReservation() {
    for(let x = 0; x < 8; x++) {
        if (localStorage.getItem("hotel") === hotelName[x][0] && localStorage.getItem("page") === pageId[2]) {
            let reservation = document.getElementById("info").value;
            localStorage.setItem("RoomNum", reservation)
            localStorage.setItem("guestName", guests[reservation][0]);
            localStorage.setItem("Room", guests[reservation][1]);
            localStorage.setItem("pic", guests[reservation][2]);
        }
    }
}

function displayGuestAndRoom() {
    if(localStorage.getItem("RoomNum") > 15 || localStorage.getItem("RoomNum") < 1 ){
        document.getElementById("final").innerHTML = "Please enter a number between 1 and 15";
    }
    else {
        document.getElementById("final").innerHTML = "<img " + "src=../../images/"+ (localStorage.getItem("pic")) + ".png style='height: 250px;'>" + "<br><br>" + "Room Number: " + ((localStorage.getItem("RoomNum") != null) ? localStorage.getItem("RoomNum") : "NONE") + "<br><br>" + "Name of Guest: " + ((localStorage.getItem("guestName") != null) ? localStorage.getItem("guestName") : "NONE") + "<br><br>" + " Room Type: " + (localStorage.getItem("Room") != null ? localStorage.getItem("Room") : "NONE");
    }
}

let hotelName = [
    ["AHIN Nature", 34, 46, 27.8, 50000, 35000],

    ["AHIN Serene", 24, 23, 29.6, 61000, 69000],

    ["AHIN Victory", 15, 34, 27.2, 40000, 30000],

    ["AHIN Butterfly", 57, 67, 26.9, 35700, 23000],

    ["AHIN Flower", 45, 46, 28.5, 41000, 40000],

    ["AHIN Aura", 28, 24, 26.3, 40000, 45000],

    ["AHIN Lights", 46, 54, 29.5, 37555, 42000],

    ["AHIN Live", 63, 25, 29.1, 46000, 50000]
];

let guests = [

    [
        "NONE", "NONE",
    ]
,
    [
        "Rickard Minigo", "Deluxe", 1
    ]
,
    [
        "Aube Macieiczyk", "Ordinary", 2
    ]
,
    [
        "Taddeo Greenslade", "Suite", 3
    ]
,
    [
        "Dode Pryor", "Ordinary", 4
    ]
,
    [
        "Nyssa Whitley", "Suite", 5
    ]
,
    [
        "Kenny O'Kuddyhy", "Deluxe", 6
    ]
,
    [
        "Maje Gatling", "Ordinary", 7
    ]
,
    [
        "Shelia Alvar", "Deluxe", 8
    ]
,
    [
        "Alexine Zavattari", "Suite", 9
    ]
,
    [
        "Seline Cleminshaw", "Deluxe", 10
    ]
,
    [
        "Aleece Hartgill", "Ordinary", 11
    ]
,
    [
        "Arney Geeritz", "Suite", 12
    ]
,
    [
        "Ronn Mence", "Deluxe", 13
    ]
,
    [
        "Valerie Montacute", "Ordinary", 14
    ]
,
    [
        "Brynna Palley", "Suite", 15
    ]
]
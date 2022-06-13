// pseudo coding ideas for structuring game
// Player1, Player2, Player3, Player4,
//NPCs
//Enemy
//Scene
//Ranger Team

//Main Game Loop
//starting as a console game.

//Ranger team finds themselves in the Angel Grove Smoothy Bar,
//
// They Encounter an NPC.
//
// Get summoned to Zordon and Alpha 5.

// Deploy to fight rand#ofpuddies and monster.

// Monster Grows, Summon Zords, defeat monster.

function NPC(name, HP,AP){
    this.name = name;
    this.HP = HP;
    this.AP = AP;
}

let Zordon = {

    voiceline1: "voice line 1",
    voiceline2: "voice line 2",
    voiceline3: "voice line 3",
    voiceline4: "voice line 4",
    voiceline5: "voice line 5",

}




function startGame(){

    var playerFirstName = prompt("What is your first name?");
    var playerLastName = prompt("What is your last name?");
    var playerColor = prompt("What is your favorite color?");
    var player = new PowerRanger(playerFirstName, playerLastName, playerColor);

    var redRanger = new PowerRanger("Jason", "Scott", "Red", "Tyrannosaur");
    var pinkRanger = new PowerRanger("Kimberly", "Hart", "Pink", "Pterodactyl");
    var yellowRanger = new PowerRanger("Trini", "Kwan", "Yellow","Saber Tooth Tiger");
    var blackRanger = new PowerRanger("Zack", "Taylor", "Black", "Mastodon");
    var blueRanger = new PowerRanger("Billy", "Cranston", "Blue","Triceratops");
    var greenRanger = new PowerRanger("Tommy", "Oliver","Green","DragonZord");


    console.log("Greeting")
    console.log("Yee find yeself in yon Angel Grove Juice Bar");
    console.log("Yee find yeself in yon Command Center");
    console.log("Yee find yeself in yon *scene* fighting puddies");
    console.log("Yee find yeself in yon Megazord fighting monster");


}
//Player Constructor

function PowerRanger(firstName, lastName, color, zord){
    this.firstName = firstName;
    this.lastName = lastName;
    this.color = color;
    this.zord = zord;

    this.morphinTime = function(){
        console.log(

            this.firstName + " yells! It's Morphin Time!! \n" +
            this.zord.toUpperCase() + "!!!!" + "\n" +
            this.firstName +
            " morphs into The " + this.color + " Ranger"

        );
    }
}

// var PlayerArr = []
// var jason = new Player("Jason", "Scott");
// var kimberly = new Player("Kimberly", "Hart");
// var trini = new Player("Trini", "Kwan");
// var zack = new Player("Zack", "Taylor");
// var billy = new Player("Billy", "Cranston");
// var tommy = new Player("Tommy", "Oliver");
// var bulk = new Player("Farkas", "Bulkmeier");
// var skull = new Player("Eugene", "Skullovitch");

// PlayerArr.push(jason,kimberly,trini,zack,billy,tommy,bulk,skull);
//Power Ranger Constructor

var originalRangersArray = [];
var redRanger = new PowerRanger(jason, "Red", "Tyrannosaur");
var pinkRanger = new PowerRanger(kimberly, "Pink", "Pterodactyl");
var yellowRanger = new PowerRanger(trini, "Yellow","Saber Tooth Tiger");
var blackRanger = new PowerRanger(zack, "Black", "Mastodon");
var blueRanger = new PowerRanger(billy, "Blue","Triceratops");
var greenRanger = new PowerRanger(tommy,"Green","DragonZord");

originalRangersArray.push(redRanger, pinkRanger, yellowRanger, blackRanger, blueRanger, greenRanger);


function morphAllRangers(powerRangerTeam){
    powerRangerTeam.forEach(function (ranger){
        ranger.morphinTime();
    });
}

morphAllRangers(originalRangersArray);


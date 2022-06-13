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
console.log("Testing");

function createPlayer(){
    var playerFirstName = prompt("What is your first name?");
    var playerLastName = prompt("What is your last name?");
    var playerColor = prompt("What is your favorite color?");
    var playerZord = prompt("Select Zord");
    var player = new PowerRanger(playerFirstName, playerLastName, 50, 13, playerColor, playerZord);
    return player;
}

function createRangerTeam(player){
    let rangersArr = [];
    var redRanger = new PowerRanger("Jason", "Scott", "Red", "Tyrannosaur");
    var pinkRanger = new PowerRanger("Kimberly", "Hart", "Pink", "Pterodactyl");
    var yellowRanger = new PowerRanger("Trini", "Kwan", "Yellow","Saber Tooth Tiger");
    var blackRanger = new PowerRanger("Zack", "Taylor", "Black", "Mastodon");
    var blueRanger = new PowerRanger("Billy", "Cranston", "Blue","Triceratops");
    var greenRanger = new PowerRanger("Tommy", "Oliver","Green","DragonZord");
    rangersArr.unshift(player, redRanger, pinkRanger,yellowRanger,blackRanger,blackRanger,blueRanger,greenRanger);
    return rangersArr;

}



function randomIntFromRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function d6Roll(){
    return randomIntFromRange(1, 6);
}

function X2d6(){
    return d6Roll() + d6Roll()
}

function NPC(name, HP,AP){
    this.name = name;
    this.HP = HP;
    this.AP = AP;
    this.attack = function(){

    }
}

function Monster(NPC){

}

function spawnPuddies(){
   let puddiesArr = [];
   var numOfPuddies = randomIntFromRange(3, 10);
   for (let i = 0; i < numOfPuddies; i++)
    puddiesArr.unshift(new NPC("Puddie"+[i], 10, 2));
   return puddiesArr;
}




let Zordon = {

    voiceline1: "voice line 1",
    voiceline2: "voice line 2",
    voiceline3: "voice line 3",
    voiceline4: "voice line 4",
    voiceline5: "voice line 5",

}

let Alpha5 = {

    voiceline1: "voice line 1",
    voiceline2: "voice line 2",
    voiceline3: "voice line 3",
    voiceline4: "voice line 4",
    voiceline5: "voice line 5",

}

function PowerRanger(firstName, lastName, HP, defence, color, zord){
    this.HP = HP;
    this.defence = defence;
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

    this.attack = function(){

    }

}
function startGame(){

createRangerTeam(createPlayer());

    var redRanger = new PowerRanger("Jason", "Scott", "Red", "Tyrannosaur");
    var pinkRanger = new PowerRanger("Kimberly", "Hart", "Pink", "Pterodactyl");
    var yellowRanger = new PowerRanger("Trini", "Kwan", "Yellow","Saber Tooth Tiger");
    var blackRanger = new PowerRanger("Zack", "Taylor", "Black", "Mastodon");
    var blueRanger = new PowerRanger("Billy", "Cranston", "Blue","Triceratops");
    var greenRanger = new PowerRanger("Tommy", "Oliver","Green","DragonZord");


    console.log("Greeting");
    console.log("Yee find yeeself in yon Angel Grove Juice Bar");
    console.log("Yee find yeeself in yon Command Center");
    console.log("Yee find yeeself in yon *scene* fighting puddies");
    console.log("Yee find yeeself in yon Megazord fighting monster");


}

//Player Constructor

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

// var originalRangersArray = [];
// var redRanger = new PowerRanger(jason, "Red", "Tyrannosaur");
// var pinkRanger = new PowerRanger(kimberly, "Pink", "Pterodactyl");
// var yellowRanger = new PowerRanger(trini, "Yellow","Saber Tooth Tiger");
// var blackRanger = new PowerRanger(zack, "Black", "Mastodon");
// var blueRanger = new PowerRanger(billy, "Blue","Triceratops");
// var greenRanger = new PowerRanger(tommy,"Green","DragonZord");

// originalRangersArray.push(redRanger, pinkRanger, yellowRanger, blackRanger, blueRanger, greenRanger);


function morphAllRangers(powerRangerTeam){
    powerRangerTeam.forEach(function (ranger){
        ranger.morphinTime();
    });
}

// morphAllRangers(originalRangersArray);


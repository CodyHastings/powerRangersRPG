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
let gameSpace = document.getElementById("gameSpace");


function createPlayer(){
    var playerFirstName = prompt("What is your first name?");
    var playerLastName = prompt("What is your last name?");
    var playerColor = prompt("What is your favorite color?");
    var playerZord = prompt("Select Zord");
    return new PowerRanger(playerFirstName, playerLastName, playerColor, playerZord, 50, 7,14,17, 10);
}

function createRangerTeam(player){
    let rangersArr = [];
    var redRanger = new PowerRanger("Jason", "Scott", "Red", "Tyrannosaur",50, 7,14,17, 10);
    var pinkRanger = new PowerRanger("Kimberly", "Hart", "Pink", "Pterodactyl",50, 7,14,17, 10);
    var yellowRanger = new PowerRanger("Trini", "Kwan","Yellow","Saber Tooth Tiger",50, 7,14,17, 10);
    var blackRanger = new PowerRanger("Zack", "Taylor","Black", "Mastodon",50, 7,14,17, 10);
    var blueRanger = new PowerRanger("Billy", "Cranston", "Blue","Triceratops",50, 7,14,17, 10);
    var greenRanger = new PowerRanger("Tommy", "Oliver","Green","DragonZord",50, 7,14,17, 10);
    rangersArr.push(player, redRanger, pinkRanger,yellowRanger,blackRanger,blueRanger,greenRanger);
    return rangersArr;

}



function randomIntFromRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function d6Roll(){
    return randomIntFromRange(1, 6);
}

function X2d6(){
    let result = d6Roll() + d6Roll()
    console.log("you rolled a " + result);
    return result
}

function NPC(name, HP,AT, def, arm, dmg){
    this.name = name;
    this.HP = HP;
    this.AT = AT;
    this.def = def;
    this.arm = arm;
    this.dmg = dmg
}



function spawnPuddies(){
   let puddiesArr = [];
   var numOfPuddies = randomIntFromRange(3, 10);
   for (let i = 0; i < numOfPuddies; i++)
    puddiesArr.push(new NPC("Puddie"+[i], 10, 2, 12,15,2));
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

function PowerRanger(firstName, lastName, color, zord, HP, AT, def, arm, dmg ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.color = color;
    this.zord = zord;
    this.HP = HP;
    this.AT = AT;
    this.def = def;
    this.arm = arm;
    this.dmg = dmg;

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




// function startGame(){

    function calculateRangerDmg(PowerRanger, NPC){
console.log("The " +PowerRanger.color + " Ranger is attacking " + NPC.name)

        let PRattack = PowerRanger.AT + X2d6();
        let PRdmg = PowerRanger.dmg + X2d6();
        if(PRattack > NPC.def){
            console.log("you hit");

            if(PRdmg > NPC.arm){
                console.log("Armor " + NPC.arm);
                console.log("Ranger Damage " + PRdmg);
                console.log("NPC ARM " + NPC.arm);
                console.log("NPC HP " + NPC.HP);
                console.log(NPC.arm - PRdmg);

                let result = PRdmg -NPC.arm;
                console.log(NPC.arm);
                NPC.HP -= result;
                console.log(result);
                console.log("New NPC HP " + NPC.HP);
                return result;
            } else{
                console.log("you miss")
            }

        }
    }

    var rangers = createRangerTeam(createPlayer());


    console.log(rangers);

    console.log("Greetings new ranger...blah blah blah");



    console.log("Yee find yeeself in yon Angel Grove Juice Bar");



    console.log("Yee find yeeself in yon Command Center");



    console.log("Yee find yeeself in yon *scene* fighting puddies");

var puddies = spawnPuddies();

    console.log(puddies);



    console.log("Yee find yeeself in yon Megazord fighting monster");

calculateRangerDmg(rangers[0],puddies[0])
// }

// startGame()

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


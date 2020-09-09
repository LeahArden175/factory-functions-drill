function createCharacter(name, nickname, race, origin, attack, defense){
    return{
        name,
        nickname,
        race,
        origin,
        attack,
        defense
    }
    function describe(){
        console.log(name + " is a " + race + " from " + origin + ".")
    }
    function evaluateFight(character){
        let x = this.attack - character.defense;
        let y = character.attack -  this.defense;
        if(this.attack < character.defense){
            x = 0;
        }
        if( character.defense < this.attack){
            y = 0; 
        }
        return ("Your opponent takes " + x + " and you recieve" + y + ".")
    }
}

let character =[
    createCharacter("Gandalf the White", "gandalf", "Wizard", "Midde Earth", 10, 6),
    createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "the Shire", 2, 1),
    createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
    createCharacter("Aragron son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
    createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5)
]

character.push(createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 6, 7));
//console.log(character);

character.find(createCharacter())
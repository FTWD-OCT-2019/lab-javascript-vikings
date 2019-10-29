// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack = () => {
        return this.strength;
    }
    receiveDamage = (damage) => {
        this.health -= damage
    }
    test = (that) => {
        console.log('call a method from child')
    }

}




// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength,)
        this.name = name;
    }
    receiveDamage = (damage) =>{

        this.health -= damage
        //console.log(super)
        //super.receiveDamage(damage)
        //console.log(this)
        return ( 
            this.health > 0 ? 
            this.name + ' has received ' + damage + ' points of damage' : 
            this.name + ' has died in act of combat'
        )
    }

    battleCry = () => {
       
        this.test(this)

        return "Odin Owns You All!";
    }
}





// Saxon
class Saxon extends Soldier{
    
    receiveDamage = (damage) => {
        this.health -= damage
        console.log(this)
        return (    
            this.health > 0 ? 
            'A Saxon has received ' + damage + ' points of damage' : 
            'A Saxon has died in combat'
        )
    }

}

// War
class War {
    constructor(){
        this.saxonArmy = [] 
        this.vikingArmy = []
    }
    addViking = (viking) => {
        this.vikingArmy.push(viking)
    }
    addSaxon = (Saxon) => {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack = () => {
        let saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[saxIndex]  //random Savon
        let randomViking = this.vikingArmy[vikIndex]  //random Viking

        randomSaxon.receiveDamage(randomViking.strength) 

        if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(saxIndex, 1)
            return 'A Saxon has died in combat'
        }
    }

    saxonAttack = () => {
        let saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[saxIndex]  //random Savon
        let randomViking = this.vikingArmy[vikIndex]  //random Viking

        randomViking.receiveDamage(randomSaxon.strength) 

        if(randomViking.health <= 0) {
            this.vikingArmy.splice(saxIndex, 1)
            return 'A Viking has died in combat'
        }
        //'Harald has received 25 points of damage'
        return randomViking.name + ' has received '+randomSaxon.strength+ ' points of damage'
    }
    showStatus = () => {
        //Vikings have won the war of the century!", if the Saxons array is empty
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        return "Vikings and Saxons are still in the thick of battle."
    }

}

let viking = new Viking('Juan!', 45, 98)
let saxon = new Saxon(45, 98)

let w = new War()
w.addViking(viking)
w.addSaxon(saxon)

viking.battleCry()


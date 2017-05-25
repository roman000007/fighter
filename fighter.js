class Fighter{
    constructor(name, power=1, health=100){
        this.name = name;
        this.power = power;
        this.health = health;
    }
    
    setDamage(damage=10){
        this.health -= damage;
        console.log(`health: ${this.health}`);
    }
    
    hit(enemy, point){
        enemy.setDamage(this.power * point)
    }
    
    isAlive(){
        return this.health > 0 ? true : false; 
    }
    
}

class ImprovedFighter extends Fighter{
    doubleHit(enemy, point){
        super.hit(enemy, point * 2);
    }    
}



function fight(fighter, improvedFighter, ...rest){
    
    let counter = 0;
    
    rest.some(point=>{
        
        let who = counter % 2 == 0 ? fighter : improvedFighter;
        let enemy = who === fighter ? improvedFighter : fighter;
        
        who.hit(enemy, point);
        
        //console.log(`${who.name} health: ${who.health}`);
        //console.log(`${enemy.name} health: ${enemy.health}`);
        
        if (!enemy.isAlive()){
            console.log(`${who.name} wins! Congratulations!`);
            return true;
        }
        
        counter++;
    });
}

var fighter1 = new Fighter("Roma", 3, 100);
var fighter2 = new Fighter("Max", 3, 100);


fight(fighter1, fighter2, 10, 12, 14, 21, 18, 7, 7, 8, 5, 15, 27);
/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(user, createdAt, dimensions){
      this.user = user;
      this.createdAt = createdAt;
      this.dimensions = dimensions;
    }
    destroy(){
      return `${this.user} was removed from the game. ${this.createdAt}`
       }
  }
  
  const ariel = new GameObject(`Ariel`, 5, 5)
  // console.log(ariel.destroy())
  
  class CharacterStats extends GameObject {
    constructor(user, createdAt, dimensions, healthPoints){
      super(user, createdAt, dimensions);
      this.healthPoints = healthPoints;
    }
  
    takeDamage(){
      console.log(`${this.user} took damage. ${this.healthPoints} health points left`)
    }
  }
  
  const ellie = new CharacterStats('Ellie',5,5,5);
  // console.log(ellie.destroy())
  // console.log(ellie.takeDamage())
  
  class Humanoid extends CharacterStats {
    constructor(user, createdAt, dimensions, healthPoints, team, weapons, language){
      super(user, createdAt, dimensions, healthPoints, team, weapons, language);
      this.team = team;
      this.weapons = weapons;
      this.language = language;
    }
  
    greet(){
      console.log(`${this.user} offers a greeting in ${this.language}`);
    }
  
  }
  // const lauren = new Humanoid(`lauren`)
  // console.log(lauren.takeDamage())
  const mage = new Humanoid('Bruce', new Date(), 5, 10, `Mage Guild`, `Staff of Shamalama`, `common tongue`)
  
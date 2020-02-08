export class Age {
  constructor(userAge) {
  this.userAge = userAge,
  this.mercury = Math.round(userAge / .24), 
  this.venus = Math.round(userAge / .62), 
  this.mars = Math.round(userAge / 1.88),
  this.jupiter = Math.round(userAge / 11.86)
  }
  checkUserAge(age) {
    if (age === 1 || age <= 120)
    return age
  } 

  
  earthLife(age) {
    let lifeSpan = 78;
    let earthExceed = lifeSpan - age;
    if (lifeSpan >= age) {
      return earthExceed;
    } else{
      return age - lifeSpan;
    }
  }
  mercuryLife(age) {
    let mercAge = parseFloat((age /.24).toFixed(2));
    console.log(mercAge);
    let lifeSpan = 325;
    
    let mercuryExceed =  mercAge - lifeSpan;
    console.log(mercAge);
    if (lifeSpan >= mercAge) {
      return mercuryExceed;
    } else{
      return mercAge - lifeSpan;
    }
  }
};
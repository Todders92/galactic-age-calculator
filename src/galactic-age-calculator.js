export class Age {
  constructor(userAge, mercury, venus, mars, jupiter) {
  this.userAge = userAge,
  this.mercury = Math.round(userAge / .24), 
  this.venus = venus, 
  this.mars = mars
  this.jupiter = jupiter
  }
  checkUserAge(age) {
    if (age === 1 || age <= 120)
    return age
  } 

  mercuryAge(age) {
    let mercuryAge = age / .24;
    let convertAge = parseFloat(mercuryAge.toFixed(2));
    return convertAge;
  }
  venusAge(age) {
    let venusAge = age / .62;
    let convertAge = parseFloat(venusAge.toFixed(2));
    return convertAge;
  }
  marsAge(age) {
    let marsAge = age / 1.88;
    let convertAge = parseFloat(marsAge.toFixed(2));
    return convertAge;
  }
 
  jupiterAge(age) {
    let jupiterAge = age / 11.86;
    let convertAge = parseFloat(jupiterAge.toFixed(2));
    return convertAge;
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
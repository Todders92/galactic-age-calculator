
export class Age {
  constructor(userAge) {
    this.userAge = userAge,
    this.mercury = Math.round(userAge / .24), 
    this.venus = Math.round(userAge / .62), 
    this.mars = Math.round(userAge / 1.88),
    this.jupiter = Math.round(userAge / 11.86)
  }
  checkUserAge(age) {
    if (age >=1 && age < 131)
    return age
  } 
  
  earthLife(age) {
    const lifeSpan = 78;
    const earthExceed = lifeSpan - age;
    if (lifeSpan >= age) {
      return earthExceed;
    } else{
      return age - lifeSpan;
    }
  }

  mercuryLife(age) {
    const mercAge = parseFloat((age /.24).toFixed(2));
    const lifeSpan = 325;
    const mercuryExceed =  mercAge - lifeSpan;
    if (lifeSpan >= mercAge) {
      return mercuryExceed.toFixed(2);
    } else{
      return parseFloat((mercAge - lifeSpan).toFixed(2));
    }
  }
  mercuryLife(age) {
    const mercAge = parseFloat((age /.24).toFixed(2));
    const lifeSpan = 325;
    const mercuryExceed =  mercAge - lifeSpan;
    if (lifeSpan >= mercAge) {
      return mercuryExceed.toFixed(2);
    } else{
      return parseFloat((mercAge - lifeSpan).toFixed(2));
    }
  }
  venusLife(age) {
    const venusAge = parseFloat((age /.62).toFixed(2));
    const lifeSpan = 125.8;
    const venusExceed =  venusAge - lifeSpan;
    if (lifeSpan >= venusAge) {
      return venusExceed.toFixed(2);
    } else{
      return parseFloat((venusAge - lifeSpan).toFixed(2));
    }
  }
  marsLife(age) {
    const venusAge = parseFloat((age /1.88).toFixed(2));
    const lifeSpan = 41.49;
    const marsExceed =  venusAge - lifeSpan;
    if (lifeSpan >= venusAge) {
      return marsExceed.toFixed(2);
    } else{
      return parseFloat((venusAge - lifeSpan).toFixed(2));
    }
  }
};
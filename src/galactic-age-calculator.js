export class Age {
  constructor(userAge, mercury, venus, mars, jupiter) {
  this.userAge = userAge,
  this.mercury = mercury, 
  this.venus = venus, 
  this.mars = mars
  this.jupiter = jupiter
  }
  checkUserAge(age) {
    if (age === 1 || age <= 120)
    return age
  } 

  mercuryAge(age) {
    let mercAge = age * .24
    return mercAge
  }
  venusAge(age) {
    let venAge = age * .62
    return venAge
  }

  marsAge(age) {
    let marsAge = age * 1.88
    return marsAge
  }
}
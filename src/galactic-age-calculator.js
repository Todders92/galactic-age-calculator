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
    let mercAge = age*.24
    console.log(mercAge);
    // return mercAge
  }
}
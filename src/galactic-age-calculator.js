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
    // console.log(this.userAge)
  } 
}
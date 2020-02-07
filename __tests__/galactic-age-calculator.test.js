import { Age } from "../src/galactic-age-calculator";

describe("Age", () => {

  test("this should confirm the age of the user", () => {
    let age = new Age(42, 0, 0, 0, 0)
    expect(age.checkUserAge(42)).toEqual(42)
  })

});
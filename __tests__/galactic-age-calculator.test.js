import { Age } from "../src/galactic-age-calculator";

describe("Age", () => {

  test("this should confirm the age of the user", () => {
    let age = new Age(42, 0, 0, 0, 0)
    expect(age.checkUserAge(42)).toEqual(42)
  });

  test("this should calculate the users age in mercury years", () => {
    let age = new Age(42, 0, 0, 0, 0)
    expect(age.mercuryAge(42)).toEqual(10.08)
  });

  test("this should calculate the users age in venus years", () => {
    let age = new Age(42, 0, 0, 0, 0)
    expect(age.venusAge(42)).toEqual(26.04)
  });

});
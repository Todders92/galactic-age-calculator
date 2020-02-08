import { Age } from "../src/galactic-age-calculator";

describe("Age", () => {

  test("this should confirm the age of the user", () => {
    let age = new Age(42)
    expect(age.checkUserAge(42)).toEqual(42)
  });

  test("this should calculate the users age in mercury years", () => {
    let age = new Age(42)
    expect(age.mercuryAge(42)).toEqual(175)
  });

  test("this should calculate the users age in venus years", () => {
    let age = new Age(42)
    expect(age.venusAge(42)).toEqual(67.74)
  });

  test("this should calculate the users age in mars years", () => {
    let age = new Age(42)
    expect(age.marsAge(42)).toEqual(22.34)
  });

  test("this should calculate the users age in jupiter years", () => {
    let age = new Age(42)
    expect(age.jupiterAge(42)).toEqual(3.54)
  });
  test("this should calculate the users life expectancy on earth", () => {
  let age = new Age(42)
  expect(age.earthLife(42)).toEqual(36)
  });
  test("this should determine if the user has outlived the average life expectancy on earth", () => {
    let age = new Age(86)
    expect(age.earthLife(86)).toEqual(8)
    });
  test("this should determine if the user has outlived the average life expectancy on Mercury", () => {
    let age = new Age(86)
    expect(age.mercuryLife(86)).toEqual(33.33)
    });
});
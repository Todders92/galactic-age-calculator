import { Age } from "../src/galactic-age-calculator";

describe("Age", () => {

  test("this should confirm the age of the user", () => {
    let age = new Age(42)
    expect(age.checkUserAge(42)).toEqual(42)
  });

  test("this should calculate the users age in mercury years", () => {
    let age = new Age(42)
    expect(age.mercury).toEqual(175)
  });

  test("this should calculate the users age in venus years", () => {
    let age = new Age(42)
    expect(age.venus).toEqual(68)
  });

  test("this should calculate the users age in mars years", () => {
    let age = new Age(42)
    expect(age.mars).toEqual(22)
  });

  test("this should calculate the users age in jupiter years", () => {
    let age = new Age(42)
    expect(age.jupiter).toEqual(4)
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
  test("this should determine if the user has outlived the average life expectancy on Venus", () => {
    let age = new Age(86)
    expect(age.venusLife(86)).toEqual(12.91)
  });
  test("this should determine if the user has outlived the average life expectancy on Mars", () => {
    let age = new Age(86)
    expect(age.marsLife(86)).toEqual(4.25)
  });
  test("this should determine if the user has outlived the average life expectancy on Jupiter", () => {
    let age = new Age(86)
    expect(age.jupiterLife(86)).toEqual(.11)
  });
});
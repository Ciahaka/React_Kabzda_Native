import React from "react";
import {Address} from "cluster";
import {LocalAddressType, NewAddressType} from "./object";

let localAddress: LocalAddressType;

beforeEach(() => {
  localAddress = {
    city: 'Budapest',
    buildings: [
      {builtIn: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
      {builtIn: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
      {builtIn: 2020, repaired: false, address: {number: 101, street: {title: "Happy street"}}}
    ],
    officialBuildings: [
      {type:"HOSPITAL",budget:200000,staffCount:200,address:{street:{title:"Central Str"}}},
      {type:"FIRE-STATION",budget:500000,staffCount:1000,address:{street:{title:"South Str"}}}
    ],
    numberOfCitizens: 500,
  }
})

// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test('the number of residents in the 3 houses', () => {
  expect(localAddress.buildings.length).toBe(3);

  expect(localAddress.buildings[0].builtIn).toBe(2012);
  expect(localAddress.buildings[0].repaired).toBe(false);
  expect(localAddress.buildings[0].address.number).toBe(100);
  expect(localAddress.buildings[0].address.street.title).toBe("White street");

  expect(localAddress.buildings[1].builtIn).toBe(2008);
  expect(localAddress.buildings[1].repaired).toBe(false);
  expect(localAddress.buildings[1].address.number).toBe(100);
  expect(localAddress.buildings[1].address.street.title).toBe("Happy street");

  expect(localAddress.buildings[2].builtIn).toBe(2020);
  expect(localAddress.buildings[2].repaired).toBe(false);
  expect(localAddress.buildings[2].address.number).toBe(101);
  expect(localAddress.buildings[2].address.street.title).toBe("Happy street");
})

// 01. дополните тип GovernmentBuildingType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains hospital and fire station", () => {
  expect(localAddress.officialBuildings.length).toBe(2);

  expect(localAddress.officialBuildings[0].type).toBe("HOSPITAL");
  expect(localAddress.officialBuildings[0].budget).toBe(200000);
  expect(localAddress.officialBuildings[0].staffCount).toBe(200);
  expect(localAddress.officialBuildings[0].address.street.title).toBe("Central Str");

  expect(localAddress.officialBuildings[1].type).toBe("FIRE-STATION");
  expect(localAddress.officialBuildings[1].budget).toBe(500000);
  expect(localAddress.officialBuildings[1].staffCount).toBe(1000);
  expect(localAddress.officialBuildings[1].address.street.title).toBe("South Str");
})




export class GalacticAge {
  constructor(){
    this.earth ="";
  }

  currentAge(age){
    this.earth = age;
    this.mercury = parseFloat((age/.24).toFixed(4).slice(0,-2));
    this.venus = parseFloat((age/.62).toFixed(4).slice(0,-2));
    this.mars = parseFloat((age/1.88).toFixed(4).slice(0,-2));
    this.jupiter = parseFloat((age/11.86).toFixed(4).slice(0,-2));
    this.saturn = parseFloat((age/29.457).toFixed(4).slice(0,-2));
    this.uranus = parseFloat((age/84.011).toFixed(4).slice(0,-2));
    this.neptune = parseFloat((age/164.78).toFixed(4).slice(0,-2));
  }

  lifeLeft(expectancy){
    this.expectancyBeat = false;
    this.earthLeft = parseFloat((expectancy - this.earth).toFixed(4).slice(0,-2));
    this.mercuryLeft = parseFloat((this.earthLeft/.24).toFixed(4).slice(0,-2));
    this.venusLeft = parseFloat((this.earthLeft/.62).toFixed(4).slice(0,-2));
    this.marsLeft = parseFloat((this.earthLeft/1.88).toFixed(4).slice(0,-2));
    this.jupiterLeft = parseFloat((this.earthLeft/11.86).toFixed(4).slice(0,-2));
    this.saturnLeft = parseFloat((this.earthLeft/29.457).toFixed(4).slice(0,-2));
    this.uranusLeft = parseFloat((this.earthLeft/84.011).toFixed(4).slice(0,-2));
    this.neptuneLeft = parseFloat((this.earthLeft/164.78).toFixed(4).slice(0,-2));

    if(this.earth > expectancy) {
      this.expectancyBeat = true;
      this.earthLeft = Math.abs(this.earthLeft);
      this.mercuryLeft = Math.abs(this.mercuryLeft);
      this.venusLeft = Math.abs(this.venusLeft);
      this.marsLeft = Math.abs(this.marsLeft);
      this.jupiterLeft = Math.abs(this.jupiterLeft);
      this.saturnLeft = Math.abs(this.saturnLeft);
      this.uranusLeft = Math.abs(this.uranusLeft);
      this.neptuneLeft = Math.abs(this.neptuneLeft);
    }
  }
}

export class User{
  constructor(name, birthdate, todaysDate, lifeExpectancy,){
    this.name = name;
    this.birthdate = birthdate;
    this.todaysDate = todaysDate;
    this.lifeExpectancy = lifeExpectancy;
  }

  findAge(){
    const birthdate = this.birthdate.split("-");
    const todaysDate = this.todaysDate.split("-");
    const yearsToBirth = parseInt(birthdate[2]) + (parseInt(birthdate[0])/12) + (parseInt(birthdate[1])/30.437);
    const yearsToToday = parseInt(todaysDate[2]) + (parseInt(todaysDate[0])/12) + (parseInt(todaysDate[1])/30.437);
    this.age = parseFloat((yearsToToday - yearsToBirth).toFixed(2).slice(0,-2));
  }


}
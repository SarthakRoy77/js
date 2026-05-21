// In this project we will create an Organizer of Animals and staff for a zoo and also add some methods to them . The topic in large covered is
// Object-Oriented - Programming also known as OOP

//Let us create an Assign Budget function

function assignBudget(budget) {
    ZooStaff.ZooBudget = budget;
    console.log(`Assigned Zoo Budget to ${budget}`)
}

// Let us create a Parent Animal class
class ZooAnimal {

    static animalsRecorded = 0

    constructor(name, age, type, gender) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;

        ZooAnimal.animalsRecorded++ ;

    }

    static revealAnimalFrequency() {
        console.log(`${ZooAnimal.animalsRecorded} animals have been recorded`);
    }

    feedAnimal() {
        console.log(`Fed ${this.name}`);
    }

    sendToSleep() {
        console.log(`Sent ${this.name} to sleep`)
    }

    celebrateBirthday() {
        console.log(`Happy ${this.age}th Birthday to ${this.name} `);
        this.age = this.age + 1;
        console.log(`${this.name}'s age now is ${this.age}`);
    }
}

//Let us create a Parent Staff Class , The classes have been designed to be used as a parent class, although it does not have a child class
class ZooStaff{
    static staffRecorded = 0;
    static ZooBudget = 1000000;

    constructor(name, age, previousExperience, wage ) {
        ZooStaff.staffRecorded++;
        this.name = name;
        this.age = age;
        this.previousExperience = previousExperience;
        this.wage = wage;
        this.roll = ZooStaff.staffRecorded;

    }


    sendToWork(){
        console.log(`Sent ${this.name} to work `);
    }

    payStaff() {
        console.log(`Paid ${this.wage} to ${this.name}`);
        ZooStaff.UpdateBudget(this.wage);
    }

    celebrateBirthday() {
        console.log(`Happy ${this.age}th Birthday to ${this.name} `);
        this.age = this.age + 1;
        console.log(`${this.name}'s age now is ${this.age}`);
    }

    static revealStaffFrequency() {
        console.log(`${ZooStaff.staffRecorded} staff has been hired`);
    }

    static UpdateBudget(wage) {
        ZooStaff.ZooBudget = ZooStaff.ZooBudget - wage;
        console.log(`After paying the updated budget is ${ZooStaff.ZooBudget}`)
    }
}

//Let us create few Animal Objects

const Tiger = new ZooAnimal('Sher', 12, 'Panthera tigeris tigeris', 'Male');
const Tiger1 = new ZooAnimal('Sherni', 10, 'Panthera tigeris sunda', 'Female');

ZooAnimal.revealAnimalFrequency();
console.log(Tiger1.gender);
console.log(Tiger1.age);
console.log(Tiger.name);
console.log(Tiger1.type);
Tiger.feedAnimal();
Tiger.sendToSleep();
Tiger.celebrateBirthday();

//Let us create few Staff Objects

const Manager = new ZooStaff('Michael Jordan', 33, true, 30000);
const ZooKeeper = new ZooStaff('Cristiano Ronaldo', 41, false, 10000);

ZooStaff.revealStaffFrequency();
console.log(Manager.name);
console.log(Manager.age);
console.log(ZooKeeper.previousExperience);
console.log(ZooKeeper.name);
console.log(Manager.wage);

assignBudget(50000)

ZooKeeper.payStaff();
ZooKeeper.celebrateBirthday();
Manager.sendToWork()

console.log(ZooKeeper.roll);

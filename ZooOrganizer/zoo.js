// In this project we will create an Organizer of Animals and staff for a zoo and also add some methods to them . The topic in large covered is
// Object-Oriented - Programming also known as OOP

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
}

//Let us create a Parent Staff Class , The classes have been designed to be used as a parent class, although it does not have a child class
class ZooStaff{
    static staffRecorded = 0;

    constructor(name, age, previousExperience ) {
        this.name = name;
        this.age = age;
        this.previousExperience = previousExperience;

        ZooStaff.staffRecorded++;
    }

    static revealStaffFrequency() {
        console.log(`${ZooStaff.staffRecorded} staff has been hired`);
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

//Let us create few Staff Objects

const Manager = new ZooStaff('Michael Jordan', 33, true);
const ZooKeeper = new ZooStaff('Cristiano Ronaldo', 41, false);

ZooStaff.revealStaffFrequency();
console.log(Manager.name);
console.log(Manager.age);
console.log(ZooKeeper.previousExperience);
console.log(ZooKeeper.name);



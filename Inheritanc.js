/*
2. Write a basic javascript code block the implements the following
    a. Constructor
    b. Polymorphism
    c. Inheritance
*/

class Animal{
    //Using constructor to assign the name for the Animal
    constructor(name){
        this.name = name
    }
    speak(){
        return `I am an animal.`
    }
}

//inheritance
class Dog extends Animal{
    //polymorphism as speak function of dog and cat will override the parents speak function
    speak(){
        return `Woof!`
    }
}
class Cat extends Animal{
    speak(){
        return `Meow!`
    }
}

const animal = new Animal('Donkey')
const dog = new Dog('Brunny')
const cat = new Cat('Liza')

console.log(animal.speak(), animal.name);
console.log(dog.speak(), dog.name);
console.log(cat.speak(), cat.name);


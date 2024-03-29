// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const brad = new Person('Brad', 36);
const john = new Person('John', '9-10-1960');

console.log(john.calculateAge());


// String
const name1 = "Jeff";
const name2 = new String("Jeff");

// name2.foo = "bar";
// console.log(name2);

console.log(typeof name2);

if (name2 === "Jeff") {
    console.log("YES");
} else {
    console.log("NO");
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);
console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);
console.log(typeof bool2);

// Function
const getSum1 = function (x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum1(1, 1));
console.log(getSum2(1, 1));

console.log(typeof getSum1);
console.log(typeof getSum2);

// Object
const john1 = {
    name: "John"
};
const john2 = new Object({
    name: "John"
});

console.log(john1);
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);


// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate Age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

console.log(mary.getsMarried('Smith'));

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));

// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
    return `Hi there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
    return `Hi there ${this.firstName} ${this.lastName}. Welcome to our company.`;
}

console.log(customer1.greeting());

const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {
        value: 'Brad'
    },
    lastName: {
        value: 'Traversy'
    },
    age: {
        value: 36
    }
});

console.log(brad);

console.log(brad.greeting());

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.firstName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());
console.log(Person.addNumbers(1, 2));

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());
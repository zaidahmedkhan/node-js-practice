const fullName = "zaid ahmed khan";
const hasHobbies = false;


const summarizeUser = (userName, age, hasHobbies) => {

    return (
        "Name is " + userName + ", age is " + age + " and the user has hobbies: " + hasHobbies
    );

}

const addOne = a => a + 1;
const add = (a, b, c) => a + b + c;
const addRandom = () => 1 + 3;

console.log(addOne(5));
console.log(add(1, 2, 3));
console.log(addRandom());
console.log(summarizeUser(fullName, 20, hasHobbies));




const person = {
    name: "zaid",
    age: 20,
    greet() {
        console.log("Hello, I am " + this.name);
    }

}





const printName = ({ name }) => {

    console.log(name);

}

printName(person);

const { name, age } = person;
console.log(name, 20);






person.greet();



const hobbies = ["sports", "cooking", 20, true];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
const copiedArray = [...hobbies];
console.log(copiedArray);
console.log("done");


for (let hobby of hobbies) {
    console.log(hobby);
}




const toArray = (...arg) => {

    return arg;
}


console.log(toArray(1, 2, 3, 4, 5, 6, "zaid", "ahmed"));





const fetchData = callBack => {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            callBack("done");
        }, 1500);
    });
    return promise;

}

setTimeout(() => {
    console.log("Timer is done")
    fetchData().then(text => {
        console.log(text)
        return fetchData;
    }).then(text2 => {
        console.log(text2);
    })
}, 2000);

console.log("hello");
console.log("hi");
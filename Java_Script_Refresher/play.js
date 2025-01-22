var fullName = "zaid ahmed khan";
var age = 20;
var hasHobbies = false;



function summarizeUser(userName, age, hasHobbies) {

    return (
        "Name is " + userName + ", age is " + age + " and the user has hobbies: " + hasHobbies
    );

}

console.log(summarizeUser(fullName, age, hasHobbies));
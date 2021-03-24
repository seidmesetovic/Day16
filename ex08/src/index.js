class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        let personInfo = {
            "Name": Person.name,
            "email": Person.email,
            "age": Person.age

        }
        return personInfo;
    }
}
module.exports = Person;
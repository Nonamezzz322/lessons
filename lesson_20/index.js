
//домашка через классы + пара новых фич
class Human {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;	
    }

    sayHello() {
          console.log(`Hello, my name is  ${this.name}, i am ${this.age} years old`);
    }
}
class AlevelStudent extends Human {
    static whoAreYou(){
        console.log(`I am Batman`);
    }
    static fromHuman(human){
       return new AlevelStudent({name: human.name, age: human.age, marks: [] });
    }
    constructor(obj){
        super(obj);
        this.marks = obj.marks;
        this._power = 0;
    }

    get power(){
        return this._power;
    }

    set power(value){
        if(typeof value === 'number' && value >= 0){
            this._power = value;
        }
    }
    
    get avarage(){
        return this.averageMark();
    }

    sayHello() {
        super.sayHello(); //вызывает первый консоль лог
        console.log(`Hello, my name is  ${this.name}, i am ${this.age} years old, and I am Batman`);
    }

    averageMark() { 

        let sum = 0;
        for(let i = 0; i < this.marks.length; i += 1) {
            sum += this.marks[i];
        }
        let result = sum / this.marks.length;  
        console.log (result); 
    }
}
// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.ClassName = props.ClassName;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects(){
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
        
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}`);
    }
}


class ProjectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(){
        console.log(`${this.name} announces to ${this.gradClassName}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


//Testing Person Object
const charlie = new Person({
    name:'Charlie',
    age:39,
    location:'New York'
});

charlie.speak();

//testing Student Object
const amy = new Student({
    name: 'Amy',
    location: 'Kansas',
    age: 39,
    previousBackground: 'Finance',
    ClassName: 'WPT8',
    favSubjects : ['JS','CSS', 'HTML']

});

amy.listsSubjects();

amy.PRAssignment('CSS');

amy.sprintChallenge('HTML');



//Testing Instructor
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  //Testing Project Manager
  const bill = new ProjectManagers({
      name: 'Bill',
      location: 'Connecticut',
      age: 40,
      gradClassName: 'WPT8',
      favInstructor: 'Jay'
  });

bill.standUp();
bill.debugsCode(amy, 'HTML');
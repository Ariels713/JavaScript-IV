
// CODE here for your Lambda Classes
// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:



class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.speciality = instructorAttributes.speciality;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject} where subject is the parameter passed in`)
    }

    grade(student, subject){
        console.log(`${this.name} receives a perfect score on ${subject}`)
    }
}


class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.faveSubjects = studentAttributes.faveSubjects;
    }

    listsSubjects(){
        this.faveSubjects.forEach(function(subject){
            console.log(`${subject}`)
        })
    }

    PRAassignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor{
    constructor(PMattributes){
        super(PMattributes);
        this.gradClassName = PMattributes.gradClassName;
        this.favInstructor = PMattributes.favInstructor;
    }

    standUP(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standUP time!`)
    }

    debugsCode(student, subject){
        console.log(`${student} debugs ${this.name}'s code on ${subject}`)
    }
}


const elliePerson = new Person({
    name: `Ellie Arielle`,
    age: 2,
    location: `New York, NY`
  })
  
  const laurenPerson = new Person ({
    name: `Lauren Chil`,
    age: 29,
    location: `New York, NY`
  })

  const ellieInstructor = new Instructor({
    name: `Ellie Arielle`,
    age: 2,
    location: `New York, NY`,
    speciality: `Javascript`,
    favLanguage: `Python`,
    catchPhrase: `I don't want it`
  })

  const laurenInstructor = new Instructor({
    name: `LC`,
    age: 31,
    location: `West New York, NJ`,
    speciality: `Ruby`,
    favLanguage: `C#`,
    catchPhrase: `Can you rub my feet please`
  })

  const ellieStudent = new Student({
    name: `Ellie Rod`,
    age: 5,
    location: `New Jersey`,
    previousBackground: `infant`,
    className: `WebPT77`,
    faveSubjects: [`Playdoh`, `Coloring`, `Reading`]
  })

  const laurenStudent = new Student({
    name: `Lauren Elyse`,
    age: 21,
    location: `Brookyn, NY`,
    previousBackground: `project manager`,
    className: `WebPT11`,
    faveSubjects: [`Organizing`, `Reading`, `Planning`]
  })

  const elliePM = new ProjectManager({
    name: `Els Rod`,
    age: 11,
    location: `Barcelona Spain`,
    speciality: `Ukulele`,
    favLanguage: `Spanish`,
    catchPhrase: `Yes please`,
    gradClassName: 'WebPT10',
    favInstructor: `My Papa`
  })
  
  const laurenPM = new ProjectManager({
    name: `Laur Chils`,
    age: 28,
    location: `New York, NY`,
    speciality: `Writing`,
    favLanguage: `Spanglish`,
    catchPhrase: `What's for dinner`,
    gradClassName: 'Baruch2010',
    favInstructor: `Proff`
  })


  //Code Test
console.log(elliePerson.speak())
console.log(laurenPerson.speak())
console.log(ellieInstructor.grade(elliePerson, 'python'))
console.log(laurenInstructor.grade(laurenPerson, `Algebra`))
console.log(ellieStudent.listsSubjects())
console.log(ellieStudent.PRAassignment('Python'))
console.log(ellieStudent.sprintChallenge(`Python`))
console.log(laurenStudent.listsSubjects())
console.log(laurenStudent.PRAassignment('Python'))
console.log(laurenStudent.sprintChallenge(`Python`))
console.log(elliePM.standUP(`@careers`))
console.log(elliePM.debugsCode(`Ellie`, `Python`))
console.log(laurenPM.standUP(`@partyTime`))
console.log(laurenPM.debugsCode(`Ariel`, `Python`))

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
// */
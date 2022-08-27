class Instructor extends Developer{
    name;
    designation = 'web Course Instructor'
    team = 'web team'
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)

    }
    createQuize (module){
        console.log(`please create quize for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank for your feedback.`)
    }
 }



 class Developer{
    name;
    designation = 'web Course Instructor'
    team = 'web team'
    tech;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
        this.tech = this.tech;
    }
    startSupportSession(featue){
        console.log(`Please develop the ${featue}`)

    }
    createQuize (version){
        console.log(` Please relase the version ${version}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank for your feedback.`)
    }
 }



 class jobPlacement{
    name;
    designation = 'Job placement'
    team = 'web team'
    tech;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
        this.tech = this.tech;
    }
    startSupportSession(featue){
        console.log(`Please develop the ${featue}`)

    }
    createQuize (version){
        console.log(` Please relase the version ${version}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank for your feedback.`)
    }
 }

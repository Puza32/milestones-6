const student = {
    name: 'kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.money + 'is participating in an exam';
    },
    imoroveExam: function(subject){
        this.exam()
        return `${this.name} is taken ${subject}`
    },
    threarDey: function(amount){
        this.money = this.money - amount - tips;
        return this.money;
    }

}

const output =  student.exam();
//console.log(output)
const reExam = student.imoroveExam('Algebra');
// console.log(reExam);
const remaining = student.threarDey(900);
console.log(remaining);
const dolaremaining = student.threarDey(500,50)
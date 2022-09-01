const kodomAli = {
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

const result = kodomAli.exam();

const badamAli = {
    name: 'Kacha badam',
    money: 800
}
const result2 = kodomAli.exam.call(badamAli);
const badamMoney = kodomAli.threarDey.call(badamAli, 400, 40);
// console.log(badamMoney);
const badamMoney2 = kodomAli.threarDey.apply(this,[1000,100]);
const badamAliTreat = kodomAli.threarDey.bind(badamAli);
const remaining = badamAliTreat(1000,100)
console.log(remaining);
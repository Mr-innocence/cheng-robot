function Person(name){
    this.name=name;
}

Person.prototype.share=[];

Person.prototype.printName=function(){
    alert(this.name);
}

var person1=new Person('Byron');
var person2=new Person('Frank');

person1.share.push(1);
person2.share.push(2);
console.log(person2.share);
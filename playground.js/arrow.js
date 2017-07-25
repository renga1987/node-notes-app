var user  = {
  name:'Renga',
  sayHi:()=>{
    console.log(`Hi I m ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi I m ${this.name}`);
  }

};
user.sayHiAlt();

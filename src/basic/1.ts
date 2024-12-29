const age: number = 50;
const nameUser: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback: (a: number) => number = (a) => {
  return 100 + a;
};


console.log(age);       
console.log(nameUser);   
console.log(toggle);     
console.log(empty);      
console.log(callback(100));
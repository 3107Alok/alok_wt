// var x=10;
// console.log("Testing",x);

// let b=12;
// {
//     let b=13
// }
// console.log(b)
// const a=15;

// console.log(a);
// const arr=[1,2,3];
// arr.push(4);
// console.log(arr);

// (function alok(){
//     console.log("Alok");
// })();


// function alok1(){
//     console.log("Alok1");
// }
// alok1()


// let show1=function(){
//     console.log("Arrow Function");
// }

// show1();


// a=456
// console.log(a," " ,a+100);


// let show2=()=>console.log("Arrow Function :");

// let sum =(a,b=50)=>{
//     let res =0;
//     result=a+b;
//     return result;
// }
// console.log(sum(100));


// let abhi =()=>({Name:"Test"})
//     console.log(abhi())




// class Stud{
//     constructor(name,marks){
//         this.name=name;
//         this.marks=marks;
//     }
// }

// const s1=new Stud ("Alok",24);
// const s2=new Stud ("Abhi",30);
// const s3=new Stud ("Amit",28);
// const s4=new Stud ("Ankit",32);
// const s5=new Stud ("Anshu",26);

// const students=[s1,s2,s3,s4,s5];
// students.sort((a,b)=>a.marks-b.marks);
// console.log(students[3]);





//write a program to fin odd even in js

    // let oe= ()=>{
    //     let x=11
    //     if(x%2==0){
    //         console.log("Even");
    //     }
    //     else{
    //         console.log("Odd");
    //     }
    // }
    // x=oe();



    // greater between two number 
    // let grt=(a,b)=>{
    //     if(a>b? console.log(a," is greater"):console.log(b," is greater"));
    // }
    // grt(42,4);




//    greater between three number
    // let grtr=(a,b,c)=>{
    //     if((a>b && a>c)? console.log(a," is greater"):((b>c && b>a)? console.log(b," is greater"):console.log(c," is greater")));}
    // grtr(2,4,6);




    // wap to create a simple calculator using switch case

    /*
    let calculator=(a,b,operator)=>{
        switch(operator){
            case '+':
                console.log(a+b);
                break;
            case '-':
                console.log(a-b);
                break;
            case '*':
                console.log(a*b);
                break;
            case '/':
                console.log(a/b);
                break;
            default:
                console.log("Invalid Operator");
        }
    }
    
    calculator(50,10,'+');
*/



/*
const employee ={
    name:"ABG ",
    doj:"2022-01-01",
    welcome:function(){
        console.log(`${this.name},An employee of KIET since ${this.doj}`)
        console.log(this)
    }
};
employee.welcome()
employee.name="Emp2"
employee.welcome()
console.log(employee.name)
*/



/*
v=0
function outer(){
    let x =10;
    
    function inner(){
        let b=20;
        console.log(x,v,b);
        
    }
    inner();
    // 
    // console.log(b);
}
 outer();
// inner(); // inner kaaam nahi krega bahar


//lexical (this) arrow functiion ke sath chalta hai normal function k sath nahi chalta


*/

/*
let abc={
    name:"Alok",
    outer : function(){
        console.log("in inner",this.name),
        inner=()=>{
            console.log("in inner arrow",this.name)
        }
        inner();            
    }
}
abc.outer();
*/


/*
let num=[10,20,30];


let[a,b,c]=num;
console.log(a);
console.log(b);
console.log(c);

let values=[1,2,3];
let[x,y]=values;
console.log("x = ",x);
console.log("y = ",y);
*/

/*
let num=[10,20,30];
let [a,b,c]=num;
console.log("a: ",a);
console.log("b: ",b);
console.log("c: ",c);
*/

//extra array values are ignored



/* const arr=[10,20,30]
const[a1,b1,c1,,d1]=arr;
const[x1,...y1]=arr;
//rest = ....y1 (mtlb bacha hua)
console.log(a1,b1,c1,d1);
console.log(y1);
 */


/* let Alok={
    Oname:"Alok",
    Oage:24,
    Ocity:"Delhi"
}
let duplicate ={...Alok,Ocity:"abc"};
duplicate['Address']="Agra"
console.log(Alok);
console.log(duplicate);
 */


/* let emp={
    name:"Kiet",
    id:24,
    designation:"Employee"
}
let duplicate={...emp,designation:"Manager",name:"Abhi"};
console.log(emp);
console.log(duplicate);
 */



//Rest and Spread

/* const arr=[first,second,...rest]=[10,20,30,40,50];
console.log(first);
console.log(second);
console.log(rest); */

//spread (yha mean h bda krna h


/* const arr1=[10,20,30];
const arr2=[...arr1,40,50];
const finalarr=[...arr1,...arr2];
console.log(arr2);
console.log(finalarr); */


//Asyncronous programming

/* console.log("T1")
console.log("T2")
setTimeout(()=>{
    console.log("T3 after 2 seconds")
},2000); */


/*  function bakeCAke(mycallbackk){
    console.log("Cake is in oven");
    setTimeout(()=>{
        console.log("Cake is ready");
        mycallbackk();
    },2000);
}
bakeCAke(()=>{
    console.log("Eating Cake");
})  */


/*
function bakeCake(){
    return new Promise((resolveR1,rejectR2)=>{
        console.log("Cake is in oven");
        setTimeout(()=>{
            let flag=false;
            if(flag){
                resolveR1("Cake is ready");
            }
            else{
                rejectR2("Cake is not ready");
            }
        },2000);
    });
}
bakeCake().then((message)=>{
    console.log(message);
    console.log("Eating Cake");
}).catch((error)=>{
    console.log("Can eat Pizza Plz");
}   );*/


//WAP in JS to check whther u can go to kashmir or not (according to availiability of petrol ) using promise
/*
function goToKashmir(){
    return new Promise((R1,R2)=>{
        let petrol=100;
        setTimeout(()=>{
            if(petrol>=50){
                R1("You can go to Kashmir");
            }
            else{
                R2("You cannot go to Kashmir");
            }           
        },2000);
    });
}*/




/* call bck function example*//*
console.log("Before Execution")
for(var i=0;i<1;i++){
    setTimeout(function(){
        console.log("Set time put msg");
        func1()
    },1000)
    func2()
}
console.log("After xecution")
function func1(){
    console.log("In func 1")
}

function func2(){
    console.log("In func 2")
}*/


//write a program in js  if cake is readt eat it if burnt order pizza plz .....without promise

/* function bakeCake(mycallback){
    console.log("Cake is in oven");
    setTimeout(()=>{   
        let flag=false;
        if(flag){
            console.log("Cake is ready");
            mycallback();
        }
        else{
            console.log("Cake is burnt");
            console.log("Order Pizza Plz");
        }  
    },2000);
}
bakeCake(()=>{
    console.log("Eating Cake");
})
   */     



async function bakeCake(){
    
}


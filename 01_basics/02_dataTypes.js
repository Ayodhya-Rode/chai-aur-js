
//number
//bigint
//string    => '',"",``
//boolean   => true/false
//null      => standalone value         // typeof- object
// undefined                            // typeof - undefined
// symbol   => unique
// object


// let num = 77
// console.log(typeof num);

// let num2 = "77"
// console.log(typeof num2);            //string
// num2 = Number(num2)                  //convrt to number
// console.log(num2);                   //77
// console.log(typeof num2);            //number

// let num2 = "77ab"                        
// console.log(typeof num2);                //string
// num2 = Number(num2)                      
// console.log(num2);                       //NaN
// console.log(typeof num2);               //number -- type of NaN=>number



// let num2 = null
// console.log(typeof num2);               // object
// num2 = Number(num2) 
// console.log(num2);                      //0
// console.log(typeof num2);               //number


// let num2 = undefined
// console.log(typeof num2);               // undefined
// num2 = Number(num2) 
// console.log(num2);                      //NaN
// console.log(typeof num2);               //number


// let num2 = true
// console.log(typeof num2);               // boolean
// num2 = Number(num2) 
// console.log(num2);                      //1
// console.log(typeof num2);               //number


// let num2 = "rode"
// console.log(typeof num2);               // string
// num2 = Number(num2) 
// console.log(num2);                      //NaN
// console.log(typeof num2);               //number


// let bool = 1
// console.log(typeof bool);           // number
// bool = Boolean(bool)
// console.log(typeof bool);           // boolean
// console.log(bool);                  // true

// let bool = 0
// console.log(typeof bool);           // number
// bool = Boolean(bool)
// console.log(typeof bool);           // boolean
// console.log(bool);                  // false

// let bool = ''
// console.log(typeof bool);           // string
// bool = Boolean(bool)
// console.log(typeof bool);           // boolean
// console.log(bool);                  // false

// let bool = 'rode'
// console.log(typeof bool);           // string
// bool = Boolean(bool)
// console.log(typeof bool);           // boolean
// console.log(bool);                  // true



//NUMBER
// "33" =>   // 33
// "33ab"   => //NaN    type is number
// true => 1 , false =>0


//BOOLEAN
//  FALSE VALUE     =>  '', 0, null, undefined , NaN, 
//  TRUE VALUE      =>  'hi', 1, -1, [], {}


// let str = 33;
// console.log(typeof str);     // number
// str = String(str)
// console.log(typeof str);         //string 

// console.log(1+2);               // 3
// console.log("1"+2)              // 12
// console.log(1+"2");             //12
// console.log(1+2+3);                 //6
// console.log('1'+2+3);               // 123   1 is string so string + 2+3 =123
// console.log(1+'2'+3);               // 123   num + string=string, so 1+2+3 =123
// console.log(1+2+'3');               // 33    num+num, so, 1+2 =3 and num +str = 3+3 =33

// In JavaScript, when you use + and one of the values is a string, 
// everything after that becomes a string and gets joined together like text.


// let num1,num2,num3 = 5
// console.log(num1);       // undefined
// console.log(num2);       // undefined
// console.log(num3);       // 5

// let num1=num2=num3 = 5               // unsafe -> num3 is let & other var
// console.log(num1);      //5
// console.log(num2);      //5
// console.log(num3);      //5

// let num1,num2,num3                   // safe -> all are let
// num1=num2=num3 = 5
// console.log(num1);      //5
// console.log(num2);      //5
// console.log(num3);


// console.log(typeof NaN);                 //number
// console.log(typeof undefined);           //undefined
// console.log(typeof null);                 //object
// console.log(typeof String);              //function
// console.log(typeof Function);            //function
// console.log(typeof Boolean);                //function
// console.log(typeof Object);                     //function
// console.log(typeof Symbol);                     //function
// console.log(typeof BigInt);                      //function


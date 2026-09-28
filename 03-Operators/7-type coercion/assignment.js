// //Type Coercion

// //Part a:

// // Q1
// let aq = Number("25");
// console.log(aq + 10);                                               //35

// // Q2
// let bq = String(100);
// console.log(bq + " rupees");                                     //100 ruppes

// // Q3
// let cq = Boolean(0);
// console.log(cq);                                             //false

// // Q4
// let dq = Boolean("Hello");
// console.log(dq);                                                 //true

// // Q5
// let eq = +"50";
// console.log(eq * 2);                                                //100     


// //Q6
// console.log("10" - 5);                                          //5
// console.log("10" + 5);                                          //105
// console.log("10" * 2);                                          //20
// console.log("10" / 2);                                          //5

// //Q7
// console.log("5" - "2");                                         //3
// console.log("5" + "2");                                         //52
// console.log("5" * "2");                                          //10
// console.log("5" / "2");                                           //2.5

// //Q8
// console.log(Number("123"));                                             //123
// console.log(Number("123abc"));                                          //NaN
// console.log(Number(true));                                              //1
// console.log(Number(false));                                             //0
// console.log(Number(null));                                              //o
// console.log(Number(undefined));                                         //NaN

// //Q9
// console.log(Boolean(0));                                                            //false
// console.log(Boolean(""));                                                           //false
// console.log(Boolean("0"));                                                          //true
// console.log(Boolean([]));                                                           //true
// console.log(Boolean({}));                                                           //true
// console.log(Boolean(null));                                                         //false


// //Q10
// console.log(String(100));                                                       //"100"
// console.log(String(true));                                                      //true
// console.log(String(null));                                                      //null
// console.log(String(undefined));                                                 //undefined
// console.log(100 + "");                                                          //100


// //Part c:


// //Q11
// console.log("5" + 3 + 2);                                                   //532
// console.log(5 + 3 + "2");                                                   //82
// console.log("5" - 3 + 2);                                                   //4
// console.log(5 - "3" + "2");                                                 //22

// //Q12
// console.log(true + true);                                                    //2
// console.log(true + false);                                                  //1
// console.log(true + "false");                                                //truefalse
// console.log(false + "true");                                                //falsetrue

// //Q13
// console.log(null + 5);                                              //5
// console.log(undefined + 5);                                         //NaN
// console.log(null + "5");                                            //null5
// console.log(undefined + "5");                                       //undefined5

// //Q14
// console.log([] + []);                                           //
// console.log([] + {});                                           //[object Object]
// console.log({} + []);                                           //[object Object]
// console.log({} + {});                                           //[object Object][object Object]

// //Q15
// let a = "10";
// let b = 5;
// let c = a + b;
// let d = a - b;
// let e = +a + b;
// console.log(c, typeof c);                                           //105,string
// console.log(d, typeof d);                                           //5,number
// console.log(e, typeof e);                                           //15 number

// //Q16
// console.log(!!"Hello");                                                 //true
// console.log(!!"");                                                      //false
// console.log(!!0);                                                       //false
// console.log(!!1);                                                       //true
// console.log(!!null);                                                    //false
// console.log(!!undefined);                                               //false

// //Q17
// console.log(Number(""));                                                //0
// console.log(Number(" "));                                               //0
// console.log(Number("0"));                                               //0
// console.log(Number("  25  "));                                          //25
// console.log(Number("25px"));                                            //nan

// //Q18
// let val1 = "5";
// let val2 = 2;
// console.log(val1 + val2);                                               //52
// console.log(+val1 + val2);                                              //7
// console.log(val1 - val2);                                               //3
// console.log(val1 * val2);                                               //10
// console.log(val1 / val2);                                               //2.5


// //Bonus Mixed Practice Questions:

// //Q19
// let count = 5;
// console.log(typeof count++);                                        //number
// console.log(count);                                                 //6
// console.log(typeof ++count);                                        //number
// console.log(count);                                                 //7

// //Q20
// let x = "10";
// let y = ++x;
// console.log(x, y, typeof x, typeof y);                                  //11,11,number ,number

// //Q21
// let az = "5";
// let bz = az++;
// console.log(az, bz, typeof az, typeof bz);                              //6,5,number,mumber

// //Q22
// console.log(typeof (1 + "2"));                                              //string
// console.log(typeof (1 - "2"));                                              //number
// console.log(typeof (1 * "2"));                                              //number
// console.log(typeof (1 / "2"));                                              //number

// //Q23
// let val = null;
// console.log(typeof val);                                                    //object
// console.log(val + 1);                                                       //1
// console.log(val - 1);                                                       //-1
// console.log(val * 1);                                                       //0
// console.log(Boolean(val));                                                  //false

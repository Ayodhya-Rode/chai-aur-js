

// const obj  = {
//     username:"rode",
//     greet:function(){
//         console.log(`username is ${this.username}`)
//     }
// }
// obj.greet();
// console.log(this);


// function UserDetail(){        
//     let username = 'hi'
//     console.log(this.username);  
// }
// UserDetail()

// const user =()=>{
//     let username = 'hi'
//     console.log(this.username); 
// }
// user()

//** explicity return type */
// const demo = () =>{ 
//     return('helloo')
// }
// console.log(demo());


// **** implicitly return ***
// const demo = () => console.log('heeello');
// demo()

const demo = () => ({user:'name'})
console.log(demo());

// task 2
let personName:string ="m.huzaifa qazi"
console.log(`hello ${personName} are you fine`);


//task 3 
var personName = "m.huzaifa";
console.log("lowercase:", personName.toLowerCase());
var personName = "m.huzaifa";
console.log("Uppercase:", personName.toUpperCase());
// var personName = "hello world";
// // console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toLowerCase(); }));


// task 4
let personName:string="\t\n hello huzaifa \n\t";
console.log("original:".personName);
console.log("stripped:".personName.trim());


// task 5
let author:string="who never made a mistake and try new";
let quotes:string="elbert einsten";
 console.log(`${quotes}.once said,"${author}"`);


// task 6
 console.log(10 - 2);
 console.log(16 / 2);
 console.log(5 + 3);
 console.log(4 * 2);


// task7
author"M.Huzaifa Qazi"


// task no 8
var favouritenumber = "5";
// revealing my fav number
console.log("My favourite number is".concat(favouritenumber));


// task 9
let names = ["ali", "zain", "asad", "zaid"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


//task 10
let names:string[]=["huzaifa","ali","iqbal","samad"]
let message:string="do you like play a cricket"
console.log(names[0] +" "+ message);
console.log(names[1]+" "+ message);


// task 11
let transportation:string[]=["honde","civic","audi","toyota"];
transportation.map((item)=>console.log(`i would like to own a ${item}`) );


// task 14
let guestarr :string[]=["huzaifa","fazal","anus"];
guestarr.map((item) =>(console.log(`dear ${item}. you are invited to the dinner`)) );



// task 15
 let guestArr:string[]=["ali","asad","maaz","zayan"];
 let cannotAttend:string="maaz";
//  console.log(cannotAttend +" cannot attent the diiner.");

 let newguest :string="ali";
 guestArr[guestArr.indexOf(cannotAttend)]=newguest;
console.log(guestArr);




// task 16
let guestArr:string[]=["babar","haris","abbas","malik"];
 let cannotAttend:string="abbas";
let newguest:string="mateen";

 guestArr[guestArr.indexOf(cannotAttend)]=newguest;
 console.log(guestArr);

 guestArr.map((item) =>
 console.log(`dear ${item} i found a bigger table so i am invited more people`));

// // part2
 let guestbeg:string="huzaifa"
 guestArr.unshift(guestbeg);
 console.log(guestArr);

// // part3
let middleguest:string="ahsan";
let middleindex=guestArr.length/3;
guestArr.splice(middleindex,0,middleguest);
console.log(guestArr);

// // part 4
guestArr.push("rafay");
console.log(guestArr);

// // part5 
guestArr.map((item)=>
console.log(`dear ${item} , you are invited more peoples list in the dinner`));

// task17
let guest:string[]=["uzair","humza","samad",]
console.log("due to limited space only two people invite to the dinner");

while(guest.length > 2){
    const removedguest =guest.pop();
    console.log(`sorry ${removedguest}you are not invited to the dinner`)
} 
guest.forEach((guest)=>{
console.log(`dear ${guest} you are invited to dinner`)
})

guest.pop();
guest.pop();

console.log("final guest list:.");


// task18
let placetovisit:string[]=["russia","japan","german","australia","barman"]
// console.log("original order:",placetovisit);

console.log("alphabetical order",[...placetovisit].sort());

console.log("original order after sorting",placetovisit);
console.log("reverse alphabetical order",[...placetovisit].sort(). reverse());

placetovisit.reverse();
console.log("reversed order",placetovisit);

placetovisit.sort((a,b,)=>b.localeCompare(a));
console.log("sorted in reserve alphabetical order",placetovisit);


// task19
let invitation:string[]=["huzaifa","ali"];
let count_invitation:number=invitation.length;
console.log(`${count_invitation} people invited to the dinner`);




// task20
let country:string[]=["oman","england","pakistan","china"];
console.log("list of country");
console.log(country);


// task21
let person:{name:string, fname:string, age:string}={name:"huzaifa",fname:"male",age:"20"}
console.log(person);


// task22
let day:string[]=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
console.log(day[5]);

// task23
let car ="subaro";
console.log("is car is == 'subaro'? predict true");
console.log(car =="subaro");

console.log("is car is 'honda civic'?predict true");
console.log(car !="honda civic");

console.log("is car is == 'Subaro'? predict false");
console.log(car =='Subaro');

console.log("car 10 > 45 ?predict false");
console.log(10>45);

console.log("is 20<10 ?predict false");
console.log(20<10);

console.log("is 54 < 88? predict true");
console.log(54<88);

// // TASK24
let name_1 :string="huzaifa";
let name_2 :string="mohammad huzaifa";
let name_3 :string="huzaifa qazi";

if (name_1 ==name_3){
    console.log("names are equal");
}else{

    console.log("names are not equal");
}    

if(name_1 !==name_2){
    console.log("names are equal")
}else{
    console.log("names are not equal");
}

let age_1:number=55;
let age_2:number=22;
if(age_1==55){
    console.log("eligile for vote");
}
if (age_2==22){
    console.log("eligible for enter hospital")
}

if(age_1 <=age_2){
    console.log("younger")
}
if(age_2 >=age_1){
    console.log("older");
}


// // task25
let alien_color="pink";

if(alien_color == "pink")
console.log("you are earn five point");

let alien_color:string="red";
if(alien_color == "pink")
console.log("no output");


// task 26
let alien_color="green"
if(alien_color == "green"){
    console.log("player just 5 point earn")
}else {
    console.log("player just 10 point");
}

let alien_color="blue"
if(alien_color == "green"){
console.log("player just  5 point for shooting the alien")
}else{
        console.log("player just 10 point for shooting the alien")
}


// task 27
let alien_color="blue";
if(alien_color =="green"){
    console.log("5 points")
}else if(alien_color=="yellow"){
    console.log("10 point");
}else{
    (console.log("15 point"))
}



// TASK 28
let age:number=50;
if(age<2){
    console.log("you are baby");
}else if(age < 4){
    console.log("you are toddler")
}else if(age < 13){
    console.log("you are kid")
}else if(age < 20){
    console.log("you are teenager")
}else if(age < 65){
    console.log("you are adult");
}else {
    console.log("you are older")
}


// TASK29
let fruits_name:string[]=["peach","mango","orange","berry"];
 if(fruits_name.includes("peach")){
    console.log("peach")
 }if(fruits_name.includes("berry")){
    console.log("you are really like berry")
 }if(fruits_name.includes("mango")){
    console.log("mango")
 }if(fruits_name.includes("banana")){
    console.log("you are realy like banana")
 }if(fruits_name.includes("orange")){
    console.log("orange")
 }


// TASK30
let users:string[]=["huzaifa","raza","admin"];
for(let user of users){
    if(user == "admin"){
        console.log("hello admin would you like to see a status report")
    }else{
        console.log(`hello ${users}, thankyou for logging again`)
    }
}



// // TASK31
let users:string[]=["eric","ali","anus","hasseb","admin"]
if (users .length=== 0){
    console.log("we need to find a some user!")
}else{
    for (let user of users){
        if(user=="admin"){
            console.log("hello admin, would you like to see a status report")
        }else{
            console.log(`hello ${users}, thankyou for logging again`)
        }
    }
}

users=[]
if(users.length==0){
    console.log("we need to find a some user!")
}


// TASK32
let currentusers:string[]=["admin","Ahsan","Huzaifa","Mateen"];
let new_users:string[]=["admin","ali","saad","samad"]
let current_users_lower:string[]=currentusers.map(users=>users.toLowerCase());

for (let new_user of new_users);
if(current_users_lower.includes(new_user .toLowerCase())){
    console.log(`sorry ${new_users}that some name is taken`);
}else{
    console.log(`yes${new_users}is still is available`)
}


// TASK33
let numbers:number[]=[1,2.3,4,5,6,7,8]
for (let number of numbers){
    if(number === 1){
        console.log(`${number}st`)
    }else if(number === 2){
        console.log(`${number}nd`)

    }else if(number === 3){
        console.log(`${number}rd`)
    }else{
        console.log(`${number}th`)
    }      
}

// TASK34
let favourite_pizza:string[]=["fajitapizza","malaipizaa","afghanipizza"];
for(let pizza of favourite_pizza){
    console.log(pizza)
}
console.log("\n")
for(let pizza of favourite_pizza){
    console.log(`i really like ${pizza} pizza`)
}



// // TASK35
let animals:string[]=["lion","cat","crow"];
for(let animal of animals){
     console.log(animal)
}
console.log("\n")

for(let animal of animals){
    console.log(`A ${animal} has a long tail`)
}
console.log("all animal are great")



// // TASK36
function makeshirt(size:string ,text:string):void{
    console.log(`you order a ${size} shirt and say that `)
}

makeshirt('large','"i love a shirt"')
makeshirt('small','"i need a big shirt"')


// TASK37
function makeshirt ( size:string ='large',text:string='i love this shirt'):void{
    console.log(`you order a ${size} shirt and say${text}`)
}
makeshirt();
makeshirt("extralarge");

makeshirt ('small',`i need a big shirt`)


// TASK38
function decribe_country(city:string,country:string='pakistan'):void{
    console.log(`${city} is in ${country}`)
}
decribe_country('karachi')
decribe_country('dhaka','bangladesh')
decribe_country('Makkah','saudia arab')


// TASK39
function city_name(city:string ,country:string):string{
    return `${city} ,${country}`
}
let c1 =city_name('karachi','pakistan')
let c2 =city_name('melbourne','australia')
let c3 =city_name('channai','india')

console.log(c1)
console.log(c2)
console.log(c3)


// TASK40
function makealbum(artist:string,title:string):{artist:string,title:string}{
  const dictionaries={
    artist:artist.charAt(0).toUpperCase()+artist.slice(1),
    title:title.charAt(0).toUpperCase()+title.slice(1)
  };
  return dictionaries;

}
let album=makealbum('Huzaifa','weather')
console.log(album);

 album=makealbum('ali','poetry')
console.log(album);

album=makealbum('saad','sad')
console.log(album);


// // TASK41
function show_magicians(magicians:string[]):void{
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase()+ magician.slice(1))
}
}const magician:string[]=["huzaifa","raza","anus"];
show_magicians(magician)


// TASK42
function make_great(magicians:string[]):void{
    for(let i =0; i<magicians.length; i++){
        magicians[1]=magicians[1]+ "the great"
    }
}
const magicians2:string[]=["anus ","raza","akram"]
make_great(magicians2)
show_magicians(magicians2);


// TASK43
function make_great(magicians:string[]):string[]{
    const greatMagicians:string[]=[];
    for(let i = 0; i< magicians.length; i++){
        greatMagicians.push(magicians[i] + 'the great');
    }
    return greatMagicians;
}
const magician3:string[]=["usama","samad","qasim"];
const greatMagicians2:string[]=make_great(magician3);
show_magicians(magician3);
show_magicians(greatMagicians2);


// TASK44
function sandwich(...items:string[]):void{
    console.log("sandwich orders:")


for(let i=0; i < items.length; i++){
    console.log(`-${items[i]}`)
}
}
console.log("enjoy your sandwich huzaifa qazi");
sandwich('malai','tikka');
sandwich('chicken','mayo')


// TASK45
type car={
    manufacture:string
    model:string;
    [key:string]:any;
}
function createcar(manufacture:string,model:string,optional:Record<string,any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar:car=createcar("suzuki","cultus",{color:"white",year:"2024"})
console.log(mycar)
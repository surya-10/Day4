function greet(val){
    console.log(val);
}
let xhml = new XMLHttpRequest();
xhml.open("GET", "https://restcountries.com/v3.1/all");
xhml.send();
xhml.onload=function(){
    let data = JSON.parse(xhml.response);
    for(obj in data){
        console.log(obj);
        console.log("flag = ", data[obj].flags);
        console.log("country name = ",data[obj].name.common);
        console.log("region = ",data[obj].region);
        console.log("subregion = ",data[obj].subregion);
        console.log("populations = ", data[obj].population);
    }
}
greet("------------------------- printing country name, flag, subregion, region, population=-----------------------");

greet("----------------- checking both object are same----------------------------------");
let obj1 = {
    name: "Person 1",
    age: 5,
    isMarried: true
}
let obj2={
    age: 5,
    name: "Person 1",
    isMarried: true
}
let key1 = Object.keys(obj1);
let key2 = Object.keys(obj2);
let count = 0
let size = 0
if(key1.length==key2.length){
    size = key1.length;
    for(var i=0; i<key1.length; i++){
        for(var j=0; j<key2.length; j++){
            if(obj1[key1[i]]==obj2[key2[j]]){
                count++
            }
        }
    }
}
else{
    size = key2.length;
}
if(count === size){
    console.log("both are same");
}
else{
    console.log("both are different");
}

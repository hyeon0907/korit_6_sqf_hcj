let names = ["김준일", "김준이", "김준삼"];

console.log(names);

names = names.map(name => {return name + "님"});
console.log(names);

//names = names.filter(name => {return name === "김준이님"});
names = names.filter((names, index) => index !== 1;);
console.log(names);
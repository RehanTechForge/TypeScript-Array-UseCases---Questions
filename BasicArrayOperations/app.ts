const fruits: string[] = ["apple", "mango", "banana"]

fruits.push("orange") //output ["apple", "mango", "banana","orange"]
fruits.shift(); //output ["mango", "banana","orange"]
fruits.unshift("grapes");//output ["grapes", "mango", "banana","orange"]
fruits.splice(2, 1);//output ["grapes", "mango","orange"]

console.log(fruits);

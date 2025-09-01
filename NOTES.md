## JavaScript Array Notes

Below are some commonly used array methods in JavaScript.

---

## JavaScript Object Notes

### 1. Creating Objects
```js
let obj = { name: "Alice", age: 25 };
```

### 2. Accessing Properties
```js
console.log(obj.name); // "Alice"
console.log(obj["age"]); // 25
```

### 3. Adding/Updating Properties
```js
obj.city = "New York";
obj.age = 26;
```

### 4. Deleting Properties
```js
delete obj.city;
```

### 5. Object.keys(), Object.values(), Object.entries()
```js
let keys = Object.keys(obj); // ["name", "age"]
let values = Object.values(obj); // ["Alice", 26]
let entries = Object.entries(obj); // [["name", "Alice"], ["age", 26]]
```

### 6. Looping Through Objects
```js
for (let key in obj) {
    console.log(key, obj[key]);
}
```

### 7. Object.assign()
```js
let obj2 = { country: "USA" };
let merged = Object.assign({}, obj, obj2);
// { name: "Alice", age: 26, country: "USA" }
```

### 8. Object Destructuring
```js
let { name, age } = obj;
```

---

## Object Sort

Sorting an array of objects by a property:
```js
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 }
];
users.sort((a, b) => a.age - b.age);
// [{ name: "Bob", age: 22 }, { name: "Alice", age: 25 }]
```

---

## DOM Manipulation in JavaScript

---

## DOM Manipulation Notes

### 1. Selecting Elements
```js
let el = document.getElementById("myId");
let els = document.querySelectorAll(".myClass");
```

### 2. Changing Content
```js
el.textContent = "Hello, World!";
el.innerHTML = "<strong>Hello</strong>";
```

### 3. Changing Styles
```js
el.style.color = "red";
```

### 4. Adding/Removing Classes
```js
el.classList.add("active");
el.classList.remove("active");
```

### 5. Creating and Appending Elements
```js
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);
```

### 6. Event Listeners
```js
el.addEventListener("click", function() {
    alert("Clicked!");
});
```

## 1. `push()`
Adds one or more elements to the end of an array.
```js
let arr = [1, 2];
arr.push(3); // [1, 2, 3]
```

## 2. `pop()`
Removes the last element from an array.
```js
let arr = [1, 2, 3];
arr.pop(); // [1, 2]
```

## 3. `shift()`
Removes the first element from an array.
```js
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
```

## 4. `unshift()`
Adds one or more elements to the beginning of an array.
```js
let arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
```

## 5. `concat()`
Merges two or more arrays.
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2); // [1, 2, 3, 4]
```

## 6. `join()`
Joins all elements of an array into a string.
```js
let arr = [1, 2, 3];
arr.join('-'); // "1-2-3"
```

## 7. `slice()`
Returns a shallow copy of a portion of an array.
```js
let arr = [1, 2, 3, 4];
arr.slice(1, 3); // [2, 3]
```

## 8. `splice()`
Adds/removes elements from an array.
```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2); // [2, 3], arr is now [1, 4]
```

## 9. `forEach()`
Executes a function for each array element.
```js
[1, 2, 3].forEach(x => console.log(x));
```

## 10. `map()`
Creates a new array with the results of calling a function on every element.
```js
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2); // [2, 4, 6]
```

## 11. `filter()`
Creates a new array with elements that pass a test.
```js
let arr = [1, 2, 3, 4];
let even = arr.filter(x => x % 2 === 0); // [2, 4]
```

## 12. `reduce()`
Reduces the array to a single value.
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, x) => acc + x, 0); // 10
```

## 13. `find()`
Returns the first element that satisfies a condition.
```js
let arr = [1, 2, 3, 4];
let found = arr.find(x => x > 2); // 3
```

## 14. `findIndex()`
Returns the index of the first element that satisfies a condition.
```js
let arr = [1, 2, 3, 4];
let idx = arr.findIndex(x => x > 2); // 2
```

## 15. `includes()`
Checks if an array contains a certain value.
```js
let arr = [1, 2, 3];
arr.includes(2); // true
```

## 16. `sort()`
Sorts the elements of an array.
```js
let arr = [3, 1, 2];
arr.sort(); // [1, 2, 3]
```

## 17. `reverse()`
Reverses the order of the elements in an array.
```js
let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```
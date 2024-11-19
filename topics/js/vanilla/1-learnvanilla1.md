# Vanilla JavaScript Data Types

## Idea:
In JavaScript, data types are the classification of different types of data that can be used in a program. There are primitive data types (such as numbers, strings, and booleans) and reference data types (such as objects and arrays). Understanding these data types is crucial for handling data effectively and avoiding errors in your code.

### Primitive Data Types:
- **String**: Represents textual data enclosed in single, double, or backtick quotes.
- **Number**: Represents both integer and floating-point numbers.
- **Boolean**: Represents true or false values.
- **Undefined**: Represents a variable that has been declared but not assigned a value.
- **Null**: Represents the absence of a value or a non-existent object.
- **Symbol** (ES6+): Represents a unique and immutable value.
- **BigInt** (ES11+): Represents large integers.

### Reference Data Types:
- **Object**: A collection of key-value pairs.
- **Array**: A special type of object used to store ordered collections.

## Task:
### Scenario: 
You are developing a simple employee management system for a company. The system should be able to store employee data, including their names, ages, departments, and employment status (active/inactive). Your task is to create a JavaScript function that processes this employee data using different JavaScript data types.

#### Instructions:
1. Create an object `employee` that contains:
   - **Name**: a string representing the employee's full name.
   - **Age**: a number representing the employee's age.
   - **Department**: a string representing the department the employee works in.
   - **Status**: a boolean representing whether the employee is active (`true`) or inactive (`false`).

2. Write a function `employeeInfo` that takes the `employee` object as input and returns a string summarizing the employee's information. The string should be formatted like this:

   "Employee [Name], Age: [Age], Department: [Department], Active: [Status]"

3. Test the function with different employee data.

## Test Cases:

### Test Case 1:

**Input**

```javascript
const employee1 = { name: 'John Doe', age: 30, department: 'Engineering', status: true }; employeeInfo(employee1); 
```

**Output**

```js 
"Employee John Doe, Age: 30, Department: Engineering, Active: true" 
```

### Test Case 2:

**Input** 
```javascript 
const employee2 = { name: 'Jane Smith', age: 25, department: 'Marketing', status: false }; employeeInfo(employee2); 
```

**Output** 
```js 
"Employee Jane Smith, Age: 25, Department: Marketing, Active: false" 
```

### Test Case 3:

**Input**
```javascript 
const employee3 = { name: 'Mike Johnson', age: 40, department: 'Sales', status: true }; employeeInfo(employee3); 
```

**Output** 
```js 
"Employee Mike Johnson, Age: 40, Department: Sales, Active: true" 
```

## Solution:

```javascript
// Function to process and display employee information
function employeeInfo(employee) {
  return `Employee ${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Active: ${employee.status}`;
}

// Test the function with different employee data

const employee1 = {
  name: 'John Doe',
  age: 30,
  department: 'Engineering',
  status: true
};
console.log(employeeInfo(employee1)); // Output: "Employee John Doe, Age: 30, Department: Engineering, Active: true"

const employee2 = {
  name: 'Jane Smith',
  age: 25,
  department: 'Marketing',
  status: false
};
console.log(employeeInfo(employee2)); // Output: "Employee Jane Smith, Age: 25, Department: Marketing, Active: false"

const employee3 = {
  name: 'Mike Johnson',
  age: 40,
  department: 'Sales',
  status: true
};
console.log(employeeInfo(employee3)); // Output: "Employee Mike Johnson, Age: 40, Department: Sales, Active: true"

// QUESTION 1 - Flatten 2D Array
/* 
function flattenArray(twoDArray) {
    const result = [];

    for (let i = 0; i < twoDArray.length; i++) {
        const inner = twoDArray[i];

        for (let j = 0; j < inner.length; j++) {
            result.push(inner[j]);
        }
    }
    return result;
}

// Example
console.log(flattenArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] */


// QUESTION 2 - Shared Elements Between 3 Arrays
/* function sharedElements(arr1, arr2, arr3) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        let item = arr1[i];

        if (arr2.includes(item) && arr3.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

// Example
console.log(sharedElements([1, 2, 3, 4], [3, 4, 5], [3, 4, 5, 6]));
// Output: [3, 4] */


/* // QUESTION 3 - Unique Elements Without Set or Filter
function uniqueElements(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
 */

/* function uniqueElements(arr) {
    const unique = [];

    for (let i = 0; i < arr.length; i++) {
        let exists = false;

        // check if value already exists inside unique[]
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

// Example
console.log(uniqueElements([1, 3, 2, 3, 4, 5, 4, 2, 5, 6]));
// Output: [1, 3, 2, 4, 5, 6] */



function kebabToCamel(str) {
    const parts = str.split("-");
    let camel = parts[0];  // keep first word as it is

    for (let i = 1; i < parts.length; i++) {
        let word = parts[i];
        camel += word.charAt(0).toUpperCase() + word.slice(1);
    }

    return camel;
}

// Example
console.log(kebabToCamel("hello-there"));
// Output: helloThere
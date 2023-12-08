function doubleValues(array) {
    let newArray = [];
    array.forEach(function (val) {
        newArray.push(val * 2);
    });
    return newArray
}

function onlyEventValues(array) {
    let newArray = [];
    array.forEach(function (val) {
        if (val % 2 === 0) {
            newArray.push(val);
        }
    });
    return newArray;
}

function showFirstAndLast(array) {
    let newArray = [];
    array.forEach(function (val) {
        newArray.push(val[0] + val[val.length - 1]);
    });
}

function addKeyAndValue(array, key, value) {
    let newArray = [];
    array.forEach(function (val) {
        val[key] = value;
    });
    return array;
}

function vowelCount(stri) {
    let splArr = stri.split("");
    let obj = {};
    const vowels = "aeiou";

    splArr.forEach(function (letter) {
        let lowerCase = letter.toLowerCase();
        if (vowels.indexOf(lowerCase) !== -1) {
            if (obj[lowerCase]) {
                obj[lowerCase]++;
            } else {
                obj[lowerCase] = 1;
            }
        }
    });
    return obj;
}

function doubleValuesWithMap(array) {
    return array.map(function (value) {
        return value * 2;
    });
}

function valTimesIndex(array) {
    return array.map(function (value, idx){
        return value * idx;
    });
}

function extractKey(array, key) {
    return array.map(function (value) {
        return value[key];
    });
}

function extractFullName(array) {
    return array.map(function (value) {
        return value.first + "" + value.last;
    });
}

function filterByValue(array, key) {
    return array.filter(function (value) {
        return value[key] !== undefined;
    });
}

function find(array, searchValue) {
    return array.filter(function (value) {
        return val === searchValue;
    })[0];
}

function filterByValue(array, key, searchValue) {
    return array.filter(function (value) {
        return value[key] === searchValue;
    });
}

function removeVowels(string) {
    const vowels = "aeiou";
    return string.toLowerCase.split("").filter(function (value) {
        return vowels.indexOf(value) === -1;
    }).join("");
}

function doubleOddNumbers(array) {
    return array.filter(function (value) {
        return value % 2 !== 0;
    }).map(function (value) {
        return value * 2;
    });
}

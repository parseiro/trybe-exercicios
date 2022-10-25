const conversion = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
};

const conversionTest = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    XI: 11,
    XII: 12,
    XIII: 13,
    XL: 40,
    L: 50,
    LII: 52,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
    MCMXCIX: 1999,
    MM: 2000,
    MMXVIII: 2018,
    MMM: 3000,
    MMMI: 3001,
    MMMCMXCIX: 3999
};

function convertRomanToArabicDeep(romanString) {
    // console.log(`Pediram para converter ${romanString}`);

    const initialLength = romanString.length;
    let processed = 0;
    let arabic;

    // console.log(`Tentando converter ${romanString} (${initialLength} characters) to arabic`)
    if (initialLength >= 3
        && romanString[0] === romanString[1]
        && romanString[0] === romanString[2]) {
        arabic = 3 * conversion[romanString[0]];
        processed = 3;
    } else if (initialLength >= 2
        && romanString[0] === romanString[1]
    ) {
        arabic = 2 * conversion[romanString[0]];
        processed = 2;
    } else if (initialLength >= 2
        && !!(arabic = conversion[romanString.slice(0, 2)])
    ) {
        processed = 2;
    } else {
        // nope, this is (hopefully) a 1-digit number
        const roman = romanString.slice(0, 1);
        arabic = +conversion[roman] ?? 0;
        processed = 1;
    }

    if (processed === 0) {
        console.log(`Falhei em converter ${romanString} para numero`);
    }

    const remaining = initialLength - processed;
    if (remaining === 0) return arabic;
    else return arabic + convertRomanToArabicDeep(romanString.slice(processed));
}

console.log(`Starting unit tests`);

for (const roman in conversionTest) {
    const arabic = +convertRomanToArabicDeep(roman);
    if (arabic !== conversionTest[roman]) {
        console.log(`Error converting ${roman} to ${conversionTest[roman]} (got ${arabic})`);
    }
    else console.log(`${roman} was converted to ${arabic}`);
}

// const romanNumber = "III";
// const arabicNumber = convertRomanToArabicDeep(romanNumber);

// console.log(`The Roman number ${romanNumber} was converted to ${arabicNumber}`);

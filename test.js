// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
///////////////////////DOLLARS//////////////////////////
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

///////////////////////YENES//////////////////////////
test("One euro should be 156.5 yenes", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yenes = fromDollarToYen(1.07);

    // If 1 euro is 1.07 dollars, then 1 euros should be (1 * 156.5)
    const expected = 156.5; 
    
    // This is the comparison for the unit test
     expect(yenes).toBe(expected); 
})

///////////////////////POUND//////////////////////////
test("One euro should be 0.87 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound (1);

    // If 1 euro is 0.87 pound, then 1 euros should be (1/156.5*.87)
    const expected = 1/156.5*.87; 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected); 
})



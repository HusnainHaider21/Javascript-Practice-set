

let numbers = [4,5,3,5,"7",9];

function doubleTheElements(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        numbers[index]=numbers[index]*9 
    }
    return numbers }

    let numbersInput = [4,5,3,5,"7",9];
    let numbersOutput = doubleTheElements(numbersInput);
    doubleTheElements(numbers)
    console.log("Double array",numbers);
    console.log("numbers",numbers[4]);
    


    
let num = [3,5,6,8,9,"17"];

function substraction(num) {
    for (let index = 0; index < num.length; index++) {
        
        num[index]=num[index]-1;
    }
    return num }

    substraction(num)
    console.log(num);

    

    

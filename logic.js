function numero(){
    let n = Math.floor(Math.random() * 28);
    document.getElementById("cont_cat").innerHTML = n;
    console.log(n);
}


const numbers = [4, 2, 5, 13, 3];

numbers.sort((a, b) => a - b);

console.log(numbers)
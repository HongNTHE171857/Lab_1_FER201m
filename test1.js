document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var input = document.getElementById('myInput').value;
    var numbers = input.split(' ').map(Number);
    var min = Math.min(...numbers);
    var max = Math.max(...numbers);
    var sum = numbers.reduce((a, b) => a + b, 0);
    var primes = numbers.filter(isPrime);

    var outputDiv = document.getElementById('root');

    if (isNaN(min) || isNaN(sum)) {
        outputDiv.innerHTML = 'input string does not present positive integer numbers';
    } else {
        outputDiv.innerHTML = 'Max: ' + max +'<br>'+ 'Min: ' + min + '<br>'+ 'Sum: ' + sum +'<br>' + 'Primes: ' + primes;
    }
});

function isPrime(num) {
    for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if (num % i === 0) return false;
    return num > 1;
}

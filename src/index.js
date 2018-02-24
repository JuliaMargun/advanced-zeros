module.exports = function getZerosCount(number, base) {
  var primeNumbers = [251,241,239,233,229,227,223,211,199,197,193,191,181,179,173,167,163,157,151,149,139,137,131,127,113,109,107,103,101,97,89,83,79,73,71,67,61,59,53,47,43,41,37,31,29,23,19,17,13,11,7,5,3,2]
  var countOfPrimeNumbersInNumber = [];
  var countOfPrimeNumbersInBase = [];
  var primeNumbersInBase = [];
  for (var i = 0; i < 54; ++i) {
  	var count = 0;
  	while (base >= primeNumbers[i] && base % primeNumbers[i] == 0) {
  		++count;
  		base /= primeNumbers[i];
  	}

  	if (count != 0) {
  		primeNumbersInBase.push(primeNumbers[i]);
  		countOfPrimeNumbersInBase.push(count);
  	}
  }

  for(var k = 0; k < primeNumbersInBase.length; ++k) {
  	count = 0;
	i = primeNumbersInBase[k];
  	while(i <= number) {
  		count += Math.trunc(number / i)
  		i *= primeNumbersInBase[k];
  	}
  	countOfPrimeNumbersInNumber.push(count);
  }
  	
  for (i = 0; i < countOfPrimeNumbersInNumber.length; i++) {
  	countOfPrimeNumbersInNumber[i] = Math.floor(countOfPrimeNumbersInNumber[i] / countOfPrimeNumbersInBase[i]);
  }

  countOfPrimeNumbersInNumber.sort((a,b) => a - b);

  return countOfPrimeNumbersInNumber[0];

}
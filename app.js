const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  //// .filter for inventors born in the 1500s
  const oldInventors = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)); 
//   console.table(oldInventors); 

  //// .map an array of inventors first and last names
  const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last)
//   console.log(fullNames); 

  //// .sort inventors by birthdate, oldest to youngest (lowest birth year to highest birth year)
  const ascendingAge = inventors.sort(function(a, b) {
      if (a.year > b.year) {
          return 1; // if A year is bigger than B year, move it down the list ('right')
      } else {
          return -1; // if A is smaller than B, move it up the list ('left')
      }
  }); 
  console.table(ascendingAge); 

  //// same .sort as above, but with ternary: 
  //// the ternary says: "if a.year is greater than b.year return one, else return -1"
  const descendingAgeTernary = inventors.sort((a,b) => a.year > b.year ? 1 : -1); 
//   console.table(descendingAgeTernary)

  //// .reduce - sum o the years the inventors lived 
  const yearsLived = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year); 
  }, 0); 
//   console.log(yearsLived);

  //// .sort inventors by years they were alive, longest living to shortest living (largest gap to shortest gap)
  
  const oldest = inventors.sort(function(a, b){
      const personA = a.passed - a.year;
      const personB = b.passed - b.year;
      if (personA > personB) {
            return -1; // if A is older, move them higher on the list ('left')
      } else {
          return 1; // if A is younger, move them lower on the list ('right')
      }
  }); 
  console.table(oldest); 



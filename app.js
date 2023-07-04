const Countries = require('./src/model/countries');
const data = require('./data').data;

const countries = new Countries(data)

const args = process.argv.slice(2);
const filterArgs = args.filter(arg => arg.startsWith('--filter='));
const countArg = args.filter(arg => arg.startsWith('--count'));


if (filterArgs.length > 0) {
    const filterValue = filterArgs[0].substring('--filter='.length);
    countries.filterAnimals(filterValue)
    console.dir(countries.toJson(),{depth:null});
}
else if (countArg.length >0){
    countries.countPeoples()
    console.dir(countries.toJson(),{depth:null});
}

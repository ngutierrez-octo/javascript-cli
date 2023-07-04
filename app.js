const Countries = require("./src/model/countries");
const data = require("./src/data").data;

const countries = new Countries(data)

const args = process.argv.slice(2);
const filterArgs = args.filter(arg => arg.startsWith('--filter='));

if (filterArgs.length > 0) {
    const filterValue = filterArgs[0].substring('--filter='.length);
    console.dir(countries.filterByAnimals(filterValue),{depth:null});

} else {
    console.log('No filter value provided');
}

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');


const csvFilePath = path.join(__dirname, 'input_countries.csv');
const canadaFilePath = path.join(__dirname, 'canada.txt');
const usaFilePath = path.join(__dirname, 'usa.txt');

if (fs.existsSync(canadaFilePath)) fs.unlinkSync(canadaFilePath);
if (fs.existsSync(usaFilePath)) fs.unlinkSync(usaFilePath);

const writeCanadaStream = fs.createWriteStream(canadaFilePath);
const writeUSAStream = fs.createWriteStream(usaFilePath);

writeCanadaStream.write('country,year,population\n');
writeUSAStream.write('country,year,population\n');

fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country;
        const year = row.year;
        const population = row.population;

        if (country === 'Canada') {
            writeCanadaStream.write(`${country},${year},${population}\n`);
        } else if (country === 'United States') {
            writeUSAStream.write(`${country},${year},${population}\n`);
        }
    })
    .on('end', () => {
        writeCanadaStream.end(); 
        writeUSAStream.end();
    });

const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
console.log(myInstruments);

myInstruments.push("tuba");
myInstruments.push("bassoon");
myInstruments.splice(2, 1);
myInstruments.unshift("saxophone");

/**
 * @param {string []} instruments an array of instruments
 * @returns {string} the first instrument
 */
function getFirstInstrument(instruments) {
  return instruments[0];
}
let firstInstument = getFirstInstrument(myInstruments);
console.log(firstInstument);

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the last instrument
 */
function getLastInstrument(instruments) {
  return instruments[instruments.length - 1];
}
let lastInstrument = getLastInstrument(myInstruments);
console.log(lastInstrument);

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string[]} the first and last instruments
 */
function getFirstAndLastInstruments(instruments) {
  const output = [];
  output.push(instruments[0]);
  output.push(instruments[instruments.length - 1]);
  return output;
}

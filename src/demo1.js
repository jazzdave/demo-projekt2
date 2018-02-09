
function first() {

  let pivo = {
    bublinky: 'ano',
    slad: 'ne',
    psenicni: 'ano',
    chmel: 'ne',
    };



  const pivo2 = {
    lahvove: 'ano',
    tocene: 'ne',

  };
  pivo = pivo2;
  console.log('pivo', pivo.lahvove )

}



export function second(someText, someNumber) {

const result = `${someText}  -- ${someNumber}`;

return result;

}



export default first;

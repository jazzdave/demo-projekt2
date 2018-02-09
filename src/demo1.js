
function first() {
  const anonymniFunkce = (element, key) => {
    console.log('ahoj', element);
  };
  const pivo3 = 'pivo3';
  const pole = [ [0,1,2,3], 'pivo2', pivo3];
  pole.forEach( anonymniFunkce );

  //pole.forEach ( );

}



export function second(someText, someNumber) {

const result = `${someText}  -- ${someNumber}`;

return result;

}



export default first;

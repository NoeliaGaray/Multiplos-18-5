let a,b:number=0

a = Number(prompt("Ingrese primer número:"));
b = Number(prompt("Ingrese segundo número:"));

function esMultiplo(a:number,b:number):boolean{
  return (a%b===0 === true|| (((a%b)>=1)===false));
};
console.log(a,'Es multiplo de:',b,'?', esMultiplo(a , b));

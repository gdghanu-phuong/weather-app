export function convertTemp(mainTemp: number){
    const temp = Number.parseFloat((mainTemp - 273.15).toFixed());
    return temp;
  }
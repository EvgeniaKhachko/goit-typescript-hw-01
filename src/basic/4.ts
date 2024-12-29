function showMessage(message: string): void {
    console.log(message);
  }
  showMessage('Hello, Hello!!!');

  function calc(num1 :number, num2:number): number {
    return num1 + num2;
  }
  const result = calc(5, 5);
console.log(result);

  function customError(): never {
    throw new Error(`Error`);
  }
  customError();
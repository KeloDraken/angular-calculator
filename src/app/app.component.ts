import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public result: string = '';
  public currentExpression = '0';

  public addInput(value: string) {
    this.result !== '0' ? (this.result += value) : (this.result = value);
    this.currentExpression = this.result;
  }

  public calculate() {
    const operators = ['+', '-', '×', '÷'];
    let leftOperand = '';
    let rightOperand = '';
    let operator = '';

    // Parse the input into the left operand, operator, and right operand
    for (let i = 0; i < this.result.length; i++) {
      if (operators.includes(this.result[i])) {
        operator = this.result[i];
        leftOperand = this.result.slice(0, i);
        rightOperand = this.result.slice(i + 1);
        break;
      }
    }

    const num1 = parseFloat(leftOperand);
    const num2 = parseFloat(rightOperand);
    let answer;

    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '×':
        answer = num1 * num2;
        break;
      case '÷':
        answer = num1 / num2;
        break;
      default:
        return;
    }

    if (isNaN(answer)) {
      alert('Invalid expression');
      return;
    }
    this.result = answer.toString();
  }

  public deleteChar(): void {
    this.currentExpression = this.currentExpression.substring(
      0,
      this.currentExpression.length - 1
    );
  }
  public clear(): void {
    this.currentExpression = '';
    this.result = '0';
  }
}

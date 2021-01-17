import { Component, OnInit } from '@angular/core';
import { Count, HistoryModel } from 'src/app/model/history.model';

@Component({
  selector: 'app-bulls-cows',
  templateUrl: './bulls-cows.component.html',
  styleUrls: ['./bulls-cows.component.scss']
})
export class BullsCowsComponent implements OnInit {

  constructor() { }

  generatedNumber: string;
  userHistory: HistoryModel[] = [];
  success: boolean;

  ngOnInit(): void {
    this.generatedNumber = this.generateRandonNumber();
  }

  generateRandomDigit() {
    return `${Math.floor(Math.random() * 10)}`;
  }

  generateRandonNumber() {
    let newNumber = '';
    for (let i = 0; i < 4; i++) {
      let newDigit = this.generateRandomDigit();
      while (newNumber.includes(newDigit)) {
        newDigit = this.generateRandomDigit();
      }
      newNumber += newDigit;
    }
    return newNumber;
  }

  userInputValue(value: string) {
    this.compareNumbers(this.generatedNumber, value);
  }

  compareNumbers(generatedNumber: string, enteredNumber: string) {
    const generatedNumberArry = generatedNumber.split('');
    const enteredNumberArry = enteredNumber.split('');
    const count: Count = {
      bulls: 0,
      cows: 0,
    };

    for (let i = 0; i < 4; i++) {
      if (generatedNumberArry[i] === enteredNumberArry[i]) {
        count.bulls++;
      } else if (
        enteredNumberArry.find((item) => generatedNumber[i] === item) !=
        undefined
      ) {
        count.cows++;
      }
    }

    // add to history
    const itemHistory: HistoryModel = {
      enteredNumber: enteredNumber,
      count: count,
    };

    if (!this.success) {
      this.userHistory = [...this.userHistory, itemHistory];
    }
    //display congratualtion on success
    if (itemHistory.count.bulls === 4) {
      this.success = true;
    }
  }

  reset() {
    this.generatedNumber = this.generateRandonNumber();
    this.userHistory = [];
    this.success = false;
  }
}

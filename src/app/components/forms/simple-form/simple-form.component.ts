import { Component } from '@angular/core';

@Component({
    selector: 'app-simple-form',
    templateUrl: './simple-form.component.html',
    styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {
    public step: number;

    constructor() {
        this.step = 0;
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

}

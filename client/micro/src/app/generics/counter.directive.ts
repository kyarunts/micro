import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[bbdCounter]'
})
export class CounterDirective implements OnInit {
    @Input('bbdCounter') bbdCounter: any;
    @Input('maxNumber') maxNumber: number;
    @Input('time') time: number;
    
    private countDown: any;
    public counter: number = 0;
    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.countDown = setInterval(() => {
            this.el.nativeElement.innerText = this.counter;
            this.counter = this.counter + 1;
            if (this.counter === this.maxNumber) {
                this.el.nativeElement.innerText = this.counter + "+";
                clearInterval(this.countDown);
            }
        }, this.time * 1000 / this.maxNumber);
    }
}
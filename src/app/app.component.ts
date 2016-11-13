import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    formSingle: FormGroup;
    multipleSingle: boolean = false;
    optionsSingle: Array<any> = [];
    alternativeOptionsSingle: Array<any> = [];
    initialValueSingle: string = '22';
    allowClear: boolean = true;

    formMultiple: FormGroup;
    multipleMultiple: boolean = true;
    optionsMultiple: Array<any> = [];
    alternativeOptionsMultiple: Array<any> = [];
    initialValueMultiple: Array<string> = ['0', '2', '22', '66'];
    
    opts;
    alternativeOpts;

    @ViewChild('singleSelectComponent') singleSelectComponent;
    @ViewChild('multipleSelectComponent') multipleSelectComponent;

    @ViewChild('preSingle') preSingle;
    @ViewChild('preMultiple') preMultiple;

    logSingleString: string = '';
    logMultipleString: string = '';

    constructor() {

        let numOptions = 100;
        this.opts = new Array(numOptions);

        for (let i = 0; i < numOptions; i++) {
            this.opts[i] = {
                value: i.toString(),
                label: i.toString()
            };
        }

        this.alternativeOpts = [{
            value: '0',
            label: '0'
        }, {
            value: '1',
            label: '1'
        }, {
            value: 'A',
            label: 'A'
        }, {
            value: 'B',
            label: 'B'
        }]

        this.optionsSingle = this.opts.slice(0);
        this.optionsMultiple = this.opts.slice(0);
    }

    ngOnInit() {
        this.formSingle = new FormGroup({});
        this.formSingle.addControl('selectSingle', 
                new FormControl(this.initialValueSingle));

        this.formMultiple = new FormGroup({});
        this.formMultiple.addControl('selectMultiple', 
                new FormControl(this.initialValueMultiple));
    }

    onSingleOpened() {
        this.logSingle('- opened');
    }

    onSingleClosed() {
        this.logSingle('- closed');
    }

    onSingleSelected(item) {
        this.logSingle('- selected (value: ' + item.value  + ', label:' + 
                       item.label + ')');
    }

    onSingleDeselected(item) {
        this.logSingle('- deselected (value: ' + item.value  + ', label:' + 
                       item.label + ')');
    }

    onMultipleOpened() {
        this.logMultiple('- opened');
    }

    onMultipleClosed() {
        this.logMultiple('- closed');
    }

    onMultipleSelected(item) {
        this.logMultiple('- selected (value: ' + item.value  + ', label:' + 
                       item.label + ')');
    }

    onMultipleDeselected(item) {
        this.logMultiple('- deselected (value: ' + item.value  + ', label:' + 
                       item.label + ')');
    }

    onSingleResetClick() {
        this.formSingle.reset();
    }

    onMultipleResetClick() {
        this.formMultiple.reset();
    }

    onMultipleSetOptions1Click() {
        this.optionsMultiple = this.alternativeOpts.slice(0);
    }

    private logSingle(msg: string) {
        this.logSingleString += msg + '\n';
        
        // Let change detection do its work before scrolling to div bottom.
        setTimeout(() => {
            this.scrollToBottom(this.preSingle.nativeElement);
        });
    }

    private logMultiple(msg: string) {
        this.logMultipleString += msg + '\n';

        // Let change detection do its work before scrolling to div bottom.
        setTimeout(() => {
            this.scrollToBottom(this.preMultiple.nativeElement);
        });
    }

    private scrollToBottom(elem) {
        elem.scrollTop = elem.scrollHeight;
    }
}


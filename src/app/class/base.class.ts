import { Component, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorService } from '../services/service.index';

@Component({
    selector: 'app-name',
    template: ''
})
export abstract class Base implements OnDestroy {

    public loading: boolean = true;
    public errorMessage: string = null;
    public subMsg: Subscription;

    constructor(
        public _error: ErrorService,
        public ngZone: NgZone
    ) {
        this.subMsg = this._error.errorMessage.subscribe (
            (response:any) => {
                this.ngZone.run( () => {
                this.errorMessage = response.error.msg;
                });
            }
            );
    }

    abstract ngOnDestroy(): void

    public clearErrorMessage($event) {
        this.errorMessage = null;
    }

}

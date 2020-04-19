import { Component, OnDestroy, NgZone } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ErrorService } from '../services/service.index';


@Component({
    selector: 'app-name',
    template: ''
})
export abstract class Base implements OnDestroy {

    public loading: boolean = false;
    public errorMessage: string = null;
    public subMsg$: Subscription;
    public spin$:Subject<boolean> = new Subject<boolean>();

    constructor(
        public _error: ErrorService,
        public ngZone: NgZone
    ) {

        this.subMsg$ = this._error.getError().subscribe (
            (response:any) => {

                this.ngZone.run( () => {
                    this.errorMessage = response.error.msg;
                });
            }
        );

    }

    abstract ngOnDestroy(): void //implementar unsubscribe

    public clearErrorMessage($event) {
        this.errorMessage = null;
        //this.errMsg$ = of (null);
    }

    public spin () {
        this.loading = true;

    }

    public unSpin () {
        this.spin$.next ( false );
        this.loading = false;
    }

}

import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html'
})
export class MainNavComponent implements OnInit {
    public isOpened: boolean;
    public toggleSideMenu: boolean;

    @ViewChild('drawer') sideNav: MatSidenav;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver) {
        this.isOpened = false;
        this.toggleSideMenu = false;
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.sideNav.openedStart.subscribe(
            (() => this.isOpened = true)
        )
        this.sideNav.openedChange.subscribe(
            (res => {
                this.isOpened = res
                console.log(this.toggleSideMenu);
            })
        );

    }
}

/*
@Input() openedChange: EventEmitter<any>;

constructor() {
    this.isOpened = true;
}


ngOnInit(): void {
    this.openedChange.subscribe(
        (res => this.isOpened = res)
    );
}
*/
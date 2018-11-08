import { Component, ViewChild, OnInit, EventEmitter } from '@angular/core';
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
    public toggleSideMenu$: EventEmitter<boolean>;

    @ViewChild('drawer') sideNav: MatSidenav;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver) {
        this.isOpened = false;
        this.toggleSideMenu = false;
        this.toggleSideMenu$ = new EventEmitter(this.toggleSideMenu);
    }

    ngOnInit(): void {
        this.sideNav.openedStart.subscribe(
            (() => this.isOpened = true)
        )

        this.sideNav.openedChange.subscribe(
            (res => this.isOpened = res)
        );

        this.toggleSideMenu$.subscribe(
            (res => this.toggleSideMenu = res)
        );
    }
}

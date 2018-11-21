import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { BreadCrumb } from './breadcrumb.interface';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

    public pageInfo: BreadCrumb;

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
    ) {
        // Default pageInfo
        this.pageInfo = {
            title: '',
            icon: '',
            urls: [],
        };

        this.router.events
            .pipe(filter(
                event => event instanceof NavigationEnd))
            .pipe(map(
                () => this.activeRoute))
            .pipe(map(
                route => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }))
            .pipe(filter(
                route => route.outlet === 'primary'))
            .pipe(mergeMap(
                route => route.data))
            .subscribe(
                (event: BreadCrumb) => {
                    this.pageInfo = event;
                });
    }
}

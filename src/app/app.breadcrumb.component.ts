import { Component, OnDestroy } from '@angular/core';
import { AppBreadcrumbService } from './app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app.breadcrumb.component.html',
    styleUrls: ['./app.breadcrumb.component.scss']
})
export class AppBreadcrumbComponent implements OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    constructor(public breadcrumbService: AppBreadcrumbService) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            console.log('response', response);
            
            this.items = response;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

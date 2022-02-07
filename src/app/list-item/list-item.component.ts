import { Item } from './../common/item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router, UrlTree } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AppBreadcrumbService } from '../app.breadcrumb.service';
import { ItemsService } from '../service/items.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  // urlTree:UrlTree;
  query:string | null = '';
  private unsubscribe$ = new Subject<void>();

  items:Item[] = [];
  showSpinner:boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: AppBreadcrumbService,
    private itemsService: ItemsService) {
    
   }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
      this.query = params.get('q') !== null ? params.get('q') : '';
      this.itemsService.get(`items/?q=${this.query}`).subscribe({
        next: (res:any) => {
          this.items = res.items;
          this.showSpinner = false;
          let breadcrumbs: MenuItem[] | { label: any; }[] = [];
          res.categories.forEach((element: any) => {
            const itemBreadcrumb = { label: element };
            breadcrumbs.push(itemBreadcrumb)
          });
          this.breadcrumbService.setItems(breadcrumbs);
          localStorage.setItem('breadCrumbs', JSON.stringify(breadcrumbs));
        },
        error: (err) => {
            console.log(err);
        },
        complete: () => {  },
      });
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };

  goToDetail(idItem:string){
    this.router.navigate(['/items', idItem]);
  };

}

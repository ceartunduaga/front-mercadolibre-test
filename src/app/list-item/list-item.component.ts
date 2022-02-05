import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router, UrlTree } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AppBreadcrumbService } from '../app.breadcrumb.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  urlTree:UrlTree;
  query:string;
  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router,private route: ActivatedRoute,private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
        { label: 'Ui Kit' },
        { label: 'Charts', routerLink: ['/uikit/charts'] }
    ]);
   }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
      console.log(params.get('q'));
      this.query = params.get('q');
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  goToDetail(idItem:string){

    this.router.navigate(['/items', idItem]);
  }0

}

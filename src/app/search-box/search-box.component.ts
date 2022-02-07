import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppBreadcrumbService } from '../app.breadcrumb.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  search:string | null = '';
  private unsubscribe$ = new Subject<void>();
  
  constructor(private router: Router,
              private route: ActivatedRoute, 
              private breadcrumbService: AppBreadcrumbService,
              ) { 
      }

  ngOnInit(): void {
    this.breadcrumbService.setItems([]);
    this.route.queryParamMap.pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
      this.search = params.get('q') !== null ? params.get('q') : '';
    });
  }

  searchItem(){
    const search = this.search;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate(['items'], { queryParams: { q: search }}));
    this.breadcrumbService.setItems([]);
  }
  resetBreadcrumb(){
    this.breadcrumbService.setItems([]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  search = '';
  private unsubscribe$ = new Subject<void>();
  
  constructor(private router: Router,
              private route: ActivatedRoute, 
              ) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
      console.log(params.get('q'));
      this.search = params.get('q') ? params.get('q') : '';
    });
  }

  searchItem(){
    console.log('search');
    this.router.navigate(['items'], { queryParams: { q: this.search }});
      
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

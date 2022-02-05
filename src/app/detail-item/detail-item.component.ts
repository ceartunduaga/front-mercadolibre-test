import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppBreadcrumbService } from '../app.breadcrumb.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  constructor(private route: ActivatedRoute,private breadcrumbService: AppBreadcrumbService) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.breadcrumbService.setItems([
        { label: 'Ui Kit' },
        { label: 'Charts', routerLink: ['/uikit/charts'] }
    ]);
   }

  ngOnInit(): void {
  }

}

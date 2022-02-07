import { MenuItem } from 'primeng/api';
import { Item } from './../common/item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppBreadcrumbService } from '../app.breadcrumb.service';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  itemId:string| null = ''
  item:Item = {
    condition: '',
    free_shipping: false,
    id: '',
    picture: '',
    price: {
      amount: 0,
      currency: '',
      decimals: 0
    },
    title: ''
  };
  showSpinner:boolean = true;
  breadCrumbs:MenuItem[] = [];

  constructor(private route: ActivatedRoute,
    private breadcrumbService: AppBreadcrumbService,
    private itemsService: ItemsService) {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.breadCrumbs = JSON.parse(localStorage.getItem('breadCrumbs') as string) ;
   }

  ngOnInit(): void {
    this.itemsService.get(`items/${this.itemId}`).subscribe({
      next: (res:any) => {
        this.item = res.item;
        this.showSpinner = false
        const newBreadcrumb = { label: res.item.title }
        this.breadCrumbs.push(newBreadcrumb)
        this.breadcrumbService.setItems(this.breadCrumbs);
      },
      error: (err) => {
          console.log(err);
      },
      complete: () => {  },
    });
  }

}

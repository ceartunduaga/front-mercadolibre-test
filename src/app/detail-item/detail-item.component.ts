import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  constructor(private route: ActivatedRoute,) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
  }

}

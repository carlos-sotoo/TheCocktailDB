import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsObj } from 'src/app/models/detailsobj.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-body-details',
  templateUrl: './body-details.component.html',
  styleUrls: ['./body-details.component.css']
})
export class BodyDetailsComponent implements OnInit {
  drinkDetails: DetailsObj | null = null;
  productId: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
    this.llenarData()
  }

  llenarData() {
    this.apiService.getDetails(this.productId).subscribe(data => {
      this.drinkDetails = data
    })
}




  }

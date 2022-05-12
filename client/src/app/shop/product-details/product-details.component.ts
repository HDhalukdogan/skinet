import { IProduct } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct

  constructor(private shopService: ShopService, private activiteRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+this.activiteRoute.snapshot.paramMap.get('id')).subscribe(product => {//parseInt() or +
      this.product = product;
    }, error => {
      console.log(error);
    });
  }

}

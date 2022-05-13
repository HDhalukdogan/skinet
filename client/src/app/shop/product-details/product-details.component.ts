import { IProduct } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct

  constructor(private shopService: ShopService, private activiteRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    this.bcService.set('@productDetails', ' ')
   }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+this.activiteRoute.snapshot.paramMap.get('id')).subscribe(product => {//parseInt() or +
      this.product = product;
      this.bcService.set('@productDetails', product.name)
    }, error => {
      console.log(error);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Products } from '../../assets/list product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  products = Products;
  gia = 50;
  
  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

}

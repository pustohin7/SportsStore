import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductRepository} from '../../model/product.repository';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor(private repository: ProductRepository) {
  }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }

  ngOnInit(): void {
  }

}

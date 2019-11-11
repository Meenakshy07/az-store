import { Component, OnInit } from '@angular/core';
import { ProductlistService} from '../services/productlist.service';
@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrls: ['./productcomponent.component.css']
})
export class ProductcomponentComponent implements OnInit {
Products;
  constructor(public productservice:ProductlistService) {
   this.Products=this.productservice.getproducts();
   }
 
  ngOnInit() {
    
  }

}



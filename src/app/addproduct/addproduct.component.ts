import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ProductlistService } from './../services/productlist.service'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm:FormGroup;

  constructor(private _productlistService : ProductlistService) { }

  ngOnInit() {
    this.myForm=new FormGroup({
      name: new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(10)]),
        price: new FormControl('',[Validators.required,Validators.pattern(/[0-9]/)]),
        image: new FormControl('',Validators.maxLength(500)),
       description: new FormControl('',[Validators.required,Validators.maxLength(100)]),
       isAvailable: new FormControl('',[Validators.pattern(/[true|false]/),Validators.required])
    });
   
  }

  onSubmit() {
    console.log(this.myForm.value);
    if(this.myForm.valid){
      this._productlistService.addProduct(this.myForm.value);

    }
    else{
      alert("Empty field");
    }
 
  }
  
}

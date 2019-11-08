import { Component, OnInit } from '@angular/core';
import {Product} from '../model/productinterface';
@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrls: ['./productcomponent.component.css']
})
export class ProductcomponentComponent implements OnInit {

  constructor() { }
  Products :Array <Product> = [
    {
    name:'Wall paper' ,
       image:'',
       imageAlt:'https://rukminim1.flixcart.com/image/612/612/k12go7k0/sticker/f/u/n/wall-stickers-wallpaper-bathroom-waterproof-toilet-decoration-original-imafknv55tz7dgwa.jpeg?q=70',
       isAvailable: true,
        description:'Ready to stick Wallpaper',
        price: 150,
  },
  
  {
    name:'Mickey Mouse toy' ,
       image:'',
       imageAlt:'data:image/jpeg;base64,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',
       isAvailable: true,
        description:'This toy resembles the universally popular Disney cartoon character Mickey Mouse.',
        price: 250,
  },
  {
    name:'Baby dress' ,
       image:'',
       imageAlt:'data:image/jpeg;base64,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',
       isAvailable: true,
        description:'perfect for new borns',
        price: 350,
  },
  {
    name:'Baby girl shoe' ,
       image:'',
       imageAlt:'https://my-test-11.slatic.net/p/d415d55b7e95b986d602574ac537cea8.jpg',
       isAvailable: true,
        description:'kids shoe for 18 months and below',
        price: 500,
  },
]
  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import {Product} from '../model/productinterface';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor() { }
  private Products :Array <Product> = [
    {
    name:'Wall paper' ,
       
       image:'https://i.ebayimg.com/images/g/0wAAAOSwsixcb6Tz/s-l400.jpg',
       isAvailable: true,
        description:'Ready to stick Wallpaper',
        price: 150,
  },
  
  {
    name:'Mickey Mouse toy' ,
      
       image:'https://rukminim1.flixcart.com/image/704/704/j7xngy80/stuffed-toy/u/k/t/mickey-mouse-jumbo-soft-toy-3-feet-height-50-sajani-original-imaexxyeqmkdkj28.jpeg?q=70',
       isAvailable: true,
        description:'This toy resembles the universally popular Disney cartoon character Mickey Mouse.',
        price: 250,
  },
  {
    name:'Baby dress' ,
      
       image:'https://www.next.co.uk/nxtcms/resource/image/1881916/portrait_ratio1x1/525/525/36fbe2cff1ce31b1bdf1de1d730c7788/Sq/unisex.jpg',
       isAvailable: true,
        description:'Perfect for new borns',
        price:  350,
  },
  {
    name:'Baby girl shoe' ,
       
       image:'https://my-test-11.slatic.net/p/d415d55b7e95b986d602574ac537cea8.jpg',
       isAvailable: true,
        description:'Kids shoe for 18 months and below',
        price: 500,
  },
  {
    name:'Watch' ,
       
       image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-PtAPb2QgGbUwnMFzPoOQFDxh9dFgftuBFUtCiIpEx-b4KjBr3GiUqUUoaU5mOTdNWPMrSJUI7NqlzrU46Rb5GGqcdZL9mnRQYZ28-g2G_B6k_h1SEESY&usqp=CAc',
       isAvailable: false,
        description:'Kids Watch',
        price: 500,
  },
  {
    name:'Backpack' ,
       
       image:'https://img.ltwebstatic.com/images2_pi/2019/01/02/1546413696289118836_thumbnail_600x799.webp',
       isAvailable: true,
        description:'Kidsbags',
        price: 600,
  },
  {
    name:'Sunglasses' ,
       
       image:'https://img.ltwebstatic.com/images3_pi/2019/10/17/1571300194c1620526fd30eaeab6d3a67601aa0fbc_thumbnail_600x.webp',
       isAvailable: false,
        description:'Sunglasses for kids',
        price: 700,
  },

]
  getproducts(){
    
  return this.Products;
  }

  addProduct(obj){
    this.Products.push(obj);
    return this.Products;
  }

}


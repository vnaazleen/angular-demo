import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor() { 
    this.products = [
      {
          productId: 1,
          productName: "2020 Apple MacBook Air",
          price: "₹83,900.00",
          description: "13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB SSD - Silver",
          imagePath: "./assets/macbook-air.jpg"
      },
      {
        productId: 2,
        productName: "2020 Apple iPad Air",
        price: "₹46,900.00",
        description: "A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Grey (4th Generation)",
        imagePath: "./assets/ipad.jpg"
      },
      {
        productId: 3,
        productName: "2020 Apple MacBook Pro",
        price: "₹1,09,900.00",
        description: "14-inch/35.97 cm, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD - Space Grey",
        imagePath: "./assets/macbook-pro.jpg"
      }
    ];
  }

  ngOnInit(): void {
  }

}

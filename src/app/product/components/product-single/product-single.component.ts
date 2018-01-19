import { Component, OnInit,Input,ViewChild,ElementRef,HostListener } from '@angular/core';
import {
    DomSanitizer,
    SafeStyle
} from '@angular/platform-browser';
@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {
@Input() product;
image;
@ViewChild('overlay') overlay:ElementRef;


@HostListener('mouseover',['$event'])
showOverlay(e){
	this.overlay.nativeElement.style.top = '50%';
}

@HostListener('mouseout',['$event'])
hideOverlay(e){
	this.overlay.nativeElement.style.top = '150%';
}
  constructor(private sanitization:DomSanitizer) { }

  ngOnInit() {
  	this.image = this.sanitization.bypassSecurityTrustStyle(`url(${this.product.picture})`);
  }

}

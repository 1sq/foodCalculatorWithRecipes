import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home-menu-item',
  templateUrl: './home-menu-item.component.html',
  styleUrls: ['./home-menu-item.component.scss']
})
export class HomeMenuItemComponent implements OnInit {
@Input() item;
  constructor() { }

  ngOnInit() {
  }

}

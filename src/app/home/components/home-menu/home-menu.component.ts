import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
@Input() items;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  @Input() facebook!: string;
  @Input() twitter!: string;
  @Input() instagram!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

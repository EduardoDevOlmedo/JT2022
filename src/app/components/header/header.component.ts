import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() title = capitalize(
    window.location.href.split('')
    .splice(window.location.href.split('').lastIndexOf('/') + 1, window.location.href.split('').length)
    .join('')
  );

  constructor() { }

  ngOnInit() {}

}

const capitalize = (str: string) =>  str.slice(0, 1).toLocaleUpperCase() + str.slice(1);





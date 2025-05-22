import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgStyle],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public pageTitle = 'Welcome to Coco Motors Sales';

}

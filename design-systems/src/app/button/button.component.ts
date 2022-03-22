import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public label: string = 'Button label';
  @Input() public bgColor: string = '#0085fc';
  @Input() public fontSize: number = 13;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-optioncard',
  templateUrl: './optioncard.component.html',
  styleUrls: ['./optioncard.component.scss']
})
export class OptioncardComponent implements OnInit {

  active:string = '';
  @Input()
  public set selected(value: boolean) {
    this.active = (value) ? 'item-active' : '';
  }
  @Input() icono:string = '';
  @Input() titulo:string = '';
  @Input() footerText:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

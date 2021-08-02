import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoUrl:string = "https://www.bancodeoccidente.com.co/wps/wcm/connect/banco-de-occidente/72d87a09-c3c6-4ee2-8bd6-4b865ebc32c2/logo-h.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_PQ441IO0LGGB20ANDOHIQE20P6-72d87a09-c3c6-4ee2-8bd6-4b865ebc32c2-nD4b5wd";
  @Input() userImg:string = '';
  @Input() userNombre:string = '';
  @Input() userCargo:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

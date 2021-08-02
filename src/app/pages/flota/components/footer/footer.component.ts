import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logoUrl:string = "data:image/png;base64,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";

  constructor() { }

  ngOnInit(): void {
  }

}

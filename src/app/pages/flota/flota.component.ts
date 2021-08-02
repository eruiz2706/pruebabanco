import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Flota } from 'src/app/models/flota.model';
import { FlotasService } from 'src/app/services/flotas/flotas.service';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrls: ['./flota.component.scss']
})
export class FlotaComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  flota!: Flota;
  userLogo:string = "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80";
  userCargo:string = "Gerente de Relacion";
  nit:string = "800220154";

  
  constructor(
    private flotasService : FlotasService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {

    this.flotasService.getFlota(this.nit)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((flota)=>{
      this.flota = flota;
    },(err)=>{
      console.log("error");
    });

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

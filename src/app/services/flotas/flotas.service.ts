import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Flota } from 'src/app/models/flota.model';
import { IFlotaService } from './flotas.interface.service';

@Injectable({
  providedIn: 'root'
})
export class FlotasService implements IFlotaService{

  constructor(
    private http: HttpClient
  ) { }

  public getFlota(nit:string): Observable<Flota> {
    const URL = `${environment.API_URL}/flotas`;
    return this.http.get<Flota>(URL);
  }
}

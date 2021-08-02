import { Observable } from "rxjs";
import { Flota } from "src/app/models/flota.model";

export interface IFlotaService{

    getFlota(nit:string): Observable<Flota>;
    
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enivornments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class QRMenuCodeService {

  constructor(private http: HttpClient) { }

  fetchEstablishmentData(establishmentId : number): Observable<any>{
    return this.http.get(`${environment.apiUrl}/Establishment/GetAllDataLinkedToEstablishment/`+establishmentId, {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
  }
}
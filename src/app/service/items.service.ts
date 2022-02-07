import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  get(serviceName: string) {
    const url =  environment.api + serviceName;
    console.log('url',url);
    
    return this.http.get(url);
  }
}

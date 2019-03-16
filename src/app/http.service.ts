import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:3000/api/v1/docs'
  constructor(private _http:HttpClient) { }

  getClientData = () => {
    return this._http.get(`${this.baseUrl}/client`);
  }

  getSampleData = () => {
    return this._http.get(`${this.baseUrl}/sg`);
  }
}

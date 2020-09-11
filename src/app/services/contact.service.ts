
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactUrl = 'https://localhost:44369/api/Contact/SendMessage';
  // contactUrl = 'http://inspirecodeclub-001-site1.ftempurl.com/api/Contact/SendMessage';
  httpOptions = {
    headers: new HttpHeaders({  'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  get(slug: string): Observable<any> {
    return this.http.get<any>(`${this.contactUrl}/${slug}`);
  }

  postContact( data: any): Observable<any> {
    return this.http.post(
      this.contactUrl,
      data,
      this.httpOptions
    );
}
}

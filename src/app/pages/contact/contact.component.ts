import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactUrl:string = 'http://inspirecodeclub-001-site1.ftempurl.com/api/Contact/SendMessage';
  httpOptions = {
    headers: new HttpHeaders({  'Content-Type': 'application/json' }),
    
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data): void{
    this.http.post(this.contactUrl, data, this.httpOptions)
    .subscribe((result)=>{
      console.warn('result', result)
    })
console.warn(data);
  }
}

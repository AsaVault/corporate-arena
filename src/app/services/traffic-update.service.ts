import { Injectable } from '@angular/core';
import { TrafficUpdate, Comment, CommentRequest } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrafficUpdateService {
  trafficUpdateUrl = 'https://localhost:44340/trafficupdate';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getAll(): Observable<TrafficUpdate[]> {
    return this.http.get<TrafficUpdate[]>(this.trafficUpdateUrl);
  }

  getBySlug(slug: string): Observable<TrafficUpdate> {
    return this.http.get<TrafficUpdate>(`${this.trafficUpdateUrl}/${slug}`);
  }

  postComment(id: number, data: CommentRequest): Observable<Comment> {
    return this.http.post<Comment>(
      `${this.trafficUpdateUrl}/${id}/comment`,
      data,
      this.httpOptions
    );
  }
}

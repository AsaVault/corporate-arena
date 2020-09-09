import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrainTeaser, Comment, CommentRequest } from '../models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BrainTeaserService {
  brainTeaserUrl = 'https://localhost:44340/brainteaser';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<BrainTeaser[]> {
    return this.http.get<BrainTeaser[]>(this.brainTeaserUrl);
  }

  postComment(id: number, data: CommentRequest): Observable<Comment> {
    return this.http.post<Comment>(
      `${this.brainTeaserUrl}/${id}/comment`,
      data,
      this.httpOptions
    );
  }
}

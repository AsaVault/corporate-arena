import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog, Comment, CommentRequest } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogUrl = 'https://localhost:44340/article';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl);
  }

  get(slug: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.blogUrl}/${slug}`);
  }

  postComment(id: number, data: CommentRequest): Observable<Comment> {
    return this.http.post<Comment>(
      `${this.blogUrl}/${id}/comment`,
      data,
      this.httpOptions
    );
  }
}

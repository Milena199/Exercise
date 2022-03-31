import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comments, Post } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }
  // createPost(post: Post): Observable<any> {
  //   return this.http.post("/api/posts", post);
  // }
  createComment(comment: Comment): Observable<any> {
    return this.http.post('api/comments', comment)
  }
  getComments(postId: number): Observable<any> {
    const params = new HttpParams().set('postId', postId)
    return this.http.get('api/comments', { params })
  }
  delete(id: number): Observable<any> {
    return this.http.delete('api/comments/' + id)
  }
  getPost(id: number): Observable<any> {
    return this.http.get('/api/posts/' + id)
  }
 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  // getPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  //   // return this.http.get<Post[]>(`https://localhost:8000/posts`);

  //   return of([{ id: 1, title: 'tiltee', body: 'body' }])
  // }
}

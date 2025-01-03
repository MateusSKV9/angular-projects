import { Injectable } from '@angular/core';

import { Response } from '../../Response';
import { Comment } from '../../Comment';
import { enverionment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private basaApiUrl = enverionment.baseApiUrl;
  private apiUrl = `${this.basaApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  createComment(data: Comment): Observable<Response<Comment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Comment>>(url, data);
  }
}

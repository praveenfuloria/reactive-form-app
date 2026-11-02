import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class UsernameService {
  private http: HttpClient = inject(HttpClient);

  checkAvailability(username: string): Observable<{ available: boolean }> {
    return this.http.get<{ available: boolean }>(
      `http://localhost:3000/api/check-username?username=${username}`,
    );
  }
}

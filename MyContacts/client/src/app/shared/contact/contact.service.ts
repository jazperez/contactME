import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContactService {
  public API = '//localhost:7070';
  public CONTACT_API = this.API + '/contacts';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/work-contacts');
  }

  get(id: string) {
    return this.http.get(this.CONTACT_API + '/' + id);
  }

  save(contact: any): Observable<any> {
    let result: Observable<any>;
    if (contact.href) {
      result = this.http.put(contact.href, contact);
    } else {
      result = this.http.post(this.CONTACT_API, contact);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
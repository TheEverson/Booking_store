import { injectable } from '@angular.core';
import { HttCllient, HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@injectable()
export class BookService {
    private url = "google.com"

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    getBook() {
        return this.http.get(this.url)
    }

}

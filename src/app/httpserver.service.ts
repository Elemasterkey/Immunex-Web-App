// http service

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { anything } from './interfaces';
import { Observable } from 'rxjs';
// import { PlaceholderValuesService } from "./placeholder-values.service";

@Injectable({
  providedIn: 'root'
})
export class HttpserverService {

  constructor(private http: HttpClient) { }

// ********* // 

  // GET REQUESTS

    // getSomething(): Observable<anything[]>{
    //   return this.http.get<anything[]>('./getlink');
    // };


// ********** //

  // POST REQUESTS

    // attempt login
    loguserin(filebody): Observable<anything[]>{

      return this.http.post<anything[]>('./api/loginNow', filebody);

    };

    // attempt acc creation

    createaccin(filebody): Observable<anything[]>{

      return this.http.post<anything[]>('./api/createAcc', filebody);

    };

    createFacAcc(filebody): Observable<anything[]>{

      return this.http.post<anything[]>('./api/createFacAcc', filebody);

    };

// ********* //

}


import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sector} from "./servers/servers.component";

const API = 'http://localhost:8080/mywork/api';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private http: HttpClient) { }

  getAllAreas() {
      return this.http
          .get<Sector[]>(API + '/area');
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = environment.apiUrl + '/employee';
  constructor(private http: HttpClient) {
    
   }
  getEmployees():Observable<Employee[]>{
     {
      return this.http.get<Employee[]>(this.apiUrl);
     }
    
}

createEmployee(employee:Employee):Observable<Employee>{
  return this.http.post<Employee>(this.apiUrl,employee);
}
deleteEmployee(id:number):Observable<void>{
  const url=`${this.apiUrl}/${id}`;
  return this.http.delete<void>(url);
}
}
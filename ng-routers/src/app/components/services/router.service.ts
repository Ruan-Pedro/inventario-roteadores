import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { RouterData} from '../views/management/router.model'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  baseUrl = "http://192.168.0.111:5050/api"
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private route:Router
  ) { }   

  showMSG(msg:string):void{
    this.snackBar.open(msg, 'close', {
      duration:5000,
      horizontalPosition:'end',
      verticalPosition:'top'
    })
  }

  create(routerData:RouterData): Observable<RouterData> {
    console.log(`${this.baseUrl}/insertrouter`)
    console.log(routerData)
    return this.http.post<RouterData>(`${this.baseUrl}/insertrouter`, routerData)
  }

  read():Observable<RouterData[]>{
    return this.http.get<RouterData[]>(`${this.baseUrl}/all`)
  }
  
  deleteItem(id:Number):Observable<Number>{
    const urlDel = `${this.baseUrl}/deleterouter/${id}`
    console.log(urlDel);
    this.route.navigate(['/management'])
    return this.http.delete<Number>(urlDel)

  }
}



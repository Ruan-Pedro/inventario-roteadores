import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { RouterData} from '../views/management/router.model'
@Injectable({
  providedIn: 'root'
})
export class RouterService {
  baseUrl = "http://192.168.0.111:5050/api"
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMSG(msg:string):void{
    this.snackBar.open(msg, 'close', {
      duration:5000,
      horizontalPosition:'end',
      verticalPosition:'top'
    })
  }

  create(router:RouterData): Observable<RouterData> {
    console.log(`${this.baseUrl}/new`)
    console.log(router)
    return this.http.post<RouterData>(`${this.baseUrl}/new`, router)
  }

  read():Observable<RouterData[]>{
    return this.http.get<RouterData[]>(`${this.baseUrl}/all`)
  }
}



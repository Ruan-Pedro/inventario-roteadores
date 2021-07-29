import { DialogPopupdelComponent } from './../dialog-popupdel/dialog-popupdel.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { RouterData} from '../views/management/router.model'
 import { RouterDataDel } from './../views/management/routerDel.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  baseUrl = "http://192.168.0.111:5050/api"
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

    openDialog(){
      const dialogConfig = new MatDialogConfig()
      dialogConfig.width = '35%'
      dialogConfig.height = '35%',
      dialogConfig.backdropClass = "bdrop",
      dialogConfig.position = {
        'top':'15%',
        'right':'450px'
      }
      this.dialog.open(DialogPopupdelComponent, dialogConfig)
    }

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
    alert('Tem certeza?')
    const urlDel = `${this.baseUrl}/deleterouter/${id}`
    console.log(urlDel);
    return this.http.delete<Number>(urlDel)
  }
}



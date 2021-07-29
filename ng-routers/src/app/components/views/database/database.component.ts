import { DialogPopupdelComponent } from './../../dialog-popupdel/dialog-popupdel.component';
import { RouterDataDel } from './../management/routerDel.model';
import { RouterService } from '../../services/router.service';
import { Component, OnInit } from '@angular/core';
import { RouterData } from '../management/router.model'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  
  routerDataDel: RouterDataDel = {
    id:null
  }

  routerDatas: RouterData[]
  constructor(
    private RouterService:RouterService,
  ) {  }

  ngOnInit(): void {
    this.RouterService.read().subscribe( routerDatas=>{
      this.routerDatas = routerDatas
      console.log(routerDatas)
    } )
  }
  openDialog():void{
    this.RouterService.openDialog()
  }

  deleteLine(id_router): void{
    this.RouterService.deleteItem(id_router).subscribe(()=>{
      console.log(id_router)
      this.RouterService.showMSG(`Item ${id_router} Deletado com sucesso!`)
    })
  }
}

import { RouterService } from './../../router/router.service';
import { Component, OnInit } from '@angular/core';
import { RouterData } from '../management/router.model'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  routerDatas: RouterData[]
  constructor(
    private RouterService:RouterService
  ) { }

  ngOnInit(): void {
    this.RouterService.read().subscribe( routerDatas=>{
      this.routerDatas = routerDatas
      console.log(routerDatas)
    } )
  }

}

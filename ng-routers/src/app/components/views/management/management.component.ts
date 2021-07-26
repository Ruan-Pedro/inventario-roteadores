import { RouterService } from '../../services/router.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RouterData } from './router.model';
 
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  

  //tentativa de usar material select
  routerData: RouterData = {
    name:'',
    fabricante:'',
    garantia:'',
    suporte:'',
    justificativa:'',
  }

  constructor(
    private route: Router,
    private RouterService: RouterService
  ) { 
    
  }

  ngOnInit(): void {
    
  }
  showCreatedRouter():void{
    this.RouterService.create(this.routerData).subscribe((s)=>{
      console.log(s);
      this.RouterService.showMSG('Roteador Adcionado com sucesso!')

    }, (e)=> console.log(e))
  }
  
  propLegal = "fonzera!"
  teste():void{
    console.log('funcionou? XD')
     fetch("http://192.168.0.111:5050/api/all").then(res=>{
       return res.json()
     }).then(json=>{
       console.log(json)
     })
  }
  

}

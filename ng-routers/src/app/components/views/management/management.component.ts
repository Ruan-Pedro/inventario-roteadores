import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  
  //tentativa de usar material select
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
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

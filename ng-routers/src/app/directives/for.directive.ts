import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[forListTemplate]'
})
export class ForDirective implements OnInit{

  @Input('forListTemplateIn') numbers: number[]
  @Input('forListTemplateProduct') texto: string

  constructor() { 
    
   }
  ngOnInit(): void {
    console.log(this.numbers)
    console.log(this.texto)

  }
}

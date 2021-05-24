import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appApp]'
})
export class AppDirective {

  constructor(private el:ElementRef) { }

  @HostBinding('style.margin') margin:string = '200px';

  @HostListener('click',['$event'])
  onClick(e:Event){
    console.log(this.el.nativeElement.getBoundingClientRect());
  }

}

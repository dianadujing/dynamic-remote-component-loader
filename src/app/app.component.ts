import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef, Compiler} from '@angular/core';
import {Observable} from 'rxjs/Rx';
declare var System:any;

@Component({
  selector: 'my-app',
  template: `
    <h2>Above</h2>
    <div #putStuffHere></div>
    <h2>Below</h2>
  `
})
export class AppComponent {
  @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere: ViewContainerRef;
  private cfr:any;

  constructor(
      public compiler: Compiler
  ){
  }

  ngAfterViewInit(){
    
    const url = 'https://gist.githubusercontent.com/dianadujing/a7bbbf191349182e1d459286dba0282f/raw/c23281f8c5fabb10ab9d144489316919e4233d11/app.module.ts';
    console.log(System.import(url));
    
    const importer = (url:any) => Observable.fromPromise(System.import(url));
    console.log('importer:', importer);
    importer(url)
      .subscribe((modules) => {
        console.log('modules:', modules, modules['AppModule']);
        this.cfr = this.compiler.compileModuleAndAllComponentsSync(modules['AppModule']);
        console.log(this.cfr,',', this.cfr.componentFactories[0]);
        this.putStuffHere.createComponent(this.cfr.componentFactories[0], 0);
      });
    
    
  }
}

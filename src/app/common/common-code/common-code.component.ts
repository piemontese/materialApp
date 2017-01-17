import { Component, Input, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-common-code',
  templateUrl: './common-code.component.html',
  styleUrls: ['./common-code.component.scss']
})
export class CommonCodeComponent implements OnInit {
  @Input() codeUrl: string;
  @Input() code: Array<string> = [];
  node: string = '';

  constructor( private http: Http, public element: ElementRef ) { 
      this.element.nativeElement // <- your direct element reference 
  }

  ngOnInit() {
      /*
      const responce1$: Observable<Response> = this.http.get(this.baseUrl + this.tab1);
                                               // .map( (res:Response) => res.json());
      responce1$.subscribe(
        code1 => console.log(code1),
        () => {},
        () => console.log('completed!')
      );
      */
      
      let str: string = '';
      for( let i=0; i<this.codeUrl.length; i++ ) {
        this.code = [];
        this.http.request(this.codeUrl).subscribe(
          response => str = response.text(),
          () => {},
          () => this.code = str./*replace(/ /g, "&nbsp;").*/split("\n")
        );
      }

      for( let i=0; i<this.code.length; i++ ) {
          this.node += this.code[i];
      }
      console.log(this.node);

      let el = this.element.nativeElement;
//    el.append('<p>new<p>');
    console.log(el);
//    el.getElementById('code');
  }

  ngAfterContentInit() {
    const tmp = document.createElement('div');
    const elm = this.element.nativeElement.cloneNode(true);

    tmp.appendChild(elm);
/*
    let str: string = '';
    for( let i=0; i<this.codeUrl.length; i++ ) {
      this.code = [];
      this.http.request(this.codeUrl).subscribe(
        response => str = response.text(),
        () => {},
        () => this.code = str.replace(/ /g, "&nbsp;").split("\n")
      );
    }
*/
//    this.node = tmp.innerHTML;
  }

}

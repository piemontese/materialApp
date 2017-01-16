import { Component, Input, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-common-tabs',
  templateUrl: './common-tabs.component.html',
  styleUrls: ['./common-tabs.component.css']
})
export class CommonTabsComponent implements OnInit {
  @Input() tabs: Array<any>;
  @Input() codeUrls: Array<string>;

  codes: Array<Array<string>> = [];

  constructor( private http: Http ) { 
  }

  onClick( index:number ) {
    console.log('onClick( ' + index + ' )');  
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
    for( let i=0; i<this.codeUrls.length; i++ ) {
      this.codes[i] = [];
      this.http.request(this.codeUrls[i]).subscribe(
        response => str = response.text(),
        () => {},
        () => this.codes[i] = str./*replace(/ /g, "&nbsp;").*/split("\n")
      );
    }
  }

}


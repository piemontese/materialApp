import { Component, Input, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-common-code',
  templateUrl: './common-code.component.html',
  styleUrls: ['./common-code.component.scss']
})
export class CommonCodeComponent implements OnInit {
  @Input() codeUrl: string;
  @Input() code: Array<string> = [];
  node: string = '';
  requestEnd: boolean = false;
  codeString: string = '';
  copyTooltip: string = 'Copy code';

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
      let headers = new Headers();
      headers.append('Content-Type', 'text');
      headers.append('Access-Control-Allow-Origin', '*');
      this.copyTooltip = 'Copy code';
      this.requestEnd = false;
      let str: string = '';
      for( let i=0; i<this.codeUrl.length; i++ ) {
        this.code = [];
        this.http.get(this.codeUrl, headers)
//          .timeout(1)
          .catch(this.handleError)
          .subscribe( response => str = response.text(),
              () => {},
              () => { this.code = str./*replace(/ /g, "&nbsp;").*/split("\n"); 
                      this.requestEnd = true; 
                      this.codeString = '';
                      this.codeString = '\n' + str;
                    }
        ),  (errorResponse: any) => { 
                console.log('timeout error') 
            };
      }

      let el = this.element.nativeElement;
//    el.append('<p>new<p>');
    console.log(el);
//    el.getElementById('code');
  }

  private handleError (error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
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

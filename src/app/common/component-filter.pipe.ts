import { Pipe, PipeTransform } from '@angular/core';
//import { MyComponent } from '../app.component';


@Pipe({
  name: 'componentFilter'
})
export class ComponentFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filter = args[0].toLocaleLowerCase();
    //return filter ? value.filter(component=> component.title.toLocaleLowerCase().indexOf(filter) != -1) : value;
    return null;
  }

}

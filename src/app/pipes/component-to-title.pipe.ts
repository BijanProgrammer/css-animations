import {Pipe, PipeTransform, Type} from '@angular/core';
import {AnimationComponent} from '../models/animation-component';

@Pipe({
    name: 'componentToTitle',
})
export class ComponentToTitlePipe implements PipeTransform {
    public transform(component: Type<AnimationComponent>): string {
        return component.name.replace('Component', '');
    }
}

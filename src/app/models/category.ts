import {AnimationComponent} from './animation-component';
import {Type} from '@angular/core';

export class Category {
    public title!: string;
    public animations!: Type<AnimationComponent>[];
}

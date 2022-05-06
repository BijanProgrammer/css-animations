import {Type} from '@angular/core';
import {AnimationComponent} from './animation-component';

export interface CssAnimation {
    title: string;
    component: Type<AnimationComponent>;
}

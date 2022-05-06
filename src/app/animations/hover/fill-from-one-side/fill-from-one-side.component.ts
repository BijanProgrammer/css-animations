import {Component} from '@angular/core';
import {AnimationComponent} from '../../../models/animation-component';

@Component({
    selector: 'animation-hover-fill-from-one-side',
    templateUrl: './fill-from-one-side.component.html',
    styleUrls: ['./fill-from-one-side.component.scss'],
})
export class FillFromOneSideComponent implements AnimationComponent {}

import {Component} from '@angular/core';
import {AnimationComponent} from '../../../models/animation-component';

@Component({
    selector: 'animation-fill',
    templateUrl: './fill.component.html',
    styleUrls: ['./fill.component.scss'],
})
export class FillComponent implements AnimationComponent {}

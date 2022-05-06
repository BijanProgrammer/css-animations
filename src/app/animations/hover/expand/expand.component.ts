import {Component} from '@angular/core';
import {AnimationComponent} from '../../../models/animation-component';

@Component({
    selector: 'animation-hover-expand',
    templateUrl: './expand.component.html',
    styleUrls: ['./expand.component.scss'],
})
export class ExpandComponent implements AnimationComponent {}

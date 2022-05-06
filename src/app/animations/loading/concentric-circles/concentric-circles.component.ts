import {Component, Input} from '@angular/core';
import {AnimationComponent} from '../../../models/animation-component';

@Component({
    selector: 'animation-loading-concentric-circles',
    templateUrl: './concentric-circles.component.html',
    styleUrls: ['./concentric-circles.component.scss'],
})
export class ConcentricCirclesComponent implements AnimationComponent {
    @Input() public count: number = 10;
}

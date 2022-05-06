import {Component, Input} from '@angular/core';
import {AnimationComponent} from '../../../models/animation-component';

@Component({
    selector: 'animation-loading-playful-rope',
    templateUrl: './playful-rope.component.html',
    styleUrls: ['./playful-rope.component.scss'],
})
export class PlayfulRopeComponent implements AnimationComponent {
    @Input() public count: number = 10;
}

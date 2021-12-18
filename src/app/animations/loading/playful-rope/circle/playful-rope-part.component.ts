import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-playful-rope-part',
    templateUrl: './playful-rope-part.component.html',
    styleUrls: ['./playful-rope-part.component.scss'],
})
export class PlayfulRopePartComponent {
    @Input() public count!: number;
}

import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-concentric-circle',
    templateUrl: './concentric-circle.component.html',
    styleUrls: ['./concentric-circle.component.scss'],
})
export class ConcentricCircleComponent {
    @Input() public count!: number;
}

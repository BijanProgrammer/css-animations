import {Component} from '@angular/core';
import {AnimationComponent} from '../../../models/animation-component';

@Component({
    selector: 'animation-hover-blob',
    templateUrl: './blob.component.html',
    styleUrls: ['./blob.component.scss'],
})
export class BlobComponent implements AnimationComponent {}

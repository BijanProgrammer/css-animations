import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConcentricCirclesComponent} from './concentric-circles/concentric-circles.component';
import {ConcentricCircleComponent} from './concentric-circles/circle/concentric-circle.component';
import {PlayfulRopeComponent} from './playful-rope/playful-rope.component';
import {PlayfulRopePartComponent} from './playful-rope/circle/playful-rope-part.component';

@NgModule({
    declarations: [
        ConcentricCirclesComponent,
        ConcentricCircleComponent,
        PlayfulRopeComponent,
        PlayfulRopePartComponent,
    ],
    exports: [ConcentricCirclesComponent, PlayfulRopeComponent],
    imports: [CommonModule],
})
export class LoadingModule {}

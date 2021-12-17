import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConcentricCirclesComponent} from './concentric-circles/concentric-circles.component';
import {CircleComponent} from './concentric-circles/circle/circle.component';

@NgModule({
    declarations: [ConcentricCirclesComponent, CircleComponent],
    exports: [ConcentricCirclesComponent],
    imports: [CommonModule],
})
export class LoadingModule {}

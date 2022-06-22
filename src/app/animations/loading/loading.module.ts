import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConcentricCirclesComponent} from './concentric-circles/concentric-circles.component';
import {ConcentricCircleComponent} from './concentric-circles/circle/concentric-circle.component';
import {PlayfulRopeComponent} from './playful-rope/playful-rope.component';
import {PlayfulRopePartComponent} from './playful-rope/circle/playful-rope-part.component';
import {InfinityParticlesComponent} from './infinity-particles/infinity-particles.component';

@NgModule({
    declarations: [
        ConcentricCirclesComponent,
        ConcentricCircleComponent,
        PlayfulRopeComponent,
        PlayfulRopePartComponent,
        InfinityParticlesComponent,
    ],
    exports: [ConcentricCirclesComponent, PlayfulRopeComponent],
    imports: [CommonModule],
})
export class LoadingModule {}

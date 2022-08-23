import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConcentricCirclesComponent} from './concentric-circles/concentric-circles.component';
import {ConcentricCircleComponent} from './concentric-circles/circle/concentric-circle.component';
import {PlayfulRopeComponent} from './playful-rope/playful-rope.component';
import {PlayfulRopePartComponent} from './playful-rope/circle/playful-rope-part.component';
import {InfinityParticlesComponent} from './infinity-particles/infinity-particles.component';
import {SlicedLoopComponent} from './sliced-loop/sliced-loop.component';
import {TriangularElectronsComponent} from './triangular-electrons/triangular-electrons.component';

@NgModule({
    declarations: [
        ConcentricCirclesComponent,
        ConcentricCircleComponent,
        PlayfulRopeComponent,
        PlayfulRopePartComponent,
        InfinityParticlesComponent,
        SlicedLoopComponent,
        TriangularElectronsComponent,
    ],
    exports: [ConcentricCirclesComponent, PlayfulRopeComponent],
    imports: [CommonModule],
})
export class LoadingModule {}

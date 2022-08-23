import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConcentricCirclesComponent} from './concentric-circles/concentric-circles.component';
import {ConcentricCircleComponent} from './concentric-circles/circle/concentric-circle.component';
import {InfinityParticlesComponent} from './infinity-particles/infinity-particles.component';
import {SlicedLoopComponent} from './sliced-loop/sliced-loop.component';
import {TriangularElectronsComponent} from './triangular-electrons/triangular-electrons.component';

@NgModule({
    declarations: [
        ConcentricCirclesComponent,
        ConcentricCircleComponent,
        InfinityParticlesComponent,
        SlicedLoopComponent,
        TriangularElectronsComponent,
    ],
    exports: [ConcentricCirclesComponent],
    imports: [CommonModule],
})
export class LoadingModule {}

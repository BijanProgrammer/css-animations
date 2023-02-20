import {Component} from '@angular/core';
import {Category} from '../../models/category';
import {NavigationEnd, Router} from '@angular/router';
import {ConcentricCirclesComponent} from '../../animations/loading/concentric-circles/concentric-circles.component';
import {ExpandComponent} from '../../animations/hover/expand/expand.component';
import {FillComponent} from '../../animations/hover/fill/fill.component';
import {FillFromOneSideComponent} from '../../animations/hover/fill-from-one-side/fill-from-one-side.component';
import {FillFromOppositeSideComponent} from '../../animations/hover/fill-from-opposite-side/fill-from-opposite-side.component';
import {NuclearFusionComponent} from '../../animations/hover/nuclear-fusion/nuclear-fusion.component';
import {LiftOffComponent} from '../../animations/hover/lift-off/lift-off.component';
import {BlobComponent} from '../../animations/hover/blob/blob.component';
import {InfinityParticlesComponent} from '../../animations/loading/infinity-particles/infinity-particles.component';
import {SlicedLoopComponent} from '../../animations/loading/sliced-loop/sliced-loop.component';
import {TriangularElectronsComponent} from '../../animations/loading/triangular-electrons/triangular-electrons.component';
import {LowFrameSpinnerComponent} from '../../animations/loading/low-frame-spinner/low-frame-spinner.component';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
    public readonly CATEGORIES: Category[] = [
        {
            title: 'hover',
            animations: [
                {title: 'Expand', component: ExpandComponent},
                {title: 'LiftOff', component: LiftOffComponent},
                {title: 'Fill', component: FillComponent},
                {title: 'FillFromOneSide', component: FillFromOneSideComponent},
                {title: 'FillFromOppositeSide', component: FillFromOppositeSideComponent},
                {title: 'NuclearFusion', component: NuclearFusionComponent},
                {title: 'Blob', component: BlobComponent},
            ],
        },
        {
            title: 'loading',
            animations: [
                {title: 'ConcentricCircles', component: ConcentricCirclesComponent},
                {title: 'InfinityParticles', component: InfinityParticlesComponent},
                {title: 'SlicedLoop', component: SlicedLoopComponent},
                {title: 'TriangularElectrons', component: TriangularElectronsComponent},
                {title: 'LowFrameSpinner', component: LowFrameSpinnerComponent},
            ],
        },
    ];

    public currentRoute!: string[];

    public constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) this.currentRoute = event.urlAfterRedirects.split('/').filter(Boolean);
        });
    }
}

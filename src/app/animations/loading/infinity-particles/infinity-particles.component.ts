import {Component} from '@angular/core';

@Component({
    selector: 'animation-loading-infinity-particles',
    templateUrl: './infinity-particles.component.html',
    styleUrls: ['./infinity-particles.component.scss'],
})
export class InfinityParticlesComponent {
    private readonly COUNT: number = 16;

    public readonly DURATION: number = 2;
    public readonly DELAYS: number[] = Array(this.COUNT)
        .fill(0)
        .map((x, i) => -1 * (this.DURATION / this.COUNT) * Math.floor(i / 2));
}

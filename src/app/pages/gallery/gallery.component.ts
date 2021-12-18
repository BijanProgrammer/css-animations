import {Component} from '@angular/core';
import {Category} from '../../models/category';
import {NavigationEnd, Router} from '@angular/router';
import {ConcentricCirclesComponent} from '../../animations/loading/concentric-circles/concentric-circles.component';
import {PlayfulRopeComponent} from '../../animations/loading/playful-rope/playful-rope.component';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
    public readonly CATEGORIES: Category[] = [
        {
            title: 'hover',
            animations: [],
        },
        {
            title: 'loading',
            animations: [ConcentricCirclesComponent, PlayfulRopeComponent],
        },
    ];

    public currentRoute!: string[];

    public constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) this.currentRoute = event.urlAfterRedirects.split('/').filter(Boolean);
        });
    }
}

import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {ThemeService} from '../../services/theme.service';

import {Theme} from 'src/app/models/theme';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public Theme = Theme;

    public isInHome: boolean = false;
    public noop: boolean = true;

    public constructor(private router: Router, public themeService: ThemeService) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) this.isInHome = event.urlAfterRedirects === '/';
        });
    }
}

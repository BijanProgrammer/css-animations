import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public noop: boolean = true;

    public ngOnInit(): void {
        setTimeout(() => (this.noop = false), 1000);
    }
}

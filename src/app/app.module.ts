import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AnimationsModule} from './animations/animations.module';
import {ComponentsModule} from './components/components.module';
import {PipesModule} from './pipes/pipes.module';
import {PagesModule} from './pages/pages.module';
import {DirectivesModule} from './directives/directives.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AnimationsModule,
        ComponentsModule,
        DirectivesModule,
        PagesModule,
        PipesModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

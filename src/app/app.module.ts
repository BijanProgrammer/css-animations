import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AnimationsModule} from './animations/animations.module';
import {ComponentsModule} from './components/components.module';
import {DirectivesModule} from './directives/directives.module';
import {IconsModule} from './icons/icons.module';
import {LogosModule} from './logos/logos.module';
import {PagesModule} from './pages/pages.module';
import {PipesModule} from './pipes/pipes.module';
import {ServicesModule} from './services/services.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AnimationsModule,
        ComponentsModule,
        DirectivesModule,
        IconsModule,
        LogosModule,
        PagesModule,
        PipesModule,
        ServicesModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

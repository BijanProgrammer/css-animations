import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {AnimationsWrapperComponent} from './gallery/animations-wrapper/animations-wrapper.component';
import {LoadingModule} from '../animations/loading/loading.module';
import {DirectivesModule} from '../directives/directives.module';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    declarations: [HomeComponent, GalleryComponent, NotFoundComponent, AnimationsWrapperComponent],
    imports: [CommonModule, RouterModule, LoadingModule, DirectivesModule, PipesModule],
})
export class PagesModule {}

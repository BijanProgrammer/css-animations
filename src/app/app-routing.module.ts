import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {
        path: 'gallery',
        children: [{path: '**', component: GalleryComponent}],
    },
    {path: '', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

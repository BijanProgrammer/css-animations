import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PipesModule} from '../pipes/pipes.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [ButtonComponent, HeaderComponent, FooterComponent],
    imports: [CommonModule, PipesModule, RouterModule],
    exports: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}

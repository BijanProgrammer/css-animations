import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {HeaderComponent} from './header/header.component';
import {PipesModule} from '../pipes/pipes.module';
import {RouterModule} from '@angular/router';
import {LogosModule} from '../logos/logos.module';
import {IconsModule} from '../icons/icons.module';

@NgModule({
    declarations: [ButtonComponent, HeaderComponent],
    imports: [CommonModule, PipesModule, RouterModule, LogosModule, IconsModule],
    exports: [HeaderComponent],
})
export class ComponentsModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToTitleCasePipe} from './to-title-case.pipe';

@NgModule({
    declarations: [ToTitleCasePipe],
    imports: [CommonModule],
    exports: [ToTitleCasePipe],
})
export class PipesModule {}

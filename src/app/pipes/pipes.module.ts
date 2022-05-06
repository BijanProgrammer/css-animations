import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WordsToTitleCasePipe} from './words-to-title-case.pipe';
import {PascalCaseToTitleCasePipe} from './pascal-case-to-title-case.pipe';
import {ComponentNameToTitleCasePipe} from './component-name-to-title-case.pipe';
import {ComponentToTitlePipe} from './component-to-title.pipe';

@NgModule({
    declarations: [WordsToTitleCasePipe, PascalCaseToTitleCasePipe, ComponentNameToTitleCasePipe, ComponentToTitlePipe],
    imports: [CommonModule],
    exports: [WordsToTitleCasePipe, PascalCaseToTitleCasePipe, ComponentNameToTitleCasePipe, ComponentToTitlePipe],
})
export class PipesModule {}

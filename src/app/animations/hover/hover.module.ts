import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpandComponent} from './expand/expand.component';
import {FillComponent} from './fill/fill.component';
import {FillFromOneSideComponent} from './fill-from-one-side/fill-from-one-side.component';
import {FillFromOppositeSideComponent} from './fill-from-opposite-side/fill-from-opposite-side.component';
import {NuclearFusionComponent} from './nuclear-fusion/nuclear-fusion.component';
import {LiftOffComponent} from './lift-off/lift-off.component';
import {BlobComponent} from './blob/blob.component';

@NgModule({
    declarations: [
        ExpandComponent,
        FillComponent,
        FillFromOneSideComponent,
        FillFromOppositeSideComponent,
        NuclearFusionComponent,
        LiftOffComponent,
        BlobComponent,
    ],
    imports: [CommonModule],
})
export class HoverModule {}

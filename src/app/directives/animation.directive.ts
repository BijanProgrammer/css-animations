import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appAnimation]',
})
export class AnimationDirective {
    public constructor(public viewContainerRef: ViewContainerRef) {}
}

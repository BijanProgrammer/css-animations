import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'toTitleCase',
})
export class ToTitleCasePipe implements PipeTransform {
    public transform(value: unknown, ...args: unknown[]): unknown {
        return null;
    }
}

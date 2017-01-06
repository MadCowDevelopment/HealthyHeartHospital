import { Component, Input } from '@angular/core';
import { Bed } from '../../models/bed';

@Component({
    selector: 'bed-detail',
    templateUrl: 'bed.component.html'
})
export class BedDetail {
    @Input()
    model: Bed;
}

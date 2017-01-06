import { Color } from './color';

export class Bed {
    constructor(color: Color, value: number) {
        this.color = color;
        this.value = value;
    }

    color: Color;
    value: number;
}

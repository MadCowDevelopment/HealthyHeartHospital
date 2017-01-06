import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Bed } from '../../models/bed';
import { Color } from '../../models/color';

@Component({
    selector: 'page-setup',
    templateUrl: 'setup.html'
})
export class SetupPage implements OnInit {

    beds: Bed[] = new Array();

    constructor(public navCtrl: NavController) {
    }

    ngOnInit() {
        let colors = [new Color("yellow", 0), new Color("gray", 1), new Color("green", 2), new Color("red", 3), new Color("blue", 4)];
        var allBeds: Bed[] = new Array();
        colors.forEach(color => {
            for (let value = 2; value < 4; value++) {
                for (let i = 0; i < 4; i++) {
                    allBeds.push(new Bed(color, value))
                }
            }
        });

        for (let i = 0; i < 5; i++) {
            let randomBed = allBeds[Math.floor(Math.random() * allBeds.length)];
            allBeds.splice(allBeds.indexOf(randomBed), 1);
            this.beds.push(randomBed);
        }

        this.beds.sort((a, b) => {
            if (a.color.value === b.color.value) {
                if (a.value === b.value) return 0;
                if (a.value > b.value) return 1;
                else return -1;
            }
            if (a.color.value > b.color.value) return 1;
            else return -1;
        })
    }
}


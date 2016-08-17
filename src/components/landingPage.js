/**
 * Created by Nomad_Mystic on 8/8/2016.
 */

import getURLPromise from '../../build/utils/getPromise';
let Mustache = require('mustache');

export let landingPage = () => {
    // building table for on init load

        let getInitData = () => {
            getURLPromise('/allSets').then((response) => {
                // console.log(response);
                if (response) {
                    buildInitTable(response);
                } else {
                    return false;
                }
            }, (error) => {
                console.error("Failed!", error);
            }); // end getURLPromise

        };

        let buildInitTable = (data) => {
            // console.log(JSON.parse(data));
            // need to parse the data before looping through it
            var allSets = JSON.parse(data);
            console.log(allSets);
            if (allSets) {
                // get table id and init the table string
                let template = document.getElementById('templates').innerHTML;
                Mustache.parse(template);
                let render = Mustache.render(template, allSets);
                let templateResultsDiv = document.getElementById('templateResults');
                templateResultsDiv.innerHTML = render;
                // console.log(render);
            }
        };

    getInitData();
}; // end landingPage();




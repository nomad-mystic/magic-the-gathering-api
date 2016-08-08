/**
 * Created by Nomad_Mystic on 8/8/2016.
 */

import getURLPromise from '../../build/utils/getPromise';

export let landingPage = () => {
    // building table for on init load

        let getInitData = () => {
            getURLPromise('/data').then((response) => {
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
            var parsedData = JSON.parse(data);

            if (parsedData) {
                // get table id and init the table string
                var initBlocksTable = document.getElementById('magicTable');
                var table = '';
                parsedData.blocks.forEach((block) => {
                    console.log(block);

                    table +=
                        `<tr>
                            <td>
                                ${block.name}
                            </td>
                        </tr>
                        `
                });
                initBlocksTable.innerHTML = table;
            }
        };

    getInitData();
}; // end landingPage();


export let testing = (number) => {
    return number - 1;
};




/**
 * Created by Nomad_Mystic on 8/5/2016.
 */



var stub = 'Testing js';

var $ = require('jQuery');
var bootstrap = require('bootstrap');
var getURLPromise = require('../../server/utils/getPromise');

$(function() {

    // $.get('/data', function(data) {
    //     console.log(data);
    //
    // });

    // building table for on init load
    var initializeTable = {
        getInitData: () => {
            // $.ajax({
            //     url: '/data',
            //     dataType: 'json',
            //     method: 'get',
            //     success: (data) => {
            //         // console.log(data);
            //         initializeTable.buildInitTable(data);
            //     },
            //     error: (error) => {
            //         console.log(error)
            //     }
            // });
            getURLPromise('/data').then((response) => {
                // console.log(response);
                initializeTable.buildInitTable(response);
            }, (error) => {
                console.error("Failed!", error);
            }); // end getURLPromise

        },
        buildInitTable: (data) => {
            // console.log(JSON.parse(data));
            // need to parse the data before looping through it
            var parsedData = JSON.parse(data);

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
    }; // end initializeTable
    initializeTable.getInitData();
});






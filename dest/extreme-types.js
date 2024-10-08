"use strict";
let flexible = 4;
flexible = 'bad idea';
flexible = window.document;
flexible = setTimeout;
// warn: no errors
flexible.very.very.bad.idea;
let flexible2 = 4;
flexible2 = 'slightly better';
flexible2 = window.document;
// @ts-ignore note: this will throw an error
flexible2.does.not.work;
function checkUnknown(argument) {
    if (typeof argument === 'string') {
        console.log(argument);
    }
    else if (typeof argument === 'number') {
        console.log('Number ' + argument);
    }
}
flexible2 = 'string';
checkUnknown(flexible2);
flexible2 = 24;
checkUnknown(flexible2);

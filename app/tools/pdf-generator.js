'use strict';

const PDFDocument = require('pdfkit'),
fs = require('fs');


exports.generatePDF = function(profile){
    var doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('pdf/'+profile.familyName+'_profile.pdf'));

    doc.image(profile.selfie,150,100);

    doc.fontSize(25);

    doc.text(profile.givenNames+' '+profile.familyName, 230,420);

    doc.end();

}
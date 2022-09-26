const fs = require('fs');
const Pdfmake = require('pdfmake');

const createInvoicePdf = (orderNo, date, firstName, lastName, street, buildingNumber, flatNumber, zipCode, city, items, totalAmount) => {
    const fonts = {
        Roboto: {
            normal: '../pdf/fonts/Roboto-Regular.ttf',
            bold: '../pdf/fonts/Roboto-Bold.ttf'
        }
    };
    
    const pdfmake = new Pdfmake(fonts);

    const itemsDetails = items.map(item => {
            const oneItem = {
                item: item.name,
                quantity: item.quantity,
                price: item.priceWithPromotion
            }

            return oneItem
    })
    
    const docDefinition = {
        content: [
            {
                style: 'firstSection',
                columns: [
                    {
                        text: 'Navrot Szycie',
                        fontSize: 30
                    },
                    [   
                        {
                            text: `Zamówienie nr ${orderNo}`,
                            bold: true,
                            fontSize: 14
                        },
                        {
                            table: {
                                body: [
                                    ['Data sprzedaży: ', date],
                                    ['Termin płatności: ', date],
                                ]
                            },
                            layout: 'noBorders',
                        },
                    ]
                    
                ]
            },
            {
                style: 'secondSection',
                columns: [
                    [
                        {
                            table: {
                                body: [
                                    [{ 
                                       text: 'Sprzedawca:',
                                       bold: true,
                                       fontSize: 14
                                    }],
                                    ['Navrot Szycie Patrycja Nawrotkiewicz'],
                                    ['ul. Lubińska 46/8'],
                                    ['53-625 Wrocław']
                                ]
                            },
                            layout: 'noBorders',
                        },  
                    ],
                    [
                       {
                            table: {
                                body: [
                                    [{ 
                                       text: 'Nabywca:',
                                       bold: true,
                                       fontSize: 14
                                    }],
                                    [`${firstName} ${lastName}`],
                                    [`${street} ${buildingNumber} ${flatNumber ? flatNumber : null}`],
                                    [`${zipCode} ${city}`],
                                ]
                            },
                            layout: 'noBorders',
                        }, 
                    ]
                ]
            },
            {
                table: {
                    headerRows: 1,
                    widths: ['*', 50, 100, 100],
                    body: [
                          [{text:'Nazwa', style: 'thirdSection'}, {text: 'Ilośc', style: 'thirdSection', alignment: 'right'}, {text: 'Kwota', style: 'thirdSection', alignment: 'right'}, {text: 'Suma', style: 'thirdSection', alignment: 'right'}],
                          ['das', {text: 'dsa', alignment: 'right'}, {text: 'dsa', alignment: 'right'}, {text: 'dsa', alignment: 'right'}],
                          ['das', {text: 'dsa', alignment: 'right'}, {text: 'dsa', alignment: 'right'}, {text: 'dsa', alignment: 'right'}],
                    ]
                },
                layout: 'lightHorizontalLines'
            },
            {
                style: 'fourthSection',
                text: `Łącznie: ${totalAmount / 100}`,
            }
        ],
        styles: {
            firstSection: {
                columnGap: 150
            },
            secondSection: {
                margin: [0, 40]
            },
            thirdSection: {
                bold: true,
                fontSize: 14
            },
            fourthSection: {
                alignment: 'right',
                bold: true,
                margin: [0, 25],
                fontSize: 16
            }
        }
    };
    
    const pdfDoc = pdfmake.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream('../pdf/invoices'));
    pdfDoc.end();
};

module.exports.createInvoicePdf = createInvoicePdf


const PdfPrinter = require('pdfmake');


const fonts = {
    Roboto: {
        normal: 'node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf',
        bold: 'node_modules/roboto-font/fonts/Roboto/roboto-bold-webfont.ttf'
    }
};
const printer = new PdfPrinter(fonts)

const createInvoicePdf = (orderNo, date, firstName, lastName, street, buildingNumber, flatNumber, zipCode, city, items, totalAmount, deliveryCost) => {  
    const invoicePattern = [
        [{text:'Nazwa', style: 'thirdSection'}, {text: 'Ilość', style: 'thirdSection', alignment: 'right'}, {text: 'Kwota', style: 'thirdSection', alignment: 'right'}, {text: 'Suma', style: 'thirdSection', alignment: 'right'}],
        ['Dostawa', {text: '1', alignment: 'right'}, {text: `${deliveryCost}zł`, alignment: 'right'}, {text: `${deliveryCost}zł`, alignment: 'right'}]
    ]
    items.forEach(item => {
        invoicePattern.splice(-1, 0, [item.name, {text: item.quantity, alignment: 'right'}, {text: `${item.price.toFixed(2)}zł`, alignment: 'right'}, {text: `${(item.price * item.quantity).toFixed(2)}zł`, alignment: 'right'}])
    })

    const docDefinition = {
        content: [
            {
                style: 'firstSection',
                columns: [
                    {
                        image: 'pdf/assets/Logo.png',
                        width: 150
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
                                    ['53-625 Wrocław'],
                                    ['NIP 8971843751']
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
                                    [`ul. ${street}, ${buildingNumber} ${flatNumber ? `/ ${flatNumber}` : ''}`],
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
                    body: invoicePattern
                },
                layout: 'lightHorizontalLines'
            },
            {
                style: 'fourthSection',
                text: `Łącznie: ${totalAmount / 100}zł`,
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

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    
    return pdfDoc
};

module.exports.createInvoicePdf = createInvoicePdf


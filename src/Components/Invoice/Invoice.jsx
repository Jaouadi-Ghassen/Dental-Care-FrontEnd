import React from 'react'
import style from "./Invoice.module.css"
import jsPDF from 'jspdf';

export const Invoice = () => {
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text('Invoice', 10, 10);
        doc.text('Invoice Number: 1234', 10, 30);
        doc.text('Date: October 4, 2023', 10, 40);
        doc.text('Customer Name: John Doe', 10, 50);
        doc.text('Product: Widget X', 10, 60);
        doc.text('Quantity: 5', 10, 70);
        doc.text('Total Amount: $250', 10, 80); // Customize as per your needs
        doc.save('invoice.pdf');
    };
    return (
        <div className={style.invoice}>
            <button onClick={generatePDF}>Download Invoice</button>
        </div>
    )
}

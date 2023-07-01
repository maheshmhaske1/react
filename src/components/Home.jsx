import React from "react";
import html2pdf from 'html2pdf.js';

const Home = () => {
  const handleDownload = () => {
    // Get the HTML content as a string
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
      <table class="custom-table" border="1" width="650" style="border-collapse: collapse; text-align: center;" cellpadding="2" cellspacing="10">
      <!-- Rest of the HTML code -->
      </table>
      </body>
      </html>
    `;

    // Set the options for PDF generation
    const options = {
      margin: 10,
      filename: 'output.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Create the PDF using html2pdf
    html2pdf().set(options).from(htmlContent).save();
  };

  return (
    <div>
      <button onClick={handleDownload}>Download as PDF</button>
    </div>
  );
};

export default Home;

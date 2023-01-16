import React, { useState } from 'react';
import ReactPdf from 'react-pdf-js';



const PDF = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

  const onDocumentComplete = (pages) => {
    setNumPages(pages);
  }


  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="pdf-container">
      <ReactPdf
        file="http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf"
        onDocumentComplete={onDocumentComplete}
        page={pageNumber}
        loading={<p>Loading...</p>}
        error={<p>Error</p>}
      />
      <div className="pdf-nav-container">
        <button onClick={prevPage} >
          Previous Page
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button onClick={nextPage} disabled={pageNumber === numPages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PDF;

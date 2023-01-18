import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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
<Document file="http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf" onLoadSuccess={onDocumentComplete}>
<Page pageNumber={pageNumber} />
</Document>

</div>
);
};

export default PDF;
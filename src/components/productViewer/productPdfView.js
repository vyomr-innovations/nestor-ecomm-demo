import React from "react";

const ProductPdf = () => {
    return (
        <div className="m-4">
            <object
                data="/products_pdf/Sunbeam_Tote_Jeff.pdf"
                type="application/pdf"
                width="240"
                height="240"
                className="rounded-lg">
            </object>
        </div>
    );
};

export default ProductPdf;

"use client";
export function PDFViewer() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <object
        data="/products_pdf/Sunbeam_Tote_Jeff.pdf"
        type="application/pdf"
        width="100%"
        height="500px"
      />
    </div>
  );
}

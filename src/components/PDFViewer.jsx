"use client";

export function PDFViewer({ url }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <iframe
        src={url}
        className="w-full h-[800px] border rounded-lg shadow-lg"
        title="PDF Viewer"
      />
    </div>
  );
}


import React, { useState } from "react";
import { FileUpload } from "../components/FileUpload";
export function UploadPage() {
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <FileUpload onChange={handleFileUpload} />
  );
}

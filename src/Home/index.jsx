import React, { useState } from 'react';
import { uniqueId } from 'lodash'
import { filesize } from 'filesize';

import { Container } from './styles';
import Upload from '../Components/Upload'
import File from "../Components/File";

export default function Home() {
  const [uploadFiles, setUploadFiles] = useState([]);

  const handleUpload = files => {
    const upload = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      uploaded: false,
      error: false,
      url: null
    }))

    setUploadFiles(upload);
  }

  return (
    <Container className='flex'>
        <Upload onUpload={handleUpload} />
        { !!uploadFiles.length && (
          <File files={uploadFiles} />
        ) }
    </Container>
  );
}
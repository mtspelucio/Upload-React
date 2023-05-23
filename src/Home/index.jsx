import React, { useState } from 'react';
import { uniqueId } from 'lodash'
import { filesize } from 'filesize';

import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { Container } from './styles';
import Upload from '../Components/Upload'
import File from "../Components/File";

export default function Home() {
  const [imgURL, setImgURL] = useState("");
  const [progressPorcent, setProgressPorcent] = useState(0);
  const [size, setSize] = useState(0);
  const [name, setName] = useState("");

  const handleUpload = files => {
    const file = files[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setName(file.name);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPorcent(progress);
        const size = snapshot.totalBytes / 1000000
        setSize(size.toFixed(2));
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );    
  }

  return (
    <Container className='flex'>
        <Upload onUpload={handleUpload} />
        <File name={name} imgURL={imgURL} progress={progressPorcent} size={size} />
  
    </Container>
  );
}
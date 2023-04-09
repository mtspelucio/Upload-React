import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../firebase'

import { Container } from './styles';
import IconPurple from '../../assets/image/IconPurple.png'
import IconGreen from '../../assets/image/IconGreen.png'
import IconRed from '../../assets/image/IconRed.png'
import Close from '../../assets/image/Close.png'

export default function File({ files }) {
    const [imgURL, setImgURL] = useState("");
    const [progress, setProgress] = useState(0);


    const handleIcon = uploadedFile => {
        if(uploadedFile.uploaded) {
            return <img src={IconGreen} alt="Icone arquivo" />
        } else if(uploadedFile.error) {
            return <img src={IconRed} alt="Icone arquivo" />
        } else {
            return <img src={IconPurple} alt="Icone arquivo" />
        }
    }
    
    useEffect(() => {
        const file = files[0];
        if(!file) return

        const stogareRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(stogareRef, file)

        uploadTask.on("state_changed", snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(progress)
        },
        error => {
            alert(error)
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then(url => {
                setImgURL(url)
            })
        }
        )  
    }, [files])

  return (
    <>
    { files.map(uploadedFile => (
        <Container key={uploadedFile.id} className='flex'>
            { handleIcon(uploadedFile) }
            <div className="info flex">
                <div className="info-and-close flex">
                    <div>
                        <strong className="file-name">{uploadedFile.name}</strong>
                        <p className="info-size">{uploadedFile.readableSize}</p>
                    </div>
                    <div className="close flex">
                        <img src={Close} alt="Fechar" />
                    </div>
                </div>
                { !uploadedFile.uploaded && !uploadedFile.error && (
                    <div className="info-loading flex">
                        <span progress={progress} className="loading-bar"></span>
                        <p className="percentage">{progress}</p>
                    </div>
                )}
            </div>            
        </Container>
    ))}
    </>
  );
}
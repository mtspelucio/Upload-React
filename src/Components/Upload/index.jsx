import React from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';
import IconCloud from '../../assets/image/CloudArrowUp.png'



export default function Upload() {

  const renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive){
      return <UploadMessage>Arraste ou clique para fazer upload</UploadMessage>
    }
    if(isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
  }

  return (
    <Dropzone accept={"image/*"} onDropAccepted={() => {}}>
      {
        ({ getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropContainer 
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />


            <img src={IconCloud} alt="Icone upload" />
            <strong>Importe seus arquivos</strong>
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )
      }
    </Dropzone>
    // <Container>
    //     <label className='flex' htmlFor='file' >
    //         <img src={IconCloud} alt="Icone upload" />
    //         <strong>Importe seus arquivos</strong>
    //         <p>Arraste ou clique para fazer upload</p>
    //     </label>
    //     <input id="file" type="file" />
    // </Container>
  );
}
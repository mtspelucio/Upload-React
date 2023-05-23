import React from 'react';

import { Container } from './styles';
import Close from '../../assets/image/Close.png'
import FilePurple from '../../assets/image/FilePurple.png'

export default function File({ name, imgURL, progress, size }) {

  return (
        <Container className='flex'>
            {imgURL ? 
                <img className='imgModel' src={imgURL} alt='imagem' /> :
                <img src={FilePurple} alt='imagem' />
            }
            <div className="info flex">
                <div className="info-and-close flex">
                    <div>
                        <strong className="file-name">{name}</strong>
                        <p className="info-size">{size} MB</p>
                    </div>
                    <div className="close flex">
                        <img src={Close} alt="Fechar" />
                    </div>
                </div>
                    <div className="info-loading flex">
                        {!imgURL && <progress value={progress} max="100" />}
                        <p className="percentage">{progress}%</p>
                    </div>
            </div>            
        </Container>
  );
}
import React from 'react';

import { Container } from './styles';
import IconFile from '../../assets/image/IconPurple.png'
import Close from '../../assets/image/Close.png'

export default function File() {
  return (
    <Container className='flex'>
        <img src={IconFile} alt="Icone arquivo" />
        <div className="info flex">
            <div className="info-and-close flex">
                <div>
                    <strong className="file-name">Scann_158.pdf</strong>
                    <p className="info-size">30 MB / 74 MB</p>
                </div>
                <div className="close flex">
                    <img src={Close} alt="Fechar" />
                </div>
            </div>
            <div className="info-loading flex">
                <span className="loading-bar"></span>
                <p className="percentage">50%</p>
            </div>
        </div>            
    </Container>
  );
}
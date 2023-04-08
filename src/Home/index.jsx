import React from 'react';

import { Container } from './styles';
import Upload from '../Components/Upload'
import File from "../Components/File";

export default function Home() {
  return (
    <Container className='flex'>
        <Upload />
        <File />
    </Container>
  );
}
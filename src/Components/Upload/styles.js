import styled, { css } from 'styled-components';

const dragActive = css`
    background: #EBE5FF;
`;
const dragReject = css`
    border-color: #E57878;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    background: var(--background);
    border: 2px dashed var(--border);
    border-radius: .8rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    width: 40rem;
    height: 16rem;
    cursor: pointer;
    transition: ease all .5s;

    :hover{
        scale: 1.1;
    }

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};

    strong{
        color: var(--primary);
        font-size: 1.6rem;
        margin-top: 1.2rem;
    }
    p{
        color: var(--gray-2);
        font-size: 1.4rem;
    }
`;

export const UploadMessage = styled.p``;
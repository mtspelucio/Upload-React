import styled from 'styled-components';

export const Container = styled.section`
    width: 40rem;
    padding: .8rem;
    gap: 1.2rem;
    border-radius: .8rem;
    box-shadow: 0 .4rem 1.6rem var(--shadow);
    transition: ease all .5s;
    :hover{
        scale: 1.1;
    }

    .imgModel{
        max-width:6rem;
        max-height:6rem;
        width: auto;
        height: auto;
    }

    .info{
        width: 100%;
        flex-direction: column;
        gap: .6rem;
    }
    .info-and-close{
        justify-content: space-between;
        width: 100%;
    }
    .file-name{
        font-size: 1.4rem;
        color: var(--gray-1);
    }
    .info-size{
        font-size: 1.2rem;
        color: var(--gray-3);
    }

    .info-and-close .close{
        padding: .7rem;
        align-items: first baseline;
        cursor: pointer;
    }

    .info-loading{
        align-items: center;
        justify-content: space-between;
    }

    progress::-webkit-progress-value {
        background-image:
            -webkit-linear-gradient(-45deg, transparent 100%, rgba(0, 0, 0, .1) 33%, rgba(0,0, 0, .1) 66%, transparent 66%),

            -webkit-linear-gradient(left, var(--gradient-1), var(--gradient-2));

        border-radius: 10px; 
        background-size: 35px 20px, 100% 100%, 100% 100%;
    }
    progress::-webkit-progress-bar {
        background: var(--gray-5);
        border-radius: 10px; 
    }
    progress[value]{
        width: calc(100% - 3.4rem);

        height: 1rem;
        background-color: transparent;
    }

    .percentage{
        font-size: 1.2rem;
        color: var(--gray-4);
    }

    .conclude{
        width: calc(100% - 3.4rem);
        height: .8rem;
        border-radius: 10px;
        background: var(--green-1);
    }
    .percentage-conclude{
        font-size: 1.2rem;
        color: var(--green-2);
    }

    .error{
        width: calc(100% - 3.4rem);
        height: .8rem;
        border-radius: 10px;
        background: var(--gray-5);
    }
    .percentage-error{
        font-size: 1.2rem;
        color: var(--red);
    }

`;

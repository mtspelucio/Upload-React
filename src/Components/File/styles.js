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
        width: 12rem;
        padding: .7rem;
        align-items: first baseline;
        cursor: pointer;
    }

    .info-loading{
        align-items: center;
        justify-content: space-between;
    }

    .loading-bar{
        width: calc(100% - 3.4rem);
        height: .8rem;
    }
    .loading-bar::before{
        content: '';
        width: 100%;
        height: .8rem;
        background: var(--gray-5);
        display: block;
        border-radius: 10rem;
    }

    .loading-bar::after{
        content: '';
        position: relative;
        top: -.8rem;
        width: 50%;
        height: .8rem;
        background: linear-gradient( to right,  var(--gradient-1), var(--gradient-2));
        display: block;
        border-radius: 10rem;
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

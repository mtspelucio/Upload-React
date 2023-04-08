import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --primary: #7A5FEC;
        --background: #F3F0FF;
        --border: #C1B2FA;
        --gray-1: #575361;
        --gray-2: #746E82;
        --gray-3: #857E95;
        --gray-4: #9892A6;
        --gray-5: #E3E3ED;
        --shadow: #EAE2FD;
        --gradient-1: #3A61ED85;
        --gradient-2: #7C3AEd;
        --green-1: #73B172;
        --green-2: #4E884D;
        --red: #e36363;

        font-size: 62.5%;
    }   

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .App{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.6rem;
        font-family: 'Inter', sans-serif;
    }
    .flex{
        display: flex;
    }
`;
import React from 'react';

import styled from 'styled-components';

const SignupStyle = styled.div`
    max-width:960px;
    /* height:100vh; */
    margin:0 auto;
    padding:30px 0 30px 0;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:5px;
    @media(max-width:720px){
        grid-template-columns: repeat(1,1fr);
        padding:30px 20px;
    }
    .prvi{
        background:lightskyblue;
        grid-column:1/4;
    }

    .drugi{
        grid-column:4/5;
        grid-row: 1/3;
    }

    .treci{
        grid-column:1/-1;
        grid-row:3/4;
    }
    /* grid-template-rows: repeat(3,200px); */
    /* background: radial-gradient(100% 137.33% at 0% 0%, #A3E997 0%, #FFFFFF 100%); */
`;

const DivStyle = styled.div`
    background:lightblue;
`;

const Nested = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows:1fr 2fr;
    grid-gap:1px;
    .nes-1{
        background:lightblue;
    }
    .nes-2{
        background:lightgreen;
    }
    .nes-3{
        background:grey;
    }
    .nes-4{
        background:pink;
    }
`;

const SignUp = () => {
    return (
        <SignupStyle>
            {/* <div style={{ background: "lightblue", padding: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo at vel in nulla id esse voluptate animi perferendis recusandae, natus, magnam maiores et, consequatur explicabo aliquam magni eaque aperiam tempora deserunt dolor consectetur dolore voluptas. Illum repudiandae quibusdam autem? Eos libero assumenda facere voluptates laboriosam impedit ducimus officia delectus?</div> */}
            <div className="prvi" style={{ padding: "30px" }}>Div 1</div>
            <div className="drugi" style={{ background: "red", padding: "30px" }}>Div 2</div>
            <div className="treci" style={{ background: "green", padding: "30px" }}>Div 3</div>
            <Nested>
                <div className="nes-1">Nes-1</div>
                <div className="nes-2">Nes-2</div>
                <div className="nes-3">Nes-3</div>
                <div className="nes-4">Nes-4</div>

            </Nested>
            <div style={{ background: "gray", padding: "30px" }}>Div 5</div>
            <div style={{ background: "#4a6287", padding: "30px" }}>Div 6</div>
            <div style={{ background: "#4a8763", padding: "30px" }}>Div 7</div>
            <div style={{ background: "#876a4a", padding: "30px" }}>Div 8</div>
        </SignupStyle>
    );
}

export default SignUp;

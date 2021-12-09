import styled from "styled-components";

const StyledFirstContent = styled.section`
  & h2{
    font-weight:bolder;
    
  }
  & .grey{
      color:lightgrey;
      font-weight:600;
      margin:5px 0;
  }
   & .first-content{
       padding:1rem 0 2rem 0;
   }
   & .forms{
       margin-top:1rem;
   }
   & .master-card{
       width:max(80%, 400px);
       border-radius:.5rem;
   }
   & svg{
       width:35px;
       margin-left:.6rem;
   }
   & label{
       color:black;
       font-weight:500;
       margin-bottom:5px;
   }
   & input{

       font-weight:500;
       font-size:.9rem;
       background-color:rgb(248, 247, 247);
       padding:1em;
       border-radius:.3rem;
       border: 1.9px solid rgb(199, 197, 197);
   }
   & .first-content{
       display:grid;
       grid-template-columns:1fr 1fr;
   }
   & path{
       fill:rgb(52, 137, 248);
   }
   & .card-detail-container{
        display:grid;
        grid-template-columns:1fr 1fr;
        row-gap:1.5rem;
        column-gap:1.3rem;
   }
   & .card-detail{
       display:flex;
       flex-direction:column;
   }
   & .card-types{
       text-align:right;
       margin-bottom:1rem;
   }
   & .radio{
       margin-top:1rem;
   }
   & .radio > div {
       margin-top:.8rem;
   }
   & .radio > button{
       color:white;
       font-weight:600;
       background-color:rgb(50, 138, 252);
       margin-top:.8rem;
       width:100%;
       padding:1rem;
       border:1px solid rgb(50, 138, 252);
       border-radius:.2rem;
   }
   & input[type="radio"]{
       margin-right:.2rem;
   }

`

const StyledSecondContent = styled.section`
    padding:1rem;
    font-weight:800;
    & > div{
        display:flex;
        margin:.8rem 0;
        justify-content:space-between;
    }
    & span{
        font-weight:600;
        color:lightgrey;
    }
`
const StyledThirdContent = styled.section`
    font-weight:700;
    padding:2rem 1rem;
    display:flex;
    justify-content:space-between;
    color:black;
    align-items:center;
    & p{
        font-size:1rem;
    }
    & button{
        font-weight:550;
        background-color:rgb(50, 138, 252);
        padding:1rem 2rem;
        font-size:1rem;
        color:white;
        border:1px solid rgb(50, 138, 252);
        border-radius:.2rem;
    }
`

export {
    StyledFirstContent,
    StyledSecondContent,
    StyledThirdContent

}
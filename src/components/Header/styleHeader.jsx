import styled from "styled-components";

const StyledHeader = styled.header`

   display:grid;
   grid-template-columns:1fr 2fr;
   font-weight:700;
   font-size:.9rem;
   padding:1rem;
   border-bottom: 2px solid rgb(241, 239, 239);

   & > div{
       grid-column:2/3;
       display:flex;
       align-items:center;
       justify-content:flex-end;
   }

   & nav li{
       margin-right:2rem;
       display:inline-block;
   }

   & img{
         width:40px;
    }

`

export default StyledHeader
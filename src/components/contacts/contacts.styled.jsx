import styled from "@emotion/styled";


export const List = styled.ul`

width:100%;
padding-left:15px;
padding-right:15px;

`

export const Item = styled.li`

display:flex;
align-items:center;
justify-content: space-between;
margin-bottom:10px;
`

export const EmptyList = styled.p`

 font-size:20px;
 font-style: italic;


`

export const Contact = styled.p`

font-size:20px;

`

export const Number = Contact.withComponent('number');

export const Wrapper = styled.div`
 
display:flex;
gap:10px;
align-items:center;
`
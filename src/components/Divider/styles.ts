"use client"

import styled from "styled-components"

export const Container = styled.div<{
    marginTop?: string
}>`
    z-index: -1;
    background: #e8ebed;

    width: 100%;
    height: 1px;
    margin-top: ${props => props.marginTop || "10px"};
`

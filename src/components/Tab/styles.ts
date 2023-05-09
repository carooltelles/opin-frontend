"use client"

import styled from "styled-components"

export const Container = styled.div`
    width: 160px;
    height: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Text = styled.a<{
    active: boolean
}>`
    text-decoration: none;
    cursor: pointer;

    font-size: 16px;
    font-weight: 500;

    color: ${props => (props.active ? "#2D373D" : "#D81E05")};
`

export const ActiveTab = styled.div`
    background: #2d373d;
    height: 4px;
    width: 100%;
`

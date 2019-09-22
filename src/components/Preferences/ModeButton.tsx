import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #6c63ff;
    border: none;
    width: 36px;
    height: 36px;
    margin: 26px;
    border-radius: 50%;
    padding: 8px;
    outline: none;
`

interface ModeButton {
    mode: string
    toggle: () => void
}

const ModeButton: React.FC<ModeButton> = ({mode, toggle}) => {
    return (
        <Button onClick={toggle}>
            <svg
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                fill={mode === 'day' ? '#fff' : '#2a2a2a'}
                viewBox="0 0 20 20"
            >
                <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z" />
            </svg>
        </Button>
    )
}

export default ModeButton

import React from 'react'

const Strong: React.FC<{ children: any }> = ({ children }) => {
    return <strong>{children}</strong>
}

const X: React.FC<{ children: any }> = ({ children }) => {
    return <Strong>{children}</Strong>
}

export { X, Strong }

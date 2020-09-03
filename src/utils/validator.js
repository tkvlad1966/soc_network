import React from 'react'

export const requiredField = (value) => {
    if (value) return undefined;
    return 'Field is required'
}

export const maxLength = (max) => (value) => {
    return (value && value.length > max ? `>${max} characters` : undefined)
}
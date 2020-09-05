import React from 'react'

export const requiredField = (value) => {
    if (value) return undefined;
    return 'Field is required'
}

export const maxLength = (max) => (value) => {
    return (value && value.length > max ? `>${max} characters` : undefined)
}

export const minLength = (min) => (value) => {
    return (value && value.length < min ? `<${min} characters` : undefined)
}

export const passIsLetterAndNumbre = (value) => {

    return (
        value && !/^[A-Z]+\d/i.test(value) ? 'Invalide' : undefined
    )
}
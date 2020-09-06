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

const hasNumberAndLetter = (value) => {
    return !/^[A-Z]+\d/i.test(value)
}

export const passIsLetterAndNumbre = (value) => {

    return (
        value && hasNumberAndLetter(value) ? 'Invalid' : undefined
    )
}
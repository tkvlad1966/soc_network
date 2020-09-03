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
    const x = !/^[A-Z]/i.test(value)
    const y = !/[0-9]/i.test(value)
    const z = x || y
    debugger
    return (
        value && z ? 'Invalide' : undefined
    )
}
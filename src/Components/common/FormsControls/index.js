import React from 'react'
import s from './index.module.css'

export const Textarea = ({ input, meta, ...props }) => {

    const addError = meta.touched && meta.error

    return (
        <div className={`${s.formControl}   ${addError ? s.error : ''}`}>
            <div >
                <textarea {...input} {...props} />
            </div>
            <div>
                {addError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const addError = meta.touched && meta.error
    return (
        <div className={`${s.formControl}   ${addError ? s.error : ''}`}>
            <div >
                <input {...input} {...props} />
            </div>
            <div>
                {addError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
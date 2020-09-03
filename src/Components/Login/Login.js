import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { maxLength, requiredField, minLength, passIsLetterAndNumbre } from '../../utils/validator';
import { Input } from '../common/FormsControls';

const maxLength10 = maxLength(10)
const minLength6 = minLength(6)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input}
                    validate={[requiredField, maxLength10, minLength6]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                    validate={[requiredField, maxLength10, minLength6, passIsLetterAndNumbre]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'} component={'input'} /> remembre me
            </div>
            < button > Login</button >
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default Login
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { maxLength, requiredField, minLength, passIsLetterAndNumbre } from '../../utils/validator';
import { Input } from '../common/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const maxLength30 = maxLength(30)
const minLength6 = minLength(6)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remembreMe)
    }
    debugger
    if (props.isAuth) {
        return (
            <Redirect to={'/profile'} />
        )
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
                <Field placeholder={'Email'} name={'email'} component={Input}
                    validate={[requiredField, maxLength30, minLength6]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}
                    validate={[requiredField, maxLength30, minLength6, passIsLetterAndNumbre]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remembre me
            </div>
            < button > Login</button >
        </form>
    )
}

let mapStateToProps = (state) => (
    { isAuth: state.auth.isAuth }
)

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default connect(mapStateToProps, { login })(Login)
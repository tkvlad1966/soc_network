import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import s from './spinner.module.css';


const Spinner = (props) => {
    const { isLoading } = props;

    if (!isLoading) {
        return null
    }

    return (<Loader
        type="Audio"
        color="#00BFFF"
        height={80}
        width={80}
        visible={isLoading}
        className={s.spinner}
    />)

}

const mapStateToProps = (state) => ({
    isLoading: state.app.isFetching
})



const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Spinner)

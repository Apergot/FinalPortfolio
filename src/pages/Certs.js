import React, { Component } from 'react'
import { connect } from 'react-redux'

import { retrieveAllCerts } from '../actions/certsActions'

class Certs extends Component {

    componentDidMount(){
        this.props.retrieveAllCerts();
        console.log(this.props.certs)
    }

    render() {
        return (
            <div className="section">
                <h1>Esta es la página de certificados</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    certs: state.certs.list
});

export default connect(mapStateToProps, {retrieveAllCerts})(Certs);
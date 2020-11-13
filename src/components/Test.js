import React, { Component } from 'react';
import { connect } from 'react-redux';

import { testRedux } from '../actions/testActions';

class Test extends Component {

    componentDidMount() {
        this.props.testRedux();
    }

    render () {
        return (
            <div>
                <h1>{this.props.word}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    word: state.word.result
});

export default connect(mapStateToProps, {testRedux})(Test)
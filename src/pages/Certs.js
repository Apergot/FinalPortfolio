import React, { Component } from 'react'
import { connect } from 'react-redux'
import DotLoader from 'react-spinners/DotLoader'
import '../styles/certslist.css'
import { HiExternalLink } from 'react-icons/hi';

import { retrieveAllCerts } from '../redux/actions/certsActions'


class Certs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            certs: this.props.certs
        }
    }

    componentDidMount(){
        this.props.retrieveAllCerts();
    }

    render() {
        return (
            <main>
                <section className="certs section">
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">
I believe continuous learning is an indispensable part in the life of a software engineer, we have to continually renew ourselves and keep learning as much as possible. Therefore, I try to spend part of my free time learning those technologies that could be useful in my professional career. Here I have a small selection of those that I have studied recently.</p>
                    <div className="container">
                        {this.props.certs != null ? this.props.certs.map((item, index) => {
                            return (
                                <div className="box" key={index}>
                                    <img className="certimg" src={item.image} alt={`Alejandro Perdomo cert for ${item.name}` }/>
                                    <div className="content">
                                        <div className="box__header">
                                            <div className="box__titles">
                                                <h1 className="title">{item.name} on {item.platform}</h1>
                                                <h2 className="subtitle"> {item.teacher} </h2>
                                            </div>
                                            <div className="box__icons">
                                                { item.link === 'no' ? <div></div> : <a href={item.link} target="_blank" rel="noreferrer"><HiExternalLink size={20}/></a>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <DotLoader 
                                size={20}
                                color={"#4070F4"}
                                loading={this.state.loading}/>}
                    </div>
                </section>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    certs: state.certs.list
});

export default connect(mapStateToProps, {retrieveAllCerts})(Certs);
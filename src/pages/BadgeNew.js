import React from 'react'

import '../components/style/BadgeNew.css'

import logo from '../images/logo.svg'

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className='BadgeNew__hero'>
                  <img src={logo} className='img-fluid' alt='logo' />
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge />
                        </div>
                        <div className='col-6'>
                            <BadgeForm />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew
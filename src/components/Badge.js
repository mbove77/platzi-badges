import React from 'react';

import './style/Badge.css';

import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {

    render() {
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo} alt='Logo de la conference.'/>
                </div>

                <div className="badge_section-name">
                    <img className="badge_avatar" src='https://www.gravatar.com/avatar/e0dc68b3006d289543c181b6c5c05485' alt='Avatar'/>
                    <h1>Martin <br/> Bove </h1>
                </div>

                <div className='badge_section-info'>
                    <h3>Full stack Engenier.</h3>
                    <div>@mbove77</div>
                </div>

                <div className='badge_footer'>
                    #platziconf
                </div>
            </div>
        )
    }

}

export default Badge;
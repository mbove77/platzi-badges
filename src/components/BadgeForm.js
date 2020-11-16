import React from 'react';

class BadgeForm extends React.Component {

    render() {
        return (
            <div >
                <h1>New Attendant</h1>
                <form>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input className='form-control' type="text" name="firstName" />
                    </div>
                </form>
            </div>
        )
    }

}

export default BadgeForm;
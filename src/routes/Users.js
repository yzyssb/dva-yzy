import React, { Component } from 'react'
import { connect } from 'dva'

import UsersComponent from '../components/Users/Users'

class Users extends Component {
    render() {
        return (
            <div>
                <UsersComponent />
            </div>
        )
    }
}

Users.propTypes = {}

export default connect()(Users)
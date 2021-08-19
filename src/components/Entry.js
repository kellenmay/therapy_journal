import { connect } from 'react-redux'

import { fetchEntries } from '../actions/entriesActions'


const Entry = ({ entry }) => {
    console.log({entry})
    return (
        <div className='entry'>
            <h3> Hello </h3>
        </div>
    )
}

export default connect(null, { fetchEntries })(Entry);

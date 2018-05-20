import React from 'react';

const Rank = ({ entryCount, name }) => {
    return (
        <div>
            <div className='white f3'>
                {name + ', your entry count is...'}
            </div>
            <div className='white f1'>
                {entryCount}
            </div>
        </div>
    );
}

export default Rank;
import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = () => {
    return (
        <Button
            href='http://gooogle.com'
            variant='contained'
            size='small'
            style={{
                background: 'red',
                color: 'white'
            }}
        >
            <img
                src={TicketIcon}
                className="iconImage"
                alt='iconButton'
            />
            Click Me!!
        </Button>
    );
};

export default MyButton;
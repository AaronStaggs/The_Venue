import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12998.048001538202!2d-97.5277!3d35.466874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2dd0f7299117bf2!2sThe+Jones+Assembly!5e0!3m2!1sen!2sus!4v1550588759649" 
            width="100%" 
            height="500" 
            frameBorder="0"  
            allowFullScreen></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
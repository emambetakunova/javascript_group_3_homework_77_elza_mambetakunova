import React from 'react';
import {apiURL} from "../../constants";
import imageNotAvailable from '../../assets/images/image_not_available.png';

const styles = {
    width: '100px',
    height: '100px',
    marginRight: '10px'
};


const MessageThumbnail = props => {
    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }

    return <img src={image} style={styles} className="img-thumbnail" alt="message" />
};

export default MessageThumbnail;
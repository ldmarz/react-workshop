import React from 'react';

const imageStyle = {
    width: "500px"
};

const Avatar = (props) => (<img src={props.picture} style={imageStyle}/>);


export default Avatar;
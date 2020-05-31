import React from 'react';



const color={
    available:"#50d282",
    loggedOut:"#c23b22",
    away:"#dca87b"
}

const Avatar = ({showStatus,small,className,style,src}) =>{
    return(
        <div  className={`avatar-wrapper ${className ? className:''}`} style={{...style,...{width:small && 50,height:small && 50,borderRightColor:color[showStatus]}}}>
            <img className="avatar-image" src={src ? src:`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/100`} alt='avatar'/>
        </div>
    )
}

export default Avatar;
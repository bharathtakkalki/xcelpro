import React from 'react';



const color={
    test:'#999999'
}

const Avatar = ({showStatus,small,className,style}) =>{
    return(
        <div  className={`avatar-wrapper ${className ? className:''}`} style={{...style,...{width:small && 50,height:small && 50,borderRightColor:color[showStatus]}}}>
            <img className="avatar-image" src={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/100`} alt='avatar'/>
        </div>
    )
}

export default Avatar;
import React from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';




const LandingPage = () => {
    return(
        <div style={{padding:25}}>
        <Input formField="Email" happy={false} />
        <br/>

        <Button style={{margin:'16px 0px'}} primary>Join our community</Button>
        <br/>
        <Button facebook> Join via facebook </Button>

        </div>
    )
}

export default LandingPage;
import React from 'react';
import SpeedComp from './SpeedComp';

const initialState = {
    kmph: 0,
    mph: 0
}

const Main = () => {
    const [speedObject, setSpeedObject] = React.useState(initialState);
    
    const kmphCallback = (speed)=>{
        setSpeedObject({
            kmph: speed,
            mph: speed*0.6
        });
    } 

    const mphCallback = (speed)=>{
        setSpeedObject({
            kmph: speed*1.6,
            mph: speed
        });
    }
    
    return (
        <>
            <>This is Main</>
            <SpeedComp type='kmph' speed={speedObject.kmph} callback={kmphCallback} />
            <SpeedComp type='mph' speed={speedObject.mph} callback={mphCallback} />
        </>
    );
}

export default Main;
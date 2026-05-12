import React, { useEffect, useState } from 'react'

const Buttun = () => {

    const [clicked, setClicked] = useState(false);
    const [para, showPara] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!clicked) {
                showPara(true)
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, [clicked]);


    return (
        <div>
            <button onClick={handleClick}>Clicked</button>
            {para && (
                <p>Are you looking for something???</p>
            )}
        </div>
    )
}

export default Buttun
import React, { useEffect, useState } from 'react';

function Expire({ delay, children }) {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimer(delay);
    }, []);

    const setTimer = (delay) =>
    {
        setTimeout(() => setIsVisible(false), delay);
    };

    return (
            isVisible
            && <div>{children}</div>
    )
}

export default Expire;

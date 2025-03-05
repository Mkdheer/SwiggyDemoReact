import { useEffect, useState } from "react";

let useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
    window.addEventListener("online", ()=>{
        setIsOnline(true);
    })

    window.addEventListener("offline", () => {
        setIsOnline(false);
    })
    return isOnline;
}



export default useOnlineStatus;
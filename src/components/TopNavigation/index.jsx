import { useViewport } from "../../assets/functions"
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import { useState } from "react";

const TopNavigation = () => {

    const {width} = useViewport();
    const breakpoint = 768;
    
    return(
        width < breakpoint ? <MobileNavigation productCategory={category} />
        : <DesktopNavigation productCategory={'home'} />
    )
}

export default TopNavigation
import { useViewport } from "../../assets/functions"
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const TopNavigation = () => {

    

    const {width} = useViewport();
    const breakpoint = 768;
    
    return(
        // width < breakpoint ? <MobileNavigation productCategory={category} />
        // : <DesktopNavigation productCategory={'home'} />
        <DesktopNavigation />
    )
}

export default TopNavigation
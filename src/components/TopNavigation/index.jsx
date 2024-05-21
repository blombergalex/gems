import { useViewport } from "../../assets/functions"
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const TopNavigation = ({handleCategoryChange}) => {

    const {width} = useViewport();
    const breakpoint = 768;
    
    return(
        width < breakpoint ? <MobileNavigation handleCategoryChange={handleCategoryChange} />
        : <DesktopNavigation handleCategoryChange={handleCategoryChange} />
    )
}

export default TopNavigation
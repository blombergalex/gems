import Intro from '../../components/Intro';
import TopNavigation from "../../components/TopNavigation"
import { Outlet } from "react-router-dom";

const Layout = () => {

    return(
        <>
            {/* <Intro /> */}
            <TopNavigation/>
            <Outlet />
        </>
    )
}

export default Layout;
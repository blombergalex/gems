import ContentControl from "../../components/ContentControl"
import Sidebar from "../../components/Sidebar"

const EssentialOils = () => {
    console.log('category is essential oils')
    return(
        <>
        <ContentControl />
        <Sidebar category={'essentialoils'}/>
        <p>Essential oils</p>
        </>
    )
}

export default EssentialOils
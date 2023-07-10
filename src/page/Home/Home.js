import Card from "../../Components/Card/Card"
import Header from "../../Components/Header/Header"
import Nav from "../../Components/Navegar/Navegar"
import TituloHeader from "../../Components/TituloHeader/TituloHeader"
import menu from "../../assets/menu.png"
import lupa from "../../assets/lupa.png"
import { SectionCard } from "./styles"

function Home(props){

    return(
        <>
        <Header
        pagina={props.pagina}
        imgPrimeira={menu}
        imgSegunda={lupa}
        />

        <TituloHeader/>

        <Nav/>
        
        <SectionCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SectionCard>
            
        </>

    )
}

export default Home
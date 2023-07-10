import filtro from "../../assets/filtro.png"
import { ContainerNav } from "./styles"
import Botao from "../../Components/Botao/Botao"

function Nav(){

    return(
        <ContainerNav>
            <Botao titulo={"Donuts"}/>
            <Botao titulo={"Ice Cream"}/>
            <Botao titulo={"Bomboloni"}/>
            <img src={filtro} alt=""/>

        </ContainerNav>

    )
}

export default Nav
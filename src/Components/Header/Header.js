import menu from "../../assets/menu.png"
import { BotaoNavegacao, PrimeiroMenu } from "../../Components/Header/styles"
import search from "../../assets/search.png"

function Header(props){
    const handlePageChange = () => {
        props.pagina()
    }

    return(
       <PrimeiroMenu>
        <BotaoNavegacao onClick={handlePageChange}>
            <img src={props.imgPrimeira}/>
        </BotaoNavegacao>
        <BotaoNavegacao>
            <img src={props.imgSegunda}/>
        </BotaoNavegacao>
       </PrimeiroMenu>
    )
}

export default Header
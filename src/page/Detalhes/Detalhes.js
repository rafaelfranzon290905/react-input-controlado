import Header from "../../Components/Header/Header"
import seta from "../../assets/seta.png"
import ponto from "../../assets/ponto.png"
import group from "../../assets/group.png"
import donutGrande from "../../assets/Frame 9.png"
import { BotaoCard, BotaoMore, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProduto, TextMore, TextoDonuts, TituloDonuts } from "./styles"

function Detalhes(props) {
    return (
        <>
        <Header 
        pagina={props.pagina}
        imgPrimeira={seta}
        ImgSegunda={ponto}
        />
        <ContainerDetalhes>
            <ImagemGrande src={donutGrande}/>

            <ContainerDiv>
                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>
                <TextoDonuts>
                    Eu comi sua tia bem gostoso
                </TextoDonuts>

                <MaisProduto>
                    <img src={group} alt=""/>
                </MaisProduto>

                <MaisProduto>
                    <TextMore>Need more?</TextMore>
                    <BotaoMore>Add more</BotaoMore>
                </MaisProduto>

                <BotaoCard>Add to cart</BotaoCard>

            </ContainerDiv>
        </ContainerDetalhes>
        </>

    )
}

export default Detalhes
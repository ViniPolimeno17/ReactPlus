import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imagem from "../../assets/img/pessoasQuadro.svg"
import "./CadastroTipoEvento.css"

const CadastroTipoEvento = () => {
    return(
        <>
            <Header/>
                <main>
                    <Cadastro tituloCadastro="Cadastro de Tipo Evento" imagem={imagem} placeholder="Tipo de Evento" visibilidade="none" coluna="none"/>
                    <Lista/>
                </main>
            <Footer/>  
        </>
    )
}

export default CadastroTipoEvento;
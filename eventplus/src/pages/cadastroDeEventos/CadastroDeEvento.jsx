import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import "./CadastroDeEvento.css"
import Lista from "../../components/lista/Lista";
import Imagem from "../../assets/img/imagemCadastro.svg"

const CadastroDeEvento = () => {
    return(
        <>
            <Header/>
            <main>
                <Cadastro tituloCadastro="Cadastro de Evento" placeholder="Cadastro de Evento" nomeDoBotao="Cadastrar" imagem={Imagem} coluna="Tipo de Evento"/>
                <Lista/>
            </main>
            <Footer/>  
        </>
    )
}
export default CadastroDeEvento;
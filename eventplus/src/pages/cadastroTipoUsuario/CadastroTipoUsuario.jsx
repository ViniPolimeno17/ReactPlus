import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Imagem from "../../assets/img/TipoUsuario.svg"
import "./CadastroTipoUsuario.css"
import Lista from "../../components/lista/Lista";

const CadastroTipoUsuario = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro Tipo Usuário"
                    placeholder="Cadastro de Usuario"
                    nomeDoBotao="Cadastrar" 
                    imagem={Imagem}
                    visibilidade="none"
                    coluna="none"
                />
                <Lista />
            </main>
            <Footer />
        </>
    )
}
export default CadastroTipoUsuario;
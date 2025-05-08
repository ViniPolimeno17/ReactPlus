import Imagem from "../../assets/img/imagemCadastro.svg"
import Botao from "../botao/Botao"
import "./Cadastro.css"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro layout_grid">
            <form action="" className="form_cadastro">
                <div className="partes">
                    <div className="parte_de_cima">
                        <h1>{props.tituloCadastro}</h1>
                        <hr />
                    </div>
                    <div className="parte_de_baixo">
                        <div className="imagem_cadastro">
                            <img src={props.imagem} alt="" />
                        </div>
                        <div className="cad">
                            <input type="text" name="name" placeholder="Name" />
                            <div style={{display:props.visibilidade}}>
                                <select name="Tipo Evento" id="">
                                <option value="" disabled selected>Tipo Evento</option>
                                <option value="">op 1</option>
                                <option value="">op 2</option>
                                <option value="">op 3</option>
                                </select>
                            </div>
                            <Botao nomeDoBotao="Cadastrar"/>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default Cadastro;
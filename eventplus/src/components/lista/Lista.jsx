import Editar from "../../assets/img/Editar.svg"
import Excluir from "../../assets/img/Excluir.svg"
import "./Lista.css"

const Lista = (props) => {
    return(
        <section className=" listagem">
            <h1>Lista de Eventos</h1>
            <hr />
            <div className="layout_grid tabela">
            <table>
                    <thead>
                        <tr className="table_cabecalho">
                            <th style={{display:props.coluna}}>Nome</th>
                            <th >Titulo</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="item_lista">
                            <td data-cell="Nome">Nome do Evento</td>
                            <td data-cell="Tipo Evento" style={{display:props.visivel}}>Tipo Evento</td>
                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        </section>
    )
}
export default Lista;
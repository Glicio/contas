import React, { useState } from "react";
import "./static/Contas.css"


const Pagamentos = ({pagamentos}) => {

    const [pagamentosArr] = useState(pagamentos);
    return (
        <>
        {pagamentos.map(pagamento => {
            return (
                <>
                <tr>
                    <td className="value">
                        {pagamento.data}
                    </td>
                    <td className="value">{"R$ "+pagamento.valor}</td>
                </tr>
                </>
            )
        })}
        </>
    )
}

const Pagamento = ({pagamentos}) => {
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th className="table-header" style={{borderTop: "none"}}>
                        Data
                    </th>
                    <th className="table-header" style={{borderTop: "none"}}>
                        Valor
                    </th>
                </tr>
            </thead>
            <tbody>
            <Pagamentos pagamentos={pagamentos}></Pagamentos>
            </tbody>
        </table>

        </>
    )
}



export default ({credor, valor, descricao}) => {
    const pagamentos = [
        {
            data: "15/01/2022",
            valor: 25.00,
        },
        {
            data: "16/02/2022",
            valor: 25.00,
        },
    ]
    return(
        <>
    

    <table>
        <thead>
            <tr>
                <th className="table-header" colSpan={"2"}>
                    Conta
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="info">Credor:</td>
                <td className="value">{credor}</td>
            </tr>
            <tr>
            <td className="info">Valor:</td>
                <td className="value">{valor}</td>
            </tr>
            <tr>
                <td className="info">Descrição:</td>
                <td className="value"><div className="desc-div">{descricao}</div></td>
            </tr>
        </tbody>
    </table>
    <Pagamento pagamentos={pagamentos}></Pagamento>
        </>
    )
}
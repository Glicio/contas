import React from "react";
import "./static/Contas.css"

const Pagamento = ({data, valor}) => {
    return(
        <>
        <div className="item-div">
            <div className="value-div">{data}</div>
            <div className="value-div">{valor}</div>
        </div>
        </>
    )
}

export default ({credor, valor, descricao}) => {
    return(
        <>
        {/*<div className="conta-container">
            <div className="info-div header">Conta</div>
            <div className="item-div"> 
                <div className="info-div">Credor:</div>
                <div className="value-div">{credor}</div>
            </div>
            <div className="item-div"> 
                <div className="info-div">Valor:</div>
                <div className="value-div">{valor}</div>
            </div>
            <div className="item-div"> 
                <div className="info-div">Descrição:</div>
                <div className="value-div" id="desc">{descricao}</div>
            </div>
            <div className="info-div header">Pagamentos</div>
            <div className="item-div">
                <div className="info-div header">Data</div>
                <div className="info-div header">Valor</div>
            </div>
            <Pagamento data={"25/03/2022"} valor={"RS 25,00"}/>
    </div>*/
    }

    <table>
            <tr>
                <th className="table-header" colSpan={"2"}>
                    Conta
                </th>
            </tr>
        <tbody>
            <tr>
                <td className="info">Credor:</td>
                <td className="value">{credor}</td>
            </tr>
            <tr>
                <td className="info">Descrição:</td>
                <td className="value"><div className="desc-div">{descricao}</div></td>
            </tr>
        </tbody>
    </table>
        </>
    )
}
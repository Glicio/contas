import React from "react";
import "./static/Contas.css"


const Pagamentos = ({pagamentos}) => {

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
                    <th className="table-header" colSpan={"2"}>
                        Pagamentos
                    </th>
                </tr>
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



export default function Conta({credor, valor, descricao, pagamentos}) {



    const valorPago = pagamentos.reduce((acc, curr) => {
       return acc+=curr.valor; 
    },0)


    return(
    <div className="conta">
    

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
                    <td className="value">{"R$ "+valor.toFixed(2)}</td>
                </tr>
                <tr>
                    <td className="info" style={{width: "15vw"}}>Valor Pago:</td>
                    <td className="value">{"R$ "+valorPago.toFixed(2)}</td>
                </tr>
                <tr>
                    <td className="info" style={{width: "15vw"}}>Resta pagar:</td>
                    <td className="value">{"R$ "+(valor-valorPago).toFixed(2)}</td>
                </tr>
                <tr>
                    <td className="info">Descrição:</td>
                    <td className="value"><div className="desc-div">{descricao}</div></td>
                </tr>
            </tbody>
        </table>
        <Pagamento pagamentos={pagamentos}></Pagamento>
    </div>
    )
}
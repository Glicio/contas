import { useEffect, useState, useRef } from "react"
import "./static/ContaForm.css"


export default function ContaForm({createconta, refresh, show, display}) {
    const [credor, setCredor] = useState("")
    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")


    const onChange = (e) =>{
        switch(e.target.name){
            case "credor":
                setCredor(old => e.target.value);
                break;
            case "valor":
                setValor(old => e.target.value);
                break;
            case "descricao":
                setDescricao(old => e.target.value);
                break;
        }
    }


    let conta = {
        credor: credor,
        valor: valor,
        descricao: descricao
    }
    
    const sendForm = () => {
        if(!conta.credor || !conta.valor){
            alert("O valor e nome do credor são obrigatórios!")
            return
        } 
        createconta(conta).then(succ => {
            refresh();
        }).catch(err => {
            alert("erro ao criar conta!")
        })
        setCredor(old => "")
        setValor(old => "")
        setDescricao(old => "")
        display()
    }

    return (
        <div className="form-div" style={show ? {display: "flex"} : {display: "none"}}>

            <form className="contas-form" action="" onSubmit={(e) => {e.preventDefault();}}>
                <div className="" style={{display: "flex", alignItems: "flex-end"}}>
                    <button className="delete-btn" onClick={(e) => {e.preventDefault(); display()}}>ⓧ</button>
                </div>
                <div className="form-item">
                    <label htmlFor="credor">Credor: </label>
                    <input type="text" name="credor" id="credor" required value={credor} onChange={(e) => {onChange(e)}}/>
                </div>
                <div className="form-item">
                    <label htmlFor="valor">Valor: </label>
                    <input type="number" name="valor" id="valor" value={valor} required onChange={(e) => {onChange(e)}}/>
                </div>
                <div className="form-item" style={{flexDirection: "column"}}>
                    <label htmlFor="descricao" style={{width: "100%"}}>Descrição: </label>
                    <textarea name="descricao" id="desc" cols="30" rows="10" style={{resize: "none"}} value={descricao} onChange={(e) => {onChange(e)}}></textarea>
                </div>
                <button type="submit" className="form-btn" onClick={(e) => {e.preventDefault(); sendForm()}}>Adicionar</button>
            </form>
        </div>
    )
}
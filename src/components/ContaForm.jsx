import "./static/ContaForm.css"


export default function ContaForm() {
    return (
        <>
            <form className="contas-form" action="" onSubmit={(e) => {e.preventDefault();}}>

                <div className="form-item">
                    <label htmlFor="credor">Credor: </label>
                    <input type="text" name="credor" id="credor" />
                </div>
                <div className="form-item">
                    <label htmlFor="valor">Valor: </label>
                    <input type="number" name="valor" id="valor" />
                </div>
                <div className="form-item" style={{flexDirection: "column"}}>
                    <label htmlFor="desc" >Descrição: </label>
                    <textarea name="desc" id="desc" cols="30" rows="10" style={{resize: "none"}}></textarea>
                </div>
                <button type="submit" className="form-btn">Adicionar</button>
            </form>
        </>
    )
}
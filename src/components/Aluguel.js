export default function Aluguel(props) {
    return (
        <div>
            <div className={props.aluguel.id} >
                <p>Origem: {props.aluguel.origem}</p>
                <p>Data: {props.aluguel.diaHoraInicio}</p>
                <p>Preço por hora: {props.aluguel.precoPHora}</p>
                <p>Status: {props.aluguel.status}</p>
                <p>Destino: {props.aluguel.destino}</p>

            </div>
        
        </div>
    )


}


function Card({tarefa, conteudo}){
    return (
        <div className="flex bg-gray-200 border rounded-lg p-2 m-3 flex-col">
                <p className="text-2xl font-semibold">{tarefa}</p>
                <div className="pt-2">{conteudo}</div>
        </div>
    )
}

export default Card
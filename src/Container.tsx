import Card from "./Card"

function Container(){
    return (
    <>
        <div className='flex justify-center-safe p-1 bg-blue-950'>
            <Card tarefa={"Comer"} conteudo={"Cozinhar marmita"}></Card>
        </div>    
    </>
    )
}

export default Container
import '../ItemListConteiner/ItemListConteiner.css'

const ItemListConteiner = (props) => {
    
    
    return(
        <>
            <p className='titulo'>{props.Saludo}</p> 
            <div className='contenedorPadre'>                                 
                <div className='contenedorHijo'>1</div>
                <div className='contenedorHijo'>2</div>
                <div className='contenedorHijo'>3</div>
                <div className='contenedorHijo'>4</div>
                <div className='contenedorHijo'>5</div>
                <div className='contenedorHijo'>6</div>
                
            </div>
        </>

    )
}

export default ItemListConteiner;
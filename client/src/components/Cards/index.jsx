import './Card.css'


export const Card = ({id, name, image, descrition, price, timeDone, selected, onToSelect }) => {
    return(
        <div className={`card ${selected ? 'card-selected' : ''}`} onClick={() => onToSelect(id)}>
            <img src={image} width={200} alt="image from product" />
            <div className="content">
            <h3>{name}</h3>
            <p>{descrition}</p>
            
                <div>
                    <span>${price}</span>
                    <span>Done: {timeDone}</span>
                </div>
            </div>
            
            

        </div>
    )
}
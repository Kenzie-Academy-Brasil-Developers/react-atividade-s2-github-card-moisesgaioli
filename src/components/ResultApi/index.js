import "./styles.css"


function ResultApi ({ inputValue : { name, id, description, html_url } }) {

    return (
        <div className="card-container">
            <h3 className="card-title"> {name} </h3>
            <div className="card-id"> ID: {id} </div>
            <p className="card-description"> {description} </p>
            <a className="card-link" href={html_url}>Repositório</a>      
        </div>
    )
}

export default ResultApi;


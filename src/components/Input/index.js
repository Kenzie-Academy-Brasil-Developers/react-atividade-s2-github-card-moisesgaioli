import "./styles.css";

function Input ({ inputValue, setInputValue, handleShowResult}) {


    const searchInput = () => {
        
        fetch(`https://api.github.com/repos/${inputValue}`)
        .then(res => res.json())
        .then(res => setInputValue(res))
        .catch(error => console.log("Repositório desconhecido"))

        handleShowResult();
    }

    return (

        <section className="input-container">
              <input className="input" type="text" value={inputValue} required onChange={e => setInputValue(e.target.value)}  placeholder="O que está procurando?" />
              <button className="btn-input" type="submit" onClick={searchInput} > Pesquisar </button>
        </section>
    )
}

export default Input;


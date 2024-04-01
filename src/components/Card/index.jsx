const Card = ({item, amount, addToBasket, clearFromBasket}) => {
    

  return (
    <div style={{width: "200px"}} className="d-flex flex-column align-items-center gap-1 border rounded p-3">
        <img src={item.imagePath} height={100} alt="çeşit-resim" />
        <span>{item.name}</span>

        <div className="d-flex gap-2 align-items-center">
            <button onClick={()=> clearFromBasket(item.name)} className="btn btn-sm btn-outline-danger">Sıfırla</button>
            <span className="fs-3">{amount}</span>
            <button onClick={()=> addToBasket(item)} className="btn btn-sm btn-outline-warning">Ekle</button>
        </div>
    </div>
  )
}

export default Card
import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:4000/toppings")
      .then((res) => setData(res.data));
  }, []);


  // ürüne tıklandığında çalışır
  // tiklendiyse diziyi güncelle sepete ekle, tiik kaldırıldıysa diziyi güncelle ve diziden kaldır
  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };


  return (
    <div className="container">
      <h1>Sos Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">3</span>₺
      </p>
      <h3>
        Soslar Ücreti{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 3}
        </span>
        ₺
      </h3>

      <div className="row gap-3 p-3">
        {data.map((item) => (
          <div className="top-card col mt-2" style={{ width: "150px" }}>
            {/* htmlFor vererek label ve inputu birbirine bağladık. 
            bu sayede sadece chechbox'a değil resme de tıklanınca arka plan
            değişmiş olacak. arka planı css'de hallettik */}
            <label
              htmlFor={item.name}
              className="d-flex flex-column align-items-center gap-3"
            >
              <img height={100} src={item.imagePath} />

              <p className="text-nowrap text-center">{item.name}</p>
            </label>

            <input
              // e.target.checked -> inputun tiklenme durumu / item ->hangi eleman için bu işlemi yaptık
              onChange={(e) => handleChange(e.target.checked, item)}
              className="d-none"
              id={item.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";

const Scoops = () => {
  // gelen verilerin aktarıldığı state
  const [data, setData] = useState([]);
  // sepet state'i
  const [basket, setBasket] = useState([]);


  // dışardan gelen item'ı alacak, sonra bu itemı mevcut sepetteki elemanların üzerine ekleyecek
  // sepete eleman ekle
  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  // sepetten eleman kaldır
  // isme göre gittik
  const clearFromBasket = (name) => {
    setBasket(basket.filter((i) => i.name !== name));
  };


  useEffect(() => {
    axios.get("http://localhost:4000/scoops").then((res) => setData(res.data));
  }, []);


  return (
    <div className="container my-5">
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">20₺</span>
      </p>
      <h3>
        Çeşitler Ücreti <span data-testid={"total"} className="text-success">{basket.length*20}</span>₺
        {/* dizini uzunluğunu tane fiyatıyla çarptık */}
        {/* data-testid={"total"} vererek test kısmında elemanı bu değere göre alabiliyor olduk
        çünkü birden fazla span var getByRole pekişe yaramazdı, bytext de aynı şekilde iki spanın içinde 0 var. */}
      </h3>

      <div className="row gap-5 justify-content-between mt-4 p-4">
        {data?.map((i) => (
          <Card
            // sepetteki belirli isimdeki elemanların sayısını öğren
            amount={basket.filter((item)=> item.name === i.name).length}
            item={i}
            key={i.id}
            addToBasket={addToBasket}
            clearFromBasket={clearFromBasket}
          />
        ))}
      </div>
    </div>
  );
};
/*
basket.filter((item) => item.name === i.name) kodu, basket dizisindeki her elemanı
i ile karşılaştırarak, adı i.name olanları filtreler. Ardından .length özelliği 
kullanılarak, bu filtreyi geçen elemanların sayısı bulunur. Yani, amount propu, 
sepetteki belirli bir isimdeki elemanların toplam sayısını temsil eder.
*/

export default Scoops;

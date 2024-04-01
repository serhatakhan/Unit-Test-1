import { render, screen } from "@testing-library/react"
import Scoops from "."
import userEvent from "@testing-library/user-event"

/*
 * Selectors (Seçiciler) > 3 ana parçadan oluşur:
 --> Method / [ALL] / BySeçici

 * method > get | find | query :

 * * get --> başlangıçta dom'da olan elementleri almak için kullanılır.
   * elementi bulamazsa test failler.
    mesela her bir cart dom'da yok. api isteğinden sonra geliyor. mesela dondurma çeşitleri yazısı dom'da var.

 * * query -->  get ile benzer çalışır. ama ondan farklı olarak element dom'da bulunmazsa
    test faillemez null döndürür ve test devam eder.
    (modal gibi alanları test ederken query, ama mutlaka ekranda olmasını beklediğimiz alanları
    test ederken get metodu kullanabiliriz.)

 * * find --> elementin ne zaman ekrana basılacağının belli olmadığı durumlarda kullanılır.
    (api isteklerinde)
   * NOT: find metodu promise döndürür. bu yüzden async await ile kullanılmalı. 

   * Eğer metoda ALL eklersek, seçicininin koşuluna uyan bütün elementleri alır ve
    all kulanırsak her zaman "dizi" şeklinde cevap alırız.
*/


test("API'den gelen veriler için ekrana kartlar basılır", async ()=>{
    render(<Scoops />)

    // * bu resimleri içeren elemanlar api'den gelecek ve ne zaman geleceği belli değil.
    // ondan dolayı find kullandık. Birden fazla eleman istediğimiz için All kullandık
    const images = await screen.findAllByAltText("çeşit-resim")

    // * gelen resimlerin sayısı 1'den büyük veya eşit mi? eğer büyükse veriler gelmiştir demektir.
    // * images bir dizi.çünkü find dizi şeklinde cevap verir. bu diziyi length kullanarak sayıya çevirdik.
    expect(images.length).toBeGreaterThanOrEqual(1)
})

test("Çeşitlerin ekleme ve sıfırlama işlemleri çalışır", async ()=> {
    // UserEvent'in kurulumu
    const user = userEvent.setup()

    // bileşeni ekrana bas
    render(<Scoops />)

    // bütün ekleme ve sıfırlama butonlarını çağır (find kullandığımız için async-await)
    // 2.parametre, içerisinde ekle yazan butonları al anlamına geliyor. çünkü sıfırla butonu da var. onu da altında çağırdık
    const addButtons = await screen.findAllByRole("button", {name: /ekle/i})
    const delButtons = await screen.findAllByRole("button", {name: /sıfırla/i})

    // toplam fiyat elementini çağır(bu elementin render edilmesi api'den gelen cevaba bağlı değil. api hata verse de bu elemet ekrana basılacak. finf o yüzden kullanmadık.)
    const total = screen.getByTestId("total");

    // toplam fiyatı 0 mı kontrol et (aşağıdaki ikiside olur)
    /*expect(total).toHaveTextContent(0)*/  // yazı içeriğinde 0 var mı diye bakıyor. yazı içeriğinde 10 yazsaydı da testten geçiyorduk. o yüzden bunu kullanamayız !!
    // totalin içindeki yazı içeriğini 0 mı
    expect(total.textContent).toBe("0");      

    // ekle butonlarından birine tıkla
    await user.click(addButtons[0])

    // toplam fiyatın 20 mi olduğunu kontrol et
    expect(total.textContent).toBe("20");      

    // ekle butonlarından birine 2 kez tıkla(öylesine biz seçtik çikolata olanı)
    await user.dblClick(addButtons[2])

    // toplam fiyatı 60 mı kontrol et
    expect(total.textContent).toBe("60");      
    
    // ilk ekleneni kaldır
    await user.click(delButtons[0])

    // toplam fiyatı 40 mı kontrol et
    expect(total.textContent).toBe("40");      

    // son ekleneni kaldır
    await user.click(delButtons[2])

    // toplam fiyatı 0 mı kontrol et
    expect(total.textContent).toBe("0");      
})
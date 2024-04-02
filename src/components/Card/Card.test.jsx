import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import Card from './index';


// * Ekle'ye basınca sayı artıyor mu, sıfırlaya basınca sayı sıfırlanıyor mu gibi bir test
// yapmayacağız. Ekle ve sıfırla sayıları scoops dosyasındaki state'e bağlı. Biz unit test
// yazarken tek bir kartı izole şekilde düşünerek test yazacağımızdan, kartı tek başına
// düşündüğümüzde, scoops dosyasının dışında düşündüğümüzde ekle ve sıfırla çalışmayacak.
// ondan dolayı bunun testi yapılmaz. kartı izole bir şekilde düşündüğümüzden ekrandaki sayının
// değiştiğini istesekte test edemeyiz.
// * ekleme ve sıfırla kısımlarında test yaparken şuna bakacağız: ekleye basınca addtobasket,
// sıfırlaya basınca clearfrombasket fonksiyonları doğru parametrelerle çalışıyor mu?


//** bir tane örnek scoops aldık. bunu benzer prop olarak yollayacağız
const item =  {
    name: "Chocolate",
    imagePath: "/images/chocolate.png"
}
//** amount propu da alıyor bu bileşen. kendimiz öylesine bir sayı verdik
//** fonksiyon propları testin şu aşamasında önemli olmadığı için boş fonksiyonlar olarak yazdık
// bu noktada ekleme ve sıfırla butonlarının işlevi önemli değil. çünkü bu teste bu butonların 
// işlevini test etmek yerine "Miktar, başlık ve fotoğraf gelen veriye göre ekrana basılır" testi yapıyoruz

// PROP OLARAK VERİ ALAN BİR BİLEŞENİ TEST EDİYORSAK ALDIĞI PROPLARN BENZERİNİ GÖNDERMEMİZ GEREK
// BU TESTİN AMACI: KARTIN İÇERİĞİ GÖNDERİLEN PROPLARA UYGUN ŞEKİLDE EKRANDA MI?
test("Miktar, başlık ve fotoğraf gelen veriye göre ekrana basılır", ()=>{
    render(<Card item={item} amount={5} addToBasket={()=>{}} clearFromBasket={()=>{}} />)

    // miktar spanının çağır
    const amount = screen.getByTestId("amount")

    // miktar 5 mi kontrol et
    expect(amount.textContent).toBe("5")

    // chocolate yazısı ekrana basıldı mı
    // eleman var mı kontrolü yapmak için onu bu şekilde çağırmak yeterli. bir daha toHaveTextContent veya toBeInTheDocument falan yapmaya gerek yok.
    screen.getByText("Chocolate")

    // resime elementini al
    // elemanı aldıktan sonra farklı bir kontrol yapmak istediğimizden, bir değişkene atarız
    const image = screen.getByAltText("çeşit-resim")
    
    // src değeri "/images/chocolate.png" olan resim var mı?
    // bir elementin niteliğini kontrol edebilmek için toHaveAttibute
    // resmin kaynak attiribute'unu test etmek istiyoruz. 2.parametre ise src'nin karşılığı olmasını beklediğimiz değer.bunu da yukarda tanımlamıştık !!
    expect(image).toHaveAttribute("src", item.imagePath)
})

// 
test("Butonlara tıklanınca fonksiyonlar doğru parametre ile çalışır", async ()=>{
    // bu userevent asenkron bir metot olduğundan async-await kullandık
    const user = userEvent.setup()

    // * bu testte butonları test edeceğimiz için boş fonk şeklinde yazmadık.
    // * prop olarak scoops bileşeninden gönderilen orijinal fonksiyonları gönderemeyeceğimizden,
    // fonksiyonlar doğru şekilde doğru zamanda doğru parametreler ile çalışıyor mu kontrol
    // etmeliyiz. bu yüzden fonksiyonu taklit eden mock(sahte) fonksiyonu tanımlamalıyız !!!
    const addMockFn = jest.fn()
    const clearMockFn = jest.fn()

    render(<Card item={item} amount={3} addToBasket={addMockFn} clearFromBasket={clearMockFn} />)

    // butonları al
    const addBtn = screen.getByRole("button", {name: /ekle/i})
    const clearBtn = screen.getByRole("button", {name: /sıfırla/i})

    // ekle butonuna tıkla
    await user.click(addBtn)

    // addToBasket fonksiyonu doğru parametreleri alarak çalıştı mı
    expect(addMockFn).toHaveBeenCalledWith(item)

    // sıfırla butonuna tıkla
    await user.click(clearBtn)

    // clearToBasket fonksiyonu doğru parametreleri alarak çalıştı mı
    expect(clearMockFn).toHaveBeenCalledWith("Chocolate")   //item.name->daha anlaşılır olsun diye chocolate yazdık
})
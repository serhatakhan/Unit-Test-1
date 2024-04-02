import { render, screen } from "@testing-library/react"
import Toppings from "."
import userEvent from "@testing-library/user-event"

test("sosları ekleme ve çıkarma işlemleri toplama etki eder", async ()=>{
    const user = userEvent.setup()

    //1- bileşeni renderla
    render(<Toppings />)

    //2- toplam spanını al
    const total = screen.getByTestId("total")

    //KARTIN İÇİNDEKİ BİR ELEMANI SEÇMEK DE KARTI SEÇMEK GİBİDİR. İLLA KAPSAYIICIYI ALMAYA GEREK YOK
    //3- bütün sos checkboxlarını al (api'den gelmesi zaman alıyor ondan dolayı find ve await)
    const toppings = await screen.findAllByRole("checkbox")

    //4- toplam ücret 0 mı kontrol et
    expect(total.textContent).toBe("0")

    //5- bütün checkboxların tiksiz olduğunu kontrol et
    //6 tane checkbox var. o yüzden foreach ile bir döngü şeklinde kontrol sağladık !!!
    toppings.forEach((i)=> expect(i).not.toBeChecked())

    //6- soslardan birine tıkla
    await user.click(toppings[0])

    //7- toplam ücret 3 mü kontrol et
    expect(total.textContent).toBe("3")

    //8- soslardan birine daha tıkla
    await user.click(toppings[4])

    //9- toplam ücret 6 mı kontrol et
    expect(total.textContent).toBe("6")

    //10- eklenen soslardan birini çıkar
    await user.click(toppings[4])

    //11- total 3'e eşit mi kontrol et
    expect(total.textContent).toBe("3")

    //12- eklenen son sosu çıkar
    await user.click(toppings[0])

    //13- total 0'a eşit mi konrol et
    expect(total.textContent).toBe("0")
})
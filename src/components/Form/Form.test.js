import { fireEvent, render, screen } from "@testing-library/react"
import Form from './index';

test("Koşulların onaylanmasına göre buton aktifliği", ()=>{
    //1- test edilecek olan bileşen render edilir
    render(<Form />)

    //2- gerekli elemanları çağır
    const button = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox")

    //3- checkbox'ın tiklenmemiş olduğunu kontrol et
    expect(checkbox).not.toBeChecked()

    //4- butonun disable olduğunu kontrol et
    expect(button).toBeDisabled()

    //5- checkbox'a tıkla
    fireEvent.click(checkbox)

    //6- butonun aktif olduğunu kontrol et
    expect(button).toBeEnabled()

    //7- checkbox'a tıkla
    fireEvent.click(checkbox)

    //8- butonun inaktif olduğunu kontrol et
    expect(button).toBeDisabled()
})

test("Onay butonunun hover durumuna göre bildirim görünür", ()=>{
    //1- formu renderla
    render(<Form />)

    //2- gerekli elemanları al
    const checkbox = screen.getByRole("checkbox")
    const button = screen.getByRole("button")
    const alert = screen.getByText(/size gerçekten/i) // insensetive

    //3- checkbox'a tıkla (buton aktif hale gelir)
    fireEvent.click(checkbox)

    //4- bildirimin ekranda olmadığını kontrol et
    // ekranda olmaması lazım ki mouse'u üzerine getirdiğimde ekranda mı kontrolü yapabileyim.
    //* toBeVisible(), eleman ekranda görünüyor mu diye kontrol eder
    expect(alert).not.toBeVisible()

    //5- mouse'u butona getir
    fireEvent.mouseEnter(button)

    //6- bildirim ekrana geldi mi kontrol et
    expect(alert).toBeVisible()

    //7- mouse'u butondan çek
    fireEvent.mouseLeave(button)

    //8- bildirim ekrandan gitti mi kontrol et
    expect(alert).not.toBeVisible()
})


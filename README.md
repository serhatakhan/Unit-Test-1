# Selectors

- https://testing-library.com/docs/ecosystem-testing-library-selector/

# Matchers

- https://github.com/testing-library/jest-dom

# Html Element Rolleri

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles


# Kütüphaneler
- axios@^0.27.2
- @testing-library/user-event@14.0
- json-server
- bootstrap


# Test Geliştirme Süreçleri

## TDD (Test Driven Development)
- Diğer adı `red to green test` --> sebebi: önce test yazılır işlem olmadığı için kırmızı yanar sonra işlevler yapılınca yeşile döner.
- Önce özelliğin/bileşenin testi yazılır. Sonra özellik/bileşen kodlanır.
- Artısı, testler bir yük gibi gelmiyor. Geliştirme sürecinin bir parçası oluyor. Testleri yazarken dinamik yapının algoritmasını oluşturduğumuz için işlevi daha hızlı kodlayabiliyoruz.

## BDD (Behavior Driven Development)
- Önce özellik veya bileşen geliştirilir. Sonra testleri yazılır.


## FireEvent
- rtl içerisinde gelen olay tetikleme metodu
- Gerçek kullanıcıdan uzak tepkiler verdiği için yerini `userEvent`'e bıraktı. 
- Tetiklenen olaylar gerçek bir insanın verebileceği tepkiden çok daha hızlı bir şekilde aniden tetikleniyor. Eksisi bu. (Ekle'ye tıkla dediğimizde bizim veremeyeceğimiz bir hızda 
mouse'un ekle butonuna ışınlandığını, ışınlandığı saniye tıklandığı gibi bir durumu var.)

## UserEvent
- Bu yolu kullanmak için userEvent paketini imdirmek gerekiyor. 
`@testing-library/user-event@14.0`
- fireEvent'in modern ve daha gelişmiş versiyonu
- tetiklediğimiz olaylar, gerçek bir kullanıcının yapacağı gibi belirli bir gecikmenin
ardından gerçekleşiyor.
- gecikme yaşandığından "aasync-await" ile kullanırız.
- kullanmak için de ilgili test içinde kurulumunu da yapmak gerekiyor.



# Expect



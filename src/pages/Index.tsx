import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const giftCards = [
    { id: 1, value: 10, price: 10, popular: false },
    { id: 2, value: 25, price: 25, popular: true },
    { id: 3, value: 50, price: 50, popular: false },
    { id: 4, value: 100, price: 100, popular: false },
    { id: 5, value: 200, price: 200, popular: false }
  ];

  const reviews = [
    { name: "Анна К.", rating: 5, text: "Моментальная доставка кода! Пользуюсь уже третий раз." },
    { name: "Михаил Р.", rating: 5, text: "Отличный сервис, карты работают без проблем." },
    { name: "Елена П.", rating: 5, text: "Быстро, надежно, удобно. Рекомендую!" }
  ];

  const faqs = [
    {
      question: "Как быстро я получу код карты?",
      answer: "Коды Apple Gift Card доставляются мгновенно на вашу электронную почту после подтверждения платежа."
    },
    {
      question: "Можно ли использовать карты в любой стране?",
      answer: "Наши Apple Gift Card действительны для использования в App Store, iTunes Store и других сервисах Apple."
    },
    {
      question: "Есть ли срок действия у карт?",
      answer: "Apple Gift Card не имеют срока действия и могут быть использованы в любое время."
    },
    {
      question: "Что делать, если код не работает?",
      answer: "Мы предоставляем полную гарантию на все коды. Обратитесь в поддержку, и мы решим проблему в течение 24 часов."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <Icon name="Gift" size={18} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-[#1D1D1F]">Apple Cards</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-[#86868B] hover:text-[#1D1D1F] transition-colors">Каталог</a>
              <a href="#reviews" className="text-[#86868B] hover:text-[#1D1D1F] transition-colors">Отзывы</a>
              <a href="#faq" className="text-[#86868B] hover:text-[#1D1D1F] transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F5F5F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
            Apple Gift Cards
          </h1>
          <p className="text-xl text-[#86868B] mb-12 max-w-2xl mx-auto leading-relaxed">
            Мгновенная доставка цифровых Apple Gift Card. 
            Пополните свой Apple ID или подарите близким доступ к миллионам приложений, игр и развлечений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[#007AFF] hover:bg-[#0051D5] text-white px-8 py-3 text-lg">
              Выбрать карту
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-[#D2D2D7] text-[#1D1D1F] px-8 py-3 text-lg">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1D1D1F] mb-4">Выберите номинал</h2>
            <p className="text-lg text-[#86868B]">Все карты доставляются мгновенно</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {giftCards.map((card) => (
              <Card 
                key={card.id} 
                className={`relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                  selectedCard === card.id 
                    ? 'border-[#007AFF] shadow-lg' 
                    : 'border-[#D2D2D7] hover:border-[#007AFF]'
                } ${card.popular ? 'ring-2 ring-[#007AFF] ring-opacity-20' : ''}`}
                onClick={() => setSelectedCard(card.id)}
              >
                {card.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#007AFF] text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-2xl flex items-center justify-center">
                    <Icon name="Gift" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#1D1D1F]">${card.value}</CardTitle>
                  <CardDescription className="text-[#86868B]">Apple Gift Card</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-[#1D1D1F] mb-4">${card.price}</div>
                  <Button 
                    className={`w-full ${
                      selectedCard === card.id 
                        ? 'bg-[#007AFF] text-white' 
                        : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#007AFF] hover:text-white'
                    } transition-colors`}
                  >
                    {selectedCard === card.id ? 'Выбрано' : 'Выбрать'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {selectedCard && (
            <div className="mt-12 bg-[#F5F5F7] rounded-2xl p-8 text-center animate-fade-in">
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">
                Карта ${giftCards.find(c => c.id === selectedCard)?.value} готова к покупке
              </h3>
              <p className="text-[#86868B] mb-6">Код будет отправлен на вашу электронную почту мгновенно</p>
              <Button size="lg" className="bg-[#007AFF] hover:bg-[#0051D5] text-white px-12 py-3">
                Купить сейчас
                <Icon name="ShoppingCart" size={20} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1D1D1F] mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-[#86868B]">Более 10,000 довольных покупателей</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-[#D2D2D7] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#007AFF] rounded-full flex items-center justify-center text-white font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-[#1D1D1F]">{review.name}</div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-[#FF9500] fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#86868B] leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1D1D1F] mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-[#86868B]">Ответы на популярные вопросы о наших услугах</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[#D2D2D7] rounded-lg px-6">
                <AccordionTrigger className="text-left text-[#1D1D1F] font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#86868B] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1D1F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <Icon name="Gift" size={18} className="text-white" />
              </div>
              <span className="text-xl font-semibold">Apple Cards</span>
            </div>
            <p className="text-[#86868B] mb-6">Надежный поставщик Apple Gift Card с мгновенной доставкой</p>
            <div className="flex justify-center space-x-6 text-sm text-[#86868B]">
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Поддержка</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
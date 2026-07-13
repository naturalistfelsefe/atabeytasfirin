/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, MessageCircle, Wheat, Instagram, Coffee, Cake, Croissant, Flame, Home } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'orders'>('home');
  
  const phoneNumberDisplay = "0246 400 25 25";
  const phoneNumberCall = "+902464002525";
  const whatsappLink = `https://wa.me/902464002525`;
  const instagramLink = "https://www.instagram.com/atabeytasfirin/";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3B32] font-sans selection:bg-amber-200 pb-24 md:pb-0">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#FDFBF7] flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-amber-700 mb-6"
            >
              <Flame size={64} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-2xl text-amber-900 font-medium"
            >
              Fırınımız Isınıyor...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Header (Hidden on Mobile) */}
      <header className="hidden md:flex bg-[#FDFBF7]/95 backdrop-blur-md py-4 justify-between items-center px-4 md:px-8 relative z-40 border-b border-amber-100/50 shadow-sm sticky top-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer flex-shrink-0"
          onClick={() => setActiveTab('home')}
        >
          <img 
            src="/yenilogo2.png" 
            alt="Atabey Taş Fırın" 
            className="h-16 w-auto object-contain mix-blend-multiply" 
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex items-center gap-6">
          <button onClick={() => setActiveTab('products')} className={`font-medium transition-colors ${activeTab === 'products' ? 'text-amber-800' : 'text-[#6D5D51] hover:text-amber-700'}`}>
            Ürünlerimiz
          </button>
          <button onClick={() => setActiveTab('orders')} className={`font-medium transition-colors ${activeTab === 'orders' ? 'text-amber-800' : 'text-[#6D5D51] hover:text-amber-700'}`}>
             Özel Siparişler
          </button>
          <div className="w-px h-6 bg-stone-300"></div>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition-colors bg-pink-50 p-2 rounded-full">
            <Instagram size={18} />
          </a>
          <a href={`tel:${phoneNumberCall}`} className="flex items-center gap-2 text-amber-800 font-medium hover:text-amber-600 transition-colors bg-amber-50 px-4 py-2 rounded-full">
            <PhoneCall size={16} />
            {phoneNumberDisplay}
          </a>
        </div>
      </header>

      <main className="relative overflow-hidden min-h-[100vh]">
        <AnimatePresence mode="wait">
          
          {/* HOME TAB */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="md:bg-[url('/arkaplanbilgisayar.png')] md:bg-cover md:bg-center bg-[url('/mobilarkaplan.png')] bg-[length:120%] bg-left bg-no-repeat min-h-[100vh] flex flex-col justify-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 md:hidden pointer-events-none"></div>

              <section className="relative z-10 text-center py-12 md:py-16 px-4 flex flex-col items-center">
                <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 bg-white/80 p-4 rounded-full shadow-sm backdrop-blur-md md:hidden"
                  >
                    <img 
                      src="/yenilogo2.png" 
                      alt="Atabey Taş Fırın" 
                      className="h-16 w-auto object-contain mix-blend-multiply" 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-sm font-medium mb-6 border border-amber-200 shadow-[0_0_15px_rgba(255,255,255,1)]">
                    <Wheat size={16} /> 1986'dan Beri Gelen Lezzet
                  </div>

                  <div className="mb-8">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#3A2D25] font-bold mb-4 tracking-tight max-w-4xl mx-auto leading-tight [text-shadow:_0_2px_4px_rgba(255,255,255,0.8),_0_0_30px_rgba(255,255,255,1),_0_0_60px_rgba(255,255,255,1)]">
                      Odun Ateşinde <span className="text-amber-700 italic">Pişen</span><br />
                      Gerçek Lezzetler
                    </h2>
                    
                    <p className="text-lg md:text-xl text-[#3A2D25] font-bold md:font-semibold max-w-2xl mx-auto leading-relaxed [text-shadow:_0_1px_2px_rgba(255,255,255,0.9),_0_0_20px_rgba(255,255,255,1),_0_0_40px_rgba(255,255,255,1)]">
                      Yılların tecrübesiyle, en doğal malzemeleri kullanarak hazırladığımız taş fırın ekmeklerimiz ve pastane ürünlerimiz her gün sıcacık sizleri bekliyor.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
                    <button 
                      onClick={() => setActiveTab('products')}
                      className="px-8 py-4 bg-[#3A2D25] hover:bg-[#2A201A] text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.5)] w-full sm:w-auto text-lg"
                    >
                      Ürünlerimizi Keşfedin
                    </button>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className="px-8 py-4 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.8)] w-full sm:w-auto text-lg border border-amber-200"
                    >
                      Özel Sipariş Verin
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* PRODUCTS TAB */}
          {activeTab === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <section className="py-12 md:py-20 bg-white relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#3A2D25] font-bold mb-4">Nelerimiz Var?</h2>
                    <p className="text-[#6D5D51] max-w-2xl mx-auto text-lg">Taş fırınımızdan ve pastanemizden her gün taptaze çıkan lezzetlerimiz.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-amber-100 text-center shadow-sm hover:-translate-y-1 transition-transform">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mx-auto mb-6">
                        <Flame size={32} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#3A2D25] mb-3">Taş Fırın Ekmeği</h3>
                      <p className="text-[#6D5D51]">Odun ateşinde, geleneksel yöntemlerle pişen çıtır çıtır ekmek çeşitlerimiz.</p>
                    </div>

                    <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-amber-100 text-center shadow-sm hover:-translate-y-1 transition-transform">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mx-auto mb-6">
                        <Croissant size={32} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#3A2D25] mb-3">Simit & Poğaça</h3>
                      <p className="text-[#6D5D51]">Güne sıcak ve taze bir başlangıç yapmak isteyenler için sabah lezzetlerimiz.</p>
                    </div>

                    <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-amber-100 text-center shadow-sm hover:-translate-y-1 transition-transform">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mx-auto mb-6">
                        <Coffee size={32} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#3A2D25] mb-3">Tatlı & Tuzlu</h3>
                      <p className="text-[#6D5D51]">Çay saatlerinize eşlik edecek özenle hazırlanmış kurabiye ve atıştırmalıklar.</p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <motion.div
              key="orders"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <section className="py-12 md:py-24 bg-[#4A3B32] text-amber-50 relative z-10 overflow-hidden min-h-[50vh] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                  <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    <div className="flex-1 text-center md:text-left">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/50 text-amber-200 text-sm font-medium mb-6 border border-amber-700/50">
                        <Cake size={16} /> Size Özel Üretim
                      </div>
                      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Özel Siparişler & Pasta</h2>
                      <p className="text-[#D8C7B9] text-lg mb-8 max-w-xl mx-auto md:mx-0">
                        Doğum günü, kutlama, nişan veya özel etkinlikleriniz için istediğiniz çeşit ve modelde özel pasta hazırlıyoruz. Hayalinizdeki lezzeti gerçeğe dönüştürmek için bizimle iletişime geçin.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a 
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-medium transition-all shadow-lg flex items-center justify-center gap-2 group"
                        >
                          <MessageCircle size={20} />
                          WhatsApp Hattı
                        </a>
                        <a 
                          href={`tel:${phoneNumberCall}`}
                          className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-medium transition-all flex items-center justify-center gap-2"
                        >
                          <PhoneCall size={20} />
                          {phoneNumberDisplay}
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 w-full max-w-md hidden md:flex items-center justify-center">
                      <div className="aspect-square bg-[#3A2D25] rounded-full flex items-center justify-center border-[8px] border-[#2A201A] p-12 shadow-2xl relative">
                        <Cake size={140} className="text-amber-700/80" strokeWidth={1} />
                        <div className="absolute top-10 right-10 w-8 h-8 bg-amber-500/20 rounded-full blur-xl"></div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-lg mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <iframe 
                      src="https://www.instagram.com/reel/DRad3RNCOdz/embed/?hidecaption=true&autoplay=1" 
                      width="100%" 
                      height="650" 
                      frameBorder="0" 
                      scrolling="no" 
                      allow="autoplay; encrypted-media"
                    ></iframe>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#2A201A] text-amber-100 py-12 text-center border-t border-amber-900/30 pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <img 
            src="/yenilogo2.png" 
            alt="Atabey Taş Fırın" 
            className="h-20 w-auto opacity-50 grayscale contrast-200 mb-6 object-contain" 
            referrerPolicy="no-referrer"
          />
          <p className="text-sm text-[#8D7D71]">© {new Date().getFullYear()} Atabey Taş Fırın & Pastane. Tüm hakları saklıdır.</p>
        </div>
      </footer>

      {/* Top Left Floating Actions (Mobile only) */}
      <AnimatePresence>
        {activeTab === 'home' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-6 left-4 z-50 md:hidden"
          >
            <a 
              href={instagramLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <Instagram size={24} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Floating Actions (Mobile only or everywhere) */}
      <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 md:hidden">
        <a 
          href={`tel:${phoneNumberCall}`}
          className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          <PhoneCall size={20} />
        </a>
        <a 
          href={whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Desktop Floating WhatsApp */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50">
        <a 
          href={whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all"
        >
          <MessageCircle size={32} />
        </a>
      </div>

      {/* Fixed Bottom Navigation (Mobile Main Nav) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-amber-100/50 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)] md:hidden">
        <div className="flex justify-around items-center px-4 py-2">
          
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center w-20 py-2 relative transition-colors ${activeTab === 'home' ? 'text-amber-800' : 'text-[#8D7D71]'}`}
          >
            <Home size={22} className={`mb-1 transition-transform ${activeTab === 'home' ? 'scale-110' : ''}`} />
            <span className="text-[10px] font-bold tracking-wide">ANASAYFA</span>
            {activeTab === 'home' && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-2 w-8 h-1 bg-amber-800 rounded-t-full" />
            )}
          </button>

          <button 
            onClick={() => setActiveTab('products')}
            className={`flex flex-col items-center justify-center w-20 py-2 relative transition-colors ${activeTab === 'products' ? 'text-amber-800' : 'text-[#8D7D71]'}`}
          >
            <Wheat size={22} className={`mb-1 transition-transform ${activeTab === 'products' ? 'scale-110' : ''}`} />
            <span className="text-[10px] font-bold tracking-wide">ÜRÜNLER</span>
            {activeTab === 'products' && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-2 w-8 h-1 bg-amber-800 rounded-t-full" />
            )}
          </button>

          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex flex-col items-center justify-center w-20 py-2 relative transition-colors ${activeTab === 'orders' ? 'text-amber-800' : 'text-[#8D7D71]'}`}
          >
            <Cake size={22} className={`mb-1 transition-transform ${activeTab === 'orders' ? 'scale-110' : ''}`} />
            <span className="text-[10px] font-bold tracking-wide">SİPARİŞ</span>
            {activeTab === 'orders' && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-2 w-8 h-1 bg-amber-800 rounded-t-full" />
            )}
          </button>

        </div>
      </nav>
    </div>
  );
}

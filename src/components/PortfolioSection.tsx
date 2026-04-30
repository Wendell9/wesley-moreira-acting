import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

// Estilos obrigatórios do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Dependências do Lightbox (Ampliar)
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 1. Carregamento automático de imagens da pasta (como antes)
const imageModules = import.meta.glob('/src/assets/FotosPortfólio/*.{png,jpg,jpeg,webp}', { 
  eager: true, 
  query: '?url',
  import: 'default' 
});
const portfolioImages = Object.values(imageModules) as string[];

export function PortfolioSection() {
  // Estado para gerenciar o Lightbox (se está aberto e qual foto)
  const [openImageIndex, setOpenImageIndex] = useState(-1);
  const isOpen = openImageIndex !== -1;

  // Prepara os slides para o Lightbox: converte o array de URLs em objetos { src: url }
  const slides = portfolioImages.map(url => ({ src: url }));

  return (
    <section id="destaques" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 mb-3">Destaques</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Explore meus trabalhos e detalhes de projetos em destaque.
        </p>
      </div>
      
      {/* Container que permite que as fotos parciais nas bordas apareçam */}
      <div className="w-full relative px-16">
        {portfolioImages.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            Adicione fotos em <code className="bg-gray-100 p-1 rounded">src/assets/portfolio</code> para vê-las aqui.
          </p>
        ) : (
          <>
            <Swiper
              // Módulos necessários (destaque para EffectCoverflow)
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}

            style={{
                "--swiper-navigation-color": "#ffffff", // Muda a cor da seta (ex: cinza bem escuro)
                "--swiper-pagination-color": "#ffffff", // Muda a cor dos pontinhos de baixo
            } as React.CSSProperties}
              
              // Configurações para "Passar uma foto por vez com destaque"
              centeredSlides={true}       // Mantém o slide ativo no centro
              slidesPerView={1.5}        // Mostra 1 inteiro + "meios" nas laterais
              effect={'coverflow'}      // Dá o efeito de zoom/profundidade
              coverflowEffect={{
                rotate: 0,             // Sem rotação 3D
                stretch: 0,            // Sem esticar
                depth: 100,            // Profundidade da 'foto no fundo'
                modifier: 1,           // Intensidade
                slideShadows: true,    // Sombras sutis nas fotos não ativas
              }}
              
              spaceBetween={30}         // Espaço entre os slides
              loop={true}                // Carrossel infinito
              navigation={true}         // Setas
              pagination={{ clickable: true }} // Pontinhos
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              className="w-full max-w-7xl mx-auto portfolio-swiper"
            >
              {portfolioImages.map((src, index) => (
                <SwiperSlide key={index}>
                  {/* Container interno da foto que recebe o destaque CSS */}
                  <div 
                    className="
                      aspect-[4/3] overflow-hidden cursor-zoom-in group 
                      transition-all duration-300 ease-in-out portfolio-image-frame
                    "
                    onClick={() => setOpenImageIndex(index)} // Abre o Lightbox
                  >
                    <img 
                      src={src} 
                      alt={`Projeto ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay sutil para indicar que é clicável */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white bg-black/60 p-3 rounded-full">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* O Lightbox (Galería em Tela Cheia) */}
            <Lightbox
              open={isOpen}
              close={() => setOpenImageIndex(-1)}
              slides={slides}
              index={openImageIndex}
              // Opcional: Adiciona controles extras
              // plugins={[Zoom]} 
            />
          </>
        )}
      </div>
    </section>
  );
}
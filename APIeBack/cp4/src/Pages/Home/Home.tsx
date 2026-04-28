const Home = () =>{
    return(
        <>
            <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 hero-text">
                    O Mundo das
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"> Miniaturas</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                    Descubra a beleza e a precisão artesanal em escala reduzida. 
                    Cada detalhe conta uma história, cada peça é uma obra de arte.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#galeria" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-full transition transform hover:scale-105 shadow-lg">
                    Ver Galeria
                    </a>
                    <a href="#categorias" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold px-8 py-4 rounded-full transition">
                    Explorar Categorias
                    </a>
                </div>
                </div>

                <div className="absolute top-20 left-10 text-indigo-200 text-6xl opacity-20">
                <i className="fas fa-cube"></i>
                </div>
                <div className="absolute top-40 right-16 text-purple-200 text-5xl opacity-20">
                <i className="fas fa-microscope"></i>
                </div>
                <div className="absolute bottom-20 left-20 text-blue-200 text-4xl opacity-20">
                <i className="fas fa-drafting-compass"></i>
                </div>
            </section>

            <section id="galeria" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 hero-text">Nossa Galeria</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Uma seleção das mais impressionantes miniaturas criadas com paixão e precisão meticulosa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1691315035641-4c96871055c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Miniatura de cidade" className="w-full h-64 object-cover gallery-img transition"/>
                        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">Cidade</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Cidade em Miniatura</h3>
                        <p className="text-gray-600 mb-4">Detalhada réplica de um centro urbano com edifícios, veículos e pessoas em escala 1:87.</p>
                        <div className="flex justify-between items-center">
                        <span className="text-indigo-600 font-medium">Escultura em Resina</span>
                        <span className="text-sm text-gray-500">38 peças</span>
                        </div>
                    </div>
                    </div>

                    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1547143379-3374bbefa14a?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Miniatura de veículo" className="w-full h-64 object-cover gallery-img transition"/>
                        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Veículos</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Carro Clássico</h3>
                        <p className="text-gray-600 mb-4">Modelo em escala 1:18 do icônico carro dos anos 60, com acabamento metálico e interior detalhado.</p>
                        <div className="flex justify-between items-center">
                        <span className="text-indigo-600 font-medium">Metal & Plástico</span>
                        <span className="text-sm text-gray-500">12 peças</span>
                        </div>
                    </div>
                    </div>

                    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Miniatura de natureza" className="w-full h-64 object-cover gallery-img transition"/>
                        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Natureza</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Ecossistema Florestal</h3>
                        <p className="text-gray-600 mb-4">Miniatura de um ambiente natural com árvores, animais e elementos hidrológicos em escala reduzida.</p>
                        <div className="flex justify-between items-center">
                        <span className="text-indigo-600 font-medium">Resina & Madeira</span>
                        <span className="text-sm text-gray-500">24 peças</span>
                        </div>
                    </div>
                    </div>

                    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Miniatura de arquitetura" className="w-full h-64 object-cover gallery-img transition"/>
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Arquitetura</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Catedral Gótica</h3>
                        <p className="text-gray-600 mb-4">Réplica detalhada de uma catedral medieval com vitrais, torres e esculturas em escala 1:50.</p>
                        <div className="flex justify-between items-center">
                        <span className="text-indigo-600 font-medium">Pedra & Resina</span>
                        <span className="text-sm text-gray-500">18 peças</span>
                        </div>
                    </div>
                    </div>

                    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                        <img src="https://media.istockphoto.com/id/1396518375/pt/foto/chinese-astronaut-over-the-main-module-tianhe-on-the-space-station-tiangong.webp?a=1&b=1&s=612x612&w=0&k=20&c=m769tUJCpV5p9R-55nrJQTdwTfW6vFfHPg6loZHr3Fk=" alt="Miniatura de espaço" className="w-full h-64 object-cover gallery-img transition"/>
                        <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">Espaço</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Estação Espacial</h3>
                        <p className="text-gray-600 mb-4">Modelo funcional de uma estação orbital com módulos interconectados e detalhes técnicos precisos.</p>
                        <div className="flex justify-between items-center">
                        <span className="text-indigo-600 font-medium">Alumínio & Plástico</span>
                        <span className="text-sm text-gray-500">8 peças</span>
                        </div>
                    </div>
                    </div>


                    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1760007418266-f08947dd3db9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Miniatura de personagem" className="w-full h-64 object-cover gallery-img transition" />
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">Personagens</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Herói Fantástico</h3>
                        <p className="text-gray-600 mb-4">Figura artesanal de um personagem de fantasia com armadura detalhada e acessórios intercambiáveis.</p>
                        <div className="flex justify-between items-center">
                        <span className="text-indigo-600 font-medium">Resina Pintada à Mão</span>
                        <span className="text-sm text-gray-500">32 peças</span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-full transition">
                    Ver Todas as Miniaturas
                    </a>
                </div>
                </div>
            </section>


            <section id="categorias" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 hero-text">Categorias</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore nossas coleções temáticas e descubra o mundo fascinante das miniaturas em diferentes estilos e escalas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="category-badge bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-city text-2xl text-indigo-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Cidades & Urbanismo</h3>
                    <p className="text-gray-600 text-sm mb-4">Réplicas detalhadas de centros urbanos, bairros históricos e ambientes metropolitanos.</p>
                    <span className="text-indigo-600 text-sm font-medium">128 peças</span>
                    </div>


                    <div className="category-badge bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-car text-2xl text-purple-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Veículos</h3>
                    <p className="text-gray-600 text-sm mb-4">Carros clássicos, motocicletas, aviões e outros meios de transporte em escala reduzida.</p>
                    <span className="text-indigo-600 text-sm font-medium">96 peças</span>
                    </div>

                    <div className="category-badge bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-tree text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Natureza</h3>
                    <p className="text-gray-600 text-sm mb-4">Ecossistemas, paisagens naturais, animais e ambientes selvagens em miniatura.</p>
                    <span className="text-indigo-600 text-sm font-medium">74 peças</span>
                    </div>

                    <div className="category-badge bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-monument text-2xl text-blue-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Arquitetura</h3>
                    <p className="text-gray-600 text-sm mb-4">Edifícios históricos, monumentos famosos e estruturas arquitetônicas icônicas.</p>
                    <span className="text-indigo-600 text-sm font-medium">112 peças</span>
                    </div>

                    <div className="category-badge bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-rocket text-2xl text-gray-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Espaço & Ciência</h3>
                    <p className="text-gray-600 text-sm mb-4">Foguetes, satélites, estações espaciais e modelos científicos precisos.</p>
                    <span className="text-indigo-600 text-sm font-medium">42 peças</span>
                    </div>

                    <div className="category-badge bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-user-ninja text-2xl text-red-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Personagens</h3>
                    <p className="text-gray-600 text-sm mb-4">Figuras de heróis, personagens históricos, criaturas fantásticas e figuras lendárias.</p>
                    <span className="text-indigo-600 text-sm font-medium">89 peças</span>
                    </div>

                    <div className="category-badge bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-ship text-2xl text-yellow-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Navios & Marítimo</h3>
                    <p className="text-gray-600 text-sm mb-4">Barcos históricos, navios de guerra, iates luxuosos e embarcações tradicionais.</p>
                    <span className="text-indigo-600 text-sm font-medium">56 peças</span>
                    </div>

                    <div className="category-badge bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-home text-2xl text-pink-600"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Casas & Interiores</h3>
                    <p className="text-gray-600 text-sm mb-4">Mini-casas, casas de bonecas e réplicas detalhadas de interiores históricos.</p>
                    <span className="text-indigo-600 text-sm font-medium">67 peças</span>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Home;
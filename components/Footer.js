'use client';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5585999999999?text=Olá! Gostaria de saber mais sobre como limpar meu nome', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-800">
          <div>
            <h3 className="text-2xl font-bold mb-3">Pronto para limpar seu nome?</h3>
            <p className="text-gray-400">Comece sua consulta agora mesmo e descubra quanto você pode economizar</p>
          </div>
          <div className="flex gap-4 items-center justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Consultar Agora
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              WhatsApp
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <div className="text-sm font-bold">SERASA</div>
                <div className="text-xs text-gray-400">Limpa Nome</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Limpe seu nome online, recupere seu crédito e volte a viver sem dívidas.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">SERVIÇOS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Consultar CPF</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Negociar Dívidas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Simular Acordo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recuperar Crédito</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">EMPRESA</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreira</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">SUPORTE</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-8 pb-8 border-b border-gray-800">
          <p className="text-sm text-gray-400 mb-4">Certificações e Segurança</p>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-gray-800 px-4 py-2 rounded text-xs font-semibold">🔒 SSL Seguro</div>
            <div className="bg-gray-800 px-4 py-2 rounded text-xs font-semibold">✓ Verificado</div>
            <div className="bg-gray-800 px-4 py-2 rounded text-xs font-semibold">🛡️ Proteção LGPD</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Serasa Limpa Nome. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              🔗 LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              📘 Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              🐦 Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

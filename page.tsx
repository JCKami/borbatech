"use client"

import { Monitor, Smartphone, Wifi, HardDrive, Shield, Wrench, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Home() {
  const services = [
    {
      icon: Monitor,
      title: "Manutenção de Computadores",
      description: "Diagnóstico, limpeza, troca de peças e otimização de desempenho para desktops e notebooks."
    },
    {
      icon: Smartphone,
      title: "Reparo de Celulares",
      description: "Conserto de telas, baterias, conectores e problemas de software em smartphones e tablets."
    },
    {
      icon: Wifi,
      title: "Configuração de Redes",
      description: "Instalação e configuração de redes Wi-Fi, roteadores e sistemas de internet doméstica."
    },
    {
      icon: HardDrive,
      title: "Recuperação de Dados",
      description: "Recuperação de arquivos perdidos, backup de dados e migração de sistemas."
    },
    {
      icon: Shield,
      title: "Remoção de Vírus",
      description: "Limpeza completa de malware, instalação de antivírus e proteção do sistema."
    },
    {
      icon: Wrench,
      title: "Suporte Técnico",
      description: "Instalação de programas, configuração de sistemas e suporte técnico personalizado."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TechService Pro</h1>
                <p className="text-sm text-gray-600">Técnico em Informática</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex: 8h-18h</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Informática</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Técnico especializado com mais de 5 anos de experiência em manutenção, reparo e suporte técnico. 
            Atendimento rápido, confiável e com garantia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Solicitar Orçamento
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
              Ver Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços técnicos para resolver todos os seus problemas de informática
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Por que nos escolher?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-lg">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-lg">Clientes Satisfeitos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-lg">Atendimento Rápido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Entre em Contato</h3>
            <p className="text-gray-300">
              Precisa de ajuda? Entre em contato conosco e resolveremos seu problema rapidamente!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-xl">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Telefone</h4>
              <p className="text-gray-300">(11) 99999-9999</p>
              <p className="text-sm text-gray-400 mt-1">WhatsApp disponível</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">E-mail</h4>
              <p className="text-gray-300">contato@techservice.com</p>
              <p className="text-sm text-gray-400 mt-1">Resposta em até 2h</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Localização</h4>
              <p className="text-gray-300">São Paulo, SP</p>
              <p className="text-sm text-gray-400 mt-1">Atendimento domiciliar</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Solicitar Atendimento
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Monitor className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold">TechService Pro</span>
          </div>
          <p className="text-sm">
            © 2024 TechService Pro. Todos os direitos reservados. | Técnico especializado em informática
          </p>
        </div>
      </footer>
    </div>
  )
}

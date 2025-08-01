import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

function IndexComponent() {
  return (
    <div>
      <HeroSection />
      <FiguresSection />
      <SpeakersSection />
      <CallToActionSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative  text-white overflow-hidden bg-[url(/hero.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container-max section-padding">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            TechConf
            <span className="block text-3xl md:text-5xl text-blue-200">2026</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            L'avenir se code aujourd'hui. Rejoignez la révolution technologique
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button disabled className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Tickets bientôt disponibles
            </button>
            <Link to="/schedule">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">Voir le programme</button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-blue-200">16 Septembre</div>
              <div className="text-lg">2026</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-blue-200">Aix-en-Pce</div>
              <div className="text-lg">TBD</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-blue-200">Une journée</div>
              <div className="text-lg">16 Sessions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FiguresSection() {
  const stats = [
    { number: '200+', label: 'Participants', description: 'Professionnels de la tech du monde entier' },
    { number: '16', label: 'Speakers', description: 'Orateurs venant de divers horizons' },
    { number: '16', label: 'Sessions', description: 'Conférences, Quickies' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quelques chiffres clés</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez une communauté d'innovateurs, de bâtisseurs et de leaders d'opinion qui façonnent l'avenir de la technologie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function SpeakersSection() {
  const speakers = [
    {
      name: 'Marcus Rodriguez',
      title: 'Ingénieur Principal, CloudTech',
      topic: 'Faire évoluer les microservices',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Expert en systèmes distribués et architecture cloud',
    },
    {
      name: 'Dr. Aisha Patel',
      title: 'Directrice de Recherche, ML Institute',
      topic: "Développement éthique de l'IA",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'Pionnière en IA responsable et éthique du machine learning',
    },
    {
      name: 'James Kim',
      title: 'VP Ingénierie, StartupX',
      topic: 'Construire des équipes haute performance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: "A fait évoluer des équipes d'ingénierie de 5 à 500+ développeurs",
    },
    {
      name: 'Elena Volkov',
      title: 'Architecte Sécurité, CyberShield',
      topic: 'Architecture Zero Trust',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: "Experte en cybersécurité avec plus de 15 ans d'expérience",
    },
    {
      name: 'David Thompson',
      title: 'Fondateur, DevTools Inc',
      topic: "La révolution de l'expérience développeur",
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face',
      bio: "Créateur d'outils de développement utilisés par des millions de personnes",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conférenciers Vedettes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apprenez des pionniers de l'industrie et des leaders d'opinion qui façonnent l'avenir de la technologie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img src={speaker.image} alt={speaker.name} className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{speaker.title}</p>
                <p className="text-gray-600 mb-3 text-sm">{speaker.bio}</p>
                <div className="bg-primary-50 rounded-lg p-3">
                  <p className="text-primary-800 font-medium text-sm">Présentation sur : {speaker.topic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-max text-center">
        <h2 className="text-4xl font-bold mb-6">Prêt à rejoindre TechConf 2026 ?</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Ne manquez pas la conférence tech la plus innovante de l'année. Les billets en prévente se vendent rapidement !
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">Réservez votre billet - XXX €</button>
          <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">En savoir plus</button>
        </div>
        <p className="mt-6 text-blue-200">Tarif prévente jusqu'au 1er février | Prix normal : XXX €</p>
      </div>
    </section>
  );
}

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

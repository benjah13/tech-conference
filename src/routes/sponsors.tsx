import { createFileRoute } from '@tanstack/react-router';

function SponsorsComponent() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Partenaires</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes reconnaissants envers nos formidables partenaires qui rendent TechConf 2025 possible. Ces leaders de l'industrie soutiennent
            l'innovation et la croissance de la communauté.
          </p>
        </div>

        <SponsorTiers />
        <BecomeASponsor />
      </div>
    </div>
  );
}

type SponsorType = {
  name: string;
  logo: string;
  website: string;
};

function SponsorTiers() {
  const sponsors: { [key: string]: SponsorType[] } = {
    platinum: [
      {
        name: 'Gojob',
        logo: 'https://lever-client-logos.s3.us-west-2.amazonaws.com/945eb1d5-334c-4fb2-989d-9c40c33d0bf5-1650009830108.png',
        website: 'https://gojob.com',
      },
      {
        name: 'Voyage Privé',
        logo: '/voyage_prive.png',
        website: 'https://www.voyage-prive.com/offres/',
      },
    ],
    gold: [],
    silver: [],
  };

  return (
    <div className="space-y-16">
      {/* Platinum Sponsors */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Partenaires Platine</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mx-auto"></div>
        </div>
        <div className="flex flex-row justify-center gap-8">
          {sponsors.platinum.map((sponsor) => (
            <a
              href={sponsor.website}
              className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="h-36 mx-auto mb-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Gold Sponsors */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Partenaires Or</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sponsors.gold.length === 0 && <p className="text-gray-500 text-center col-span-full">Aucun partenaire or pour le moment.</p>}

          {sponsors.gold.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <a
                href={sponsor.website}
                className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-12 mx-auto mb-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Silver Sponsors */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Partenaires Argent</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.silver.length === 0 && <p className="text-gray-500 text-center col-span-full">Aucun partenaire argent pour le moment.</p>}
          {sponsors.silver.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <a
                href={sponsor.website}
                className="text-primary-600 hover:text-primary-700 font-semibold text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-10 mx-auto mb-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BecomeASponsor() {
  const sponsorshipTiers = [
    {
      name: 'Platine',
      price: '15 000€',
      color: 'from-gray-300 to-gray-500',
      features: [
        'Créneau de keynote',
        'Emplacement stand premium',
        'Logo sur tous les supports',
        "Sponsor réception d'accueil",
        '10 billets de conférence',
        'Posts dédiés réseaux sociaux',
        'Opportunité workshop personnalisé',
      ],
    },
    {
      name: 'Or',
      price: '8 000€',
      color: 'from-yellow-300 to-yellow-500',
      features: [
        'Opportunité de présentation',
        'Espace stand standard',
        'Logo sur site & supports',
        'Sponsor pause café',
        '6 billets de conférence',
        'Mentions réseaux sociaux',
        "Insert sac d'accueil",
      ],
    },
    {
      name: 'Argent',
      price: '4 000€',
      color: 'from-gray-400 to-gray-600',
      features: [
        'Espace stand entreprise',
        'Logo sur le site web',
        "Insert sac d'accueil",
        '4 billets de conférence',
        'Accès réception networking',
        'Mention réseaux sociaux',
      ],
    },
  ];

  return (
    <section className="mt-24 bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Devenez Partenaire</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Associez-vous à nous pour toucher plus de 200 professionnels de la tech et soutenir la communauté. Plusieurs opportunités de partenariat
          disponibles pour s'adapter à vos objectifs et budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sponsorshipTiers.map((tier, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className={`bg-gradient-to-r ${tier.color} text-white text-center py-3 rounded-lg mb-6`}>
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-2xl font-bold mt-1">{tier.price}</p>
            </div>

            <ul className="space-y-3">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à devenir partenaire de TechConf 2026 ?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Rejoignez les leaders de l'industrie pour soutenir l'innovation et la croissance de la communauté. Contactez notre équipe partenariats pour
          discuter de packages personnalisés et d'opportunités.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary">Télécharger le Dossier Partenariat</button>
          <button className="btn-secondary">Contacter l'Équipe Partenariats</button>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>Contact : partenaires@techconf2025.com | +33 1 23 45 67 89</p>
        </div>
      </div>
    </section>
  );
}

export const Route = createFileRoute('/sponsors')({
  component: SponsorsComponent,
});

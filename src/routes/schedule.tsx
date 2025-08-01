import { createFileRoute } from '@tanstack/react-router';

function ScheduleComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Programme de la Conférence</h1>
          <p className="text-lg text-gray-600 mb-4">Vendredi 15 Mars 2024</p>
          <p className="text-gray-500">Une journée d'innovations technologiques et de networking</p>
        </div>

        <Schedule />
      </div>
    </div>
  );
}

function Schedule() {
  const rooms = [
    { id: 'auditorium', name: 'Auditorium Principal', capacity: 300 },
    { id: 'salle-a', name: 'Salle Alpha', capacity: 80 },
    { id: 'salle-b', name: 'Salle Beta', capacity: 75 },
  ];

  const scheduleData = [
    {
      time: '8:00 - 9:00',
      isBreak: true,
      breakTitle: 'Accueil & Petit-déjeuner',
      breakType: 'breakfast',
    },
    {
      time: '9:00 - 10:00',
      sessions: {
        auditorium: {
          title: "Keynote d'Ouverture: L'Avenir de la Technologie",
          speaker: {
            name: 'Sarah Chen',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
            role: 'CTO, TechCorp',
          },
          type: 'conférence',
          duration: '50min',
          track: 'Général',
        },
        'salle-a': null,
        'salle-b': null,
      },
    },
    {
      time: '10:00 - 10:30',
      isBreak: true,
      breakTitle: 'Pause Café & Networking',
      breakType: 'break',
    },
    {
      time: '10:30 - 11:30',
      sessions: {
        auditorium: null,
        'salle-a': {
          title: "IA en Production: Retours d'Expérience",
          speaker: {
            name: 'Marcus Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
            role: 'Lead AI Engineer',
          },
          type: 'conférence',
          duration: '50min',
          track: 'Intelligence Artificielle',
        },
        'salle-b': {
          title: 'Architecture Frontend Moderne',
          speaker: {
            name: 'Elena Volkov',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
            role: 'Frontend Architect',
          },
          type: 'conférence',
          duration: '50min',
          track: 'Frontend',
        },
      },
    },
    {
      time: '11:30 - 12:30',
      sessions: {
        auditorium: {
          title: "Panel: Éthique de l'IA",
          speaker: {
            name: 'Dr. Aisha Patel',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face',
            role: 'Modératrice',
          },
          type: 'conférence',
          duration: '50min',
          track: 'Intelligence Artificielle',
        },
        'salle-a': {
          title: 'Sécurité Zero Trust',
          speaker: {
            name: 'David Thompson',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
            role: 'Security Expert',
          },
          type: 'lightning',
          duration: '20min',
          track: 'Cybersécurité',
        },
        'salle-b': {
          title: 'Optimisation React Avancée',
          speaker: {
            name: 'Marie Dubois',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face',
            role: 'React Specialist',
          },
          type: 'conférence',
          duration: '50min',
          track: 'Frontend',
        },
      },
    },
    {
      time: '12:30 - 14:00',
      isBreak: true,
      breakTitle: 'Déjeuner & Showcase Sponsors',
      breakType: 'lunch',
    },
    {
      time: '14:00 - 15:00',
      sessions: {
        auditorium: {
          title: 'Microservices à Grande Échelle',
          speaker: {
            name: 'Sophie Laurent',
            avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face',
            role: 'Solution Architect',
          },
          type: 'conférence',
          duration: '50min',
          track: 'Architecture',
        },
        'salle-a': {
          title: 'Machine Learning en Production',
          speaker: {
            name: 'Alex Rousseau',
            avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=60&h=60&fit=crop&crop=face',
            role: 'ML Engineer',
          },
          type: 'lightning',
          duration: '20min',
          track: 'Intelligence Artificielle',
        },
        'salle-b': {
          title: 'Vue.js vs React: Comparaison',
          speaker: {
            name: 'Julie Bernard',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
            role: 'Frontend Lead',
          },
          type: 'lightning',
          duration: '20min',
          track: 'Frontend',
        },
      },
    },
    {
      time: '15:00 - 15:30',
      isBreak: true,
      breakTitle: 'Pause Café',
      breakType: 'break',
    },
    {
      time: '15:30 - 16:30',
      sessions: {
        auditorium: {
          title: 'Leadership Technique',
          speaker: {
            name: 'Camille Durand',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face',
            role: 'Engineering Manager',
          },
          type: 'conférence',
          duration: '50min',
          track: 'Management',
        },
        'salle-a': {
          title: 'Contributions Open Source',
          speaker: {
            name: 'Lucas Petit',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
            role: 'Open Source Advocate',
          },
          type: 'lightning',
          duration: '20min',
          track: 'Communauté',
        },
        'salle-b': {
          title: 'Performance Web Avancée',
          speaker: {
            name: 'Emma Leroy',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
            role: 'Performance Expert',
          },
          type: 'lightning',
          duration: '20min',
          track: 'Frontend',
        },
      },
    },
    {
      time: '16:30 - 18:00',
      isBreak: true,
      breakTitle: 'Apéritif de Clôture & Networking',
      breakType: 'afterwork',
    },
  ];

  const getTypeStyle = (type: string) => {
    const styles = {
      conférence: 'bg-blue-100 text-blue-800 border-l-4 border-blue-500',
      lightning: 'bg-orange-100 text-orange-800 border-l-4 border-orange-500',
    };
    return styles[type as keyof typeof styles] || 'bg-gray-50 text-gray-700 border-l-4 border-gray-300';
  };

  const getBreakStyle = (breakType: string) => {
    const styles = {
      breakfast: 'bg-green-50 text-green-800 border border-green-200',
      break: 'bg-gray-50 text-gray-700 border border-gray-200',
      lunch: 'bg-yellow-50 text-yellow-800 border border-yellow-200',
      afterwork: 'bg-purple-50 text-purple-800 border border-purple-200',
    };
    return styles[breakType as keyof typeof styles] || 'bg-gray-50 text-gray-700 border border-gray-200';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Table Header */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-4 px-6 font-semibold text-gray-900 w-32">Horaire</th>
              {rooms.map((room) => (
                <th key={room.id} className="text-left py-4 px-6 font-semibold text-gray-900 min-w-80">
                  <div className="flex flex-col">
                    <span>{room.name}</span>
                    <span className="text-sm font-normal text-gray-500">{room.capacity} places</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((timeSlot, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium text-gray-900 bg-gray-50 border-r border-gray-200">{timeSlot.time}</td>
                {timeSlot.isBreak ? (
                  <td colSpan={4} className="py-6 px-6">
                    <div className={`p-6 rounded-lg text-center ${getBreakStyle(timeSlot.breakType)}`}>
                      <h3 className="text-lg font-semibold mb-2">{timeSlot.breakTitle}</h3>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm opacity-75">
                          {timeSlot.breakType === 'breakfast' && '🥐 Petit-déjeuner'}
                          {timeSlot.breakType === 'break' && '☕ Pause'}
                          {timeSlot.breakType === 'lunch' && '🍽️ Déjeuner'}
                          {timeSlot.breakType === 'afterwork' && '🍻 Apéritif'}
                        </span>
                      </div>
                    </div>
                  </td>
                ) : (
                  rooms.map((room) => {
                    const session = timeSlot.sessions?.[room.id as keyof typeof timeSlot.sessions];
                    return (
                      <td key={room.id} className="py-4 px-6 align-top">
                        {session ? (
                          <div className={`p-4 rounded-lg ${getTypeStyle(session.type)}`}>
                            <div className="flex items-start gap-3">
                              {session.speaker && (
                                <img
                                  src={session.speaker.avatar}
                                  alt={session.speaker.name}
                                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-sm leading-tight mb-1">{session.title}</h3>
                                {session.speaker && (
                                  <div className="text-xs space-y-1">
                                    <p className="font-medium">{session.speaker.name}</p>
                                    <p className="opacity-75">{session.speaker.role}</p>
                                  </div>
                                )}
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded">
                                    {session.type} ({session.duration})
                                  </span>
                                  <span className="text-xs opacity-75">{session.track}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="h-full min-h-16"></div>
                        )}
                      </td>
                    );
                  })
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Types de sessions</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { type: 'keynote', label: 'Keynote' },
            { type: 'conférence', label: 'Conférence' },
            { type: 'atelier', label: 'Atelier' },
            { type: 'panel', label: 'Panel' },
            { type: 'pause', label: 'Pause' },
            { type: 'social', label: 'Social' },
          ].map(({ type, label }) => (
            <div key={type} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${getTypeStyle(type).split(' ')[0]}`}></div>
              <span className="text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/schedule')({
  component: ScheduleComponent,
});

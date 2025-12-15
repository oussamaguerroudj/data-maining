import React from 'react';
import { Users } from 'lucide-react';

const Header = ({ onNavigateToAdmin }) => {
  return (
<div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          {/* Circular Logo with Border - Exactly like Algérie Poste style */}
          <div className="relative">
            <img 
              src="/src/assets/logo.webp" 
              alt="Algérie Poste Logo" 
              className="w-28 h-28 object-contain rounded-full bg-white p-3 ring-4 ring-white/30 shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-2">Algérie Poste</h1>
            <p className="text-xl text-blue-200">Plateforme de Recrutement</p>
          </div>
        </div>
        
        <p className="text-xl text-blue-100 mb-6 max-w-3xl">
          Découvrez nos opportunités d'emploi et de stages. Rejoignez une institution qui compte plus de 4000 bureaux de poste à travers le territoire national.
        </p>

        <button 
          onClick={onNavigateToAdmin}
          className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all border-2 border-white/30 flex items-center gap-2"
        >
          <Users className="w-5 h-5" />
          Espace Administration
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};
export default Header;
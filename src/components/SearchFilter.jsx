import React from 'react';
import { Search, X } from 'lucide-react';

const SearchFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  filterType, 
  setFilterType, 
  filterLocation, 
  setFilterLocation, 
  resultCount 
}) => {
  const hasFilters = searchTerm || filterType !== 'all' || filterLocation !== 'all';
  
  const resetFilters = () => {
    setSearchTerm('');
    setFilterType('all');
    setFilterLocation('all');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border-2 border-gray-100">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Rechercher un poste, stage..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
        <select 
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white"
        >
          <option value="all">Tous les types</option>
          <option value="Emploi">Emploi</option>
          <option value="Stage">Stage</option>
        </select>
        <select 
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white"
        >
          <option value="all">Toutes les wilayas</option>
          <option value="Alger">Alger</option>
          <option value="Oran">Oran</option>
          <option value="Constantine">Constantine</option>
          <option value="Annaba">Annaba</option>
          <option value="Tlemcen">Tlemcen</option>
        </select>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-600 font-medium">
          {resultCount} offre{resultCount > 1 ? 's' : ''} disponible{resultCount > 1 ? 's' : ''}
        </span>
        {hasFilters && (
          <button 
            onClick={resetFilters}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Réinitialiser les filtres
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
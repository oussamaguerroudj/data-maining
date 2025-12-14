import React from 'react';
import { Users, Mail, Phone, MapPin, GraduationCap, FileText, Upload, Award, CheckCircle } from 'lucide-react';

const ApplicationForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Candidature soumise avec succès!');
    onClose();
  };

  return (
    <div className="border-t pt-8">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Formulaire de Candidature</h3>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            Informations Personnelles
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
              <input 
                type="text"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Votre prénom"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
              <input 
                type="text"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="tel"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="0555 XX XX XX"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse Complète *</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
              <input 
                type="text"
                required
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Rue, Ville, Wilaya"
              />
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <GraduationCap className="w-5 h-5 text-green-600" />
            </div>
            Formation et Expérience
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Niveau d'Études *</label>
              <select required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white">
                <option value="">Sélectionnez votre niveau</option>
                <option>Bac</option>
                <option>Bac +2 (TS / DUT)</option>
                <option>Licence (Bac +3)</option>
                <option>Master (Bac +5)</option>
                <option>Doctorat</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Spécialité / Domaine d'Études *</label>
              <input 
                type="text"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Ex: Finance, Informatique, Gestion..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Expérience Professionnelle</label>
              <textarea 
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Décrivez vos expériences professionnelles pertinentes..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-yellow-600" />
            </div>
            Documents Requis
          </h4>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors cursor-pointer group bg-gradient-to-br from-gray-50 to-white">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-gray-700 font-bold mb-2">Curriculum Vitae (CV) *</p>
              <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" required />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors cursor-pointer group bg-gradient-to-br from-gray-50 to-white">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-gray-700 font-bold mb-2">Diplômes et Certificats</p>
              <p className="text-sm text-gray-500">Plusieurs fichiers acceptés</p>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple className="hidden" />
            </div>
          </div>
        </div>

        {/* Motivation */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Lettre de Motivation</label>
          <textarea 
            rows="6"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
            placeholder="Expliquez pourquoi vous souhaitez rejoindre Algérie Poste..."
          ></textarea>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 pt-6 border-t">
          <button 
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Soumettre ma Candidature
          </button>
          <button 
            type="button"
            onClick={onClose}
            className="px-8 py-4 border-2 border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
"use client";

import { useState } from "react";
import {
  Upload,
  Camera,
  X,
  Save,
  Globe,
  Lock,
  Users,
  Award,
  ShoppingBag,
} from "lucide-react";

export default function EditProfilePage() {
  const [profile, setProfile] = useState({
    name: "Fatou Diop",
    title: "Designer Mode & Entrepreneure",
    company: "AfroChic Collection",
    location: "Madagascar, Sénégal",
    email: "fatou.diop@example.com",
    phone: "+221 77 123 45 67",
    website: "www.afrochic.sn",
    bio: "Créatrice de mode africaine contemporaine. Passionnée par la réinvention des tissus traditionnels. Vendeuse certifiée sur Missera Market.",
    skills: [
      "Design Mode",
      "E-commerce",
      "Marketing Digital",
      "Production Textile",
    ],
    languages: [
      { name: "Français", level: "native" },
      { name: "Anglais", level: "fluent" },
      { name: "Wolof", level: "native" },
    ],
    visibility: "public",
  });

  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill),
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Modifier le profil
          </h1>
          <button className="flex items-center space-x-2 btn-primary">
            <Save className="w-4 h-4" />
            <span>Enregistrer les modifications</span>
          </button>
        </div>
        <p className="text-gray-600 mt-2">
          Complétez votre profil pour attirer plus de clients et améliorer votre
          visibilité
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column - Photo & Basics */}
        <div className="space-y-6">
          {/* Profile Photo */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Photo de profil
            </h3>
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">FD</span>
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  <Camera className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <Upload className="w-4 h-4 inline mr-2" />
                  Télécharger une photo
                </button>
                <button className="w-full py-2 text-gray-500 hover:text-gray-700">
                  Supprimer
                </button>
              </div>
            </div>
          </div>

          {/* Cover Photo */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Photo de couverture
            </h3>
            <div className="aspect-video bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg relative">
              <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40">
                <Camera className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>

          {/* Visibility */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Visibilité du profil
            </h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={profile.visibility === "public"}
                  onChange={(e) =>
                    setProfile({ ...profile, visibility: e.target.value })
                  }
                  className="text-primary"
                />
                <div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="font-medium">Public</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Tout le monde peut voir votre profil
                  </p>
                </div>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  value="connections"
                  checked={profile.visibility === "connections"}
                  onChange={(e) =>
                    setProfile({ ...profile, visibility: e.target.value })
                  }
                  className="text-primary"
                />
                <div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="font-medium">Abonnés seulement</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Seuls vos abonnés peuvent voir
                  </p>
                </div>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  checked={profile.visibility === "private"}
                  onChange={(e) =>
                    setProfile({ ...profile, visibility: e.target.value })
                  }
                  className="text-primary"
                />
                <div>
                  <div className="flex items-center">
                    <Lock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="font-medium">Privé</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Seulement vous pouvez voir
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Informations de base
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre professionnel
                </label>
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) =>
                    setProfile({ ...profile, title: e.target.value })
                  }
                  className="input-field"
                  placeholder="Ex: Designer Mode"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entreprise / Marque
                </label>
                <input
                  type="text"
                  value={profile.company}
                  onChange={(e) =>
                    setProfile({ ...profile, company: e.target.value })
                  }
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Localisation
                </label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) =>
                    setProfile({ ...profile, location: e.target.value })
                  }
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Informations de contact
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site web
                </label>
                <input
                  type="url"
                  value={profile.website}
                  onChange={(e) =>
                    setProfile({ ...profile, website: e.target.value })
                  }
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Biographie</h3>
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              rows={4}
              className="input-field"
              placeholder="Décrivez-vous, vos compétences, votre expérience..."
            />
            <p className="text-sm text-gray-500 mt-2">
              {profile.bio.length}/500 caractères
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Compétences</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {profile.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                className="flex-1 input-field py-2"
                placeholder="Ajouter une compétence"
              />
              <button
                onClick={handleAddSkill}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Ajouter
              </button>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Langues</h3>
            <div className="space-y-4">
              {profile.languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{lang.name}</span>
                  <select
                    value={lang.level}
                    onChange={(e) => {
                      const newLangs = [...profile.languages];
                      newLangs[index].level = e.target.value;
                      setProfile({ ...profile, languages: newLangs });
                    }}
                    className="border rounded-lg px-3 py-1 text-sm"
                  >
                    <option value="basic">Basique</option>
                    <option value="intermediate">Intermédiaire</option>
                    <option value="fluent">Courant</option>
                    <option value="native">Langue maternelle</option>
                  </select>
                </div>
              ))}
              <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700">
                + Ajouter une langue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

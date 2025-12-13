"use client";

import { useState } from "react";
import {
  Image as ImageIcon,
  Video,
  Link as LinkIcon,
  Bold,
  Italic,
  List,
  Code,
  Eye,
  Save,
  X,
  Globe,
  Lock,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateArticlePage() {
  const router = useRouter();
  const [article, setArticle] = useState({
    title: "",
    content: "",
    tags: [] as string[],
    visibility: "public",
    category: "business",
  });
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim() && !article.tags.includes(newTag.trim())) {
      setArticle({
        ...article,
        tags: [...article.tags, newTag.trim()],
      });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setArticle({
      ...article,
      tags: article.tags.filter((t) => t !== tag),
    });
  };

  const categories = [
    { value: "business", label: "Business & Entrepreneuriat" },
    { value: "tech", label: "Technologie" },
    { value: "fashion", label: "Mode & Design" },
    { value: "art", label: "Art & Artisanat" },
    { value: "marketing", label: "Marketing Digital" },
    { value: "finance", label: "Finance & Investissement" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Créer un article
            </h1>
            <p className="text-gray-600 mt-2">
              Partagez vos connaissances et expériences avec la communauté
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              <Eye className="w-4 h-4" />
              <span>Aperçu</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-[#006097]">
              <Save className="w-4 h-4" />
              <span>Publier</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column - Settings */}
        <div className="space-y-6">
          {/* Category */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Catégorie</h3>
            <select
              value={article.category}
              onChange={(e) =>
                setArticle({ ...article, category: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  <span className="text-sm">#{tag}</span>
                  <button
                    onClick={() => handleRemoveTag(tag)}
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
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ajouter un tag"
              />
              <button
                onClick={handleAddTag}
                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Ajouter
              </button>
            </div>
          </div>

          {/* Visibility */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Visibilité</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={article.visibility === "public"}
                  onChange={(e) =>
                    setArticle({ ...article, visibility: e.target.value })
                  }
                  className="text-primary"
                />
                <div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="font-medium">Public</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Visible par tous</p>
                </div>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  value="connections"
                  checked={article.visibility === "connections"}
                  onChange={(e) =>
                    setArticle({ ...article, visibility: e.target.value })
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
                  checked={article.visibility === "private"}
                  onChange={(e) =>
                    setArticle({ ...article, visibility: e.target.value })
                  }
                  className="text-[#0073b1"
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

          {/* Publishing Options */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Options de publication
            </h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">
                  Autoriser les commentaires
                </span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">
                  Notification aux abonnés
                </span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">Partage autorisé</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Editor */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Title */}
            <div className="p-6 border-b border-gray-200">
              <input
                type="text"
                value={article.title}
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
                placeholder="Titre de l'article..."
                className="w-full text-2xl font-bold placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Editor Toolbar */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                  <Bold className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                  <Italic className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                  <List className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                  <Code className="w-4 h-4" />
                </button>
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                  <ImageIcon className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                  <Video className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
                  <LinkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Editor Content */}
            <div className="p-6">
              <textarea
                value={article.content}
                onChange={(e) =>
                  setArticle({ ...article, content: e.target.value })
                }
                placeholder="Commencez à écrire votre article ici... Vous pouvez utiliser Markdown pour la mise en forme."
                className="w-full h-96 resize-none focus:outline-none text-gray-700"
              />
            </div>

            {/* Editor Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  {article.content.length} caractères •{" "}
                  {article.content.split(/\s+/).length} mots
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => router.back()}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                  >
                    Annuler
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    Sauvegarder brouillon
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-[#006097]">
                    Publier l'article
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 p-6 bg-cyan-50 border border-cyan-100 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">
              💡 Conseils pour un bon article
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Utilisez des titres clairs et accrocheurs</li>
              <li>• Structurez votre contenu avec des sous-titres</li>
              <li>• Ajoutez des images pertinentes</li>
              <li>• Partagez des expériences personnelles</li>
              <li>• Terminez par un appel à l'action</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

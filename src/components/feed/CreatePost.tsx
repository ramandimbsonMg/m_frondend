"use client";

import { useState } from "react";
import {
  Edit3,
  Image as ImageIcon,
  Video,
  Calendar,
  X,
  Smile,
  DollarSign,
  Tag,
} from "lucide-react";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    console.log("Creating post:", postContent);
    setPostContent("");
    setIsExpanded(false);
  };

  return (
    <div className="card">
      <div className="flex items-start space-x-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white font-bold">JD</span>
        </div>

        {/* Input Area */}
        <div className="flex-1">
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full text-left px-3 py-2 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-600 cursor-text"
          >
            Commencez un post...
          </button>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <ImageIcon className="w-5 h-5" />
                <span className="text-sm">Photo</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <Video className="w-5 h-5" />
                <span className="text-sm">Vidéo</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Événement</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm">Vendre</span>
              </button>
            </div>
            <button className="btn-primary text-sm">Publier</button>
          </div>
        </div>
      </div>

      {/* Expanded Post Modal */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between py-2 px-6 border-b border-gray-200">
              <h3 className="font-semibold text-lg">Créer une publication</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Author */}
            <div className="py-2 px-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-600">Public</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <form onSubmit={handleSubmit} className="p-4">
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="De quoi voulez-vous parler ?"
                className="w-full h-30 p-3 border-none focus:outline-none text-lg resize-none"
                autoFocus
              />

              {/* Add Tags */}
              <div className="flex items-center space-x-2 mt-2 px-4">
                <Tag className="w-4 h-4 text-primary" />
                <input
                  type="text"
                  placeholder="Ajouter des hashtags..."
                  className="flex-1 border-none focus:outline-none text-sm"
                />
              </div>

              {/* Features */}
              <div className="mt-4 py-2 px-6 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">
                  Ajouter à votre publication
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  <button className="flex flex-col items-center border-gray-200 py-1 px-3 bg-white rounded-lg border hover:border-primary cursor-pointer">
                    <ImageIcon className="w-5 h-5 text-gray-600" />
                    <span className="text-xs mt-1">Photo</span>
                  </button>
                  <button className="flex flex-col items-center border-gray-200 py-1 px-3 bg-white rounded-lg border hover:border-primary cursor-pointer">
                    <Video className="w-5 h-5 text-gray-600" />
                    <span className="text-xs mt-1">Vidéo</span>
                  </button>
                  <button className="flex flex-col items-center border-gray-200 py-1 px-3 bg-white rounded-lg border hover:border-primary cursor-pointer">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                    <span className="text-xs mt-1">Prix</span>
                  </button>
                  <button className="flex flex-col items-center border-gray-200 py-1 px-3 bg-white rounded-lg border hover:border-primary cursor-pointer">
                    <Smile className="w-5 h-5 text-gray-600" />
                    <span className="text-xs mt-1">Émoticône</span>
                  </button>
                </div>
              </div>

              {/* Post Options */}
              <div className="mt-6 space-y-4 px-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Audience</span>
                  <select className="border rounded-full px-3 py-1 text-sm border-gray-200 hover:ring-0">
                    <option>Public</option>
                    <option>Abonnés seulement</option>
                    <option>Personnalisé</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Commentaires</span>
                  <select className="border rounded-full px-3 py-1 text-sm border-gray-200 hover:ring-0">
                    <option>Tout le monde</option>
                    <option>Abonnés seulement</option>
                    <option>Désactivé</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={!postContent.trim()}
                  className="w-40 btn-primary py-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;

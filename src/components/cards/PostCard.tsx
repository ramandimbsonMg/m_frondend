"use client";

import { useState } from "react";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Bookmark,
  Send,
  X,
  User,
  ShoppingBag,
} from "lucide-react";

interface PostCardProps {
  post: {
    id: number;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
    content: string;
    media?: string;
    likes: number;
    comments: number;
    shares: number;
    time: string;
    isLiked: boolean;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-3">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-primary  flex items-center justify-center">
            <span className="text-white font-bold">{post.author.avatar}</span>
          </div>

          {/* Author Info */}
          <div>
            <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
            <p className="text-sm text-gray-600">{post.author.role}</p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-gray-500">{post.time}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-primary">Public</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bookmark className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-gray-800">{post.content}</p>

        {/* Media */}
        {post.media && (
          <div className="mt-4 rounded-lg overflow-hidden">
            <img
              src={post.media}
              alt="Post media"
              className="w-full h-64 object-cover hover:opacity-95 transition-opacity"
            />
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-center"
                  >
                    {/* <span className="text-white text-sm">+</span> */}
                    {/* <img
                      src="https://img.freepik.com/premium-vector/vector-flat-illustration-gray-colors-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-844.jpg"
                      alt="flat-illustration-gray-colors-avatar"
                    /> */}
                  </div>
                ))}
              </div>
              <span>{likeCount}</span>
            </div>
            <span>{post.comments} commentaires</span>
            <span>{post.shares} partages</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-around">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 py-2 rounded-full cursor-pointer transition-colors ${
              isLiked
                ? "text-primary"
                : "text-gray-600"
            }`}
          >
            <ThumbsUp className="w-5 h-5" />
            <span className="font-medium">J'aime</span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Commenter</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="font-medium">Partager</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-around mt-2">
          <button className="text-xs text-gray-500 hover:text-gray-700">
            Envoyer
          </button>
          <button className="text-xs text-gray-500 hover:text-gray-700">
            Offrir
          </button>
          <button className="text-xs text-gray-500 hover:text-gray-700">
            Demander
          </button>
          <button className="text-xs text-gray-500 hover:text-gray-700">
            Voir le produit
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          {/* Comment Input */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ajouter un commentaire..."
                className="w-full p-2 border-b border-gray-200 focus:outline-none focus:border-primary"
              />
              <div className="flex justify-end mt-2">
                <button className="text-sm text-gray-500 hover:text-gray-700 mr-4 cursor-pointer">
                  Annuler
                </button>
                <button
                  disabled={!comment.trim()}
                  className="text-sm text-primary font-medium disabled:opacity-50 cursor-pointer"
                >
                  Commenter
                </button>
              </div>
            </div>
          </div>

          {/* Sample Comments */}
          <div className="mt-4 space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-white text-xs">U{i}</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="font-medium text-sm">Utilisateur {i}</div>
                    <p className="text-sm text-gray-700 mt-1">
                      Excellent produit ! J'adore la qualité.
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button className="text-xs text-gray-500 hover:text-gray-700">
                        Répondre
                      </button>
                      <span className="text-xs text-gray-400">2h</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;

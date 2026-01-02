"use client";

import { useState } from "react";
import {
  Image as ImageIcon,
  Video,
  Calendar,
  X,
  Smile,
  Coins,
  Tag,
} from "lucide-react";
import { Button } from "../ui/button/button";
import EmojiPickerUI from "../ui/emoji/emoji-picker-ui";
import { UsersP } from "@/data/user";
import Avatar from "../global/Avatar";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    console.log("Post:", content);
    setContent("");
    setOpen(false);
    setShowEmoji(false);
  };

  return (
    <>
      <div className="card border border-gray-200">
        <div className="flex items-center gap-3">
          {UsersP.map((user) => (
            <div key={user.id}>
              <Avatar name={user.name} image={user.photo} size="lg" />
            </div>
          ))}
          <button
            onClick={() => setOpen(true)}
            className="flex-1 text-left px-4 py-2 h-12 border border-gray-200 rounded-full text-sm text-gray-500 font-medium hover:bg-gray-50 cursor-text"
          >
            Commencez un post...
          </button>
        </div>

        <div className="hidden lg:flex justify-between mt-4 px-10">
          {[
            { icon: ImageIcon, label: "Photo" },
            { icon: Video, label: "Vidéo" },
            { icon: Calendar, label: "Événement" },
            { icon: Coins, label: "Vendre" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-600 hover:text-primary"
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
              <h3 className="font-semibold">Créer une publication</h3>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={submit} className="p-6 space-y-4 relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="De quoi voulez-vous parler ?"
                className="w-full min-h-[120px] resize-none text-sm focus:outline-none"
                autoFocus
              />

              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                <input
                  placeholder="Ajouter des hashtags..."
                  className="flex-1 text-sm focus:outline-none"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 relative">
                <p className="text-sm font-medium mb-3">
                  Ajouter à votre publication
                </p>

                <div className="grid grid-cols-4 gap-3">
                  <button
                    type="button"
                    className="border border-gray-200 px-3 flex gap-2 items-center cursor-pointer rounded-full py-1.5 text-cyan-500 hover:bg-cyan-100"
                  >
                    <ImageIcon className="w-5 h-5" />
                    Photo
                  </button>

                  <button
                    type="button"
                    className="border border-gray-200 px-3 flex gap-2 items-center cursor-pointer rounded-full py-1.5 text-rose-500 hover:bg-rose-50"
                  >
                    <Video className="w-5 h-5" />
                    Vidéo
                  </button>

                  <button
                    type="button"
                    className="border border-gray-200 px-3 flex gap-2 items-center cursor-pointer rounded-full py-1.5 text-gray-500 hover:bg-gray-50"
                  >
                    <Coins className="w-5 h-5" />
                    Prix
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowEmoji((v) => !v)}
                    className="border border-gray-200 px-3 flex gap-2 items-center cursor-pointer rounded-full py-1.5 text-secondary hover:bg-secondary-50"
                  >
                    <Smile className="w-5 h-5" />
                    Emoji
                  </button>
                </div>

                {showEmoji && (
                  <div className="absolute bottom-4 w-[50vh] left-1 right-4 z-50">
                    <EmojiPickerUI
                      onSelect={(emoji) => {
                        setContent((v) => v + emoji);
                        setShowEmoji(false);
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={!content.trim()}
                  className="w-40 btn-primary disabled:opacity-50"
                >
                  Publier
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 0.6rem;
          font-size: 0.75rem;
          color: #4b5563;
          background: white;
        }
        .action-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .action-btn svg {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </>
  );
}

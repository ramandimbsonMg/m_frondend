"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";

interface Props {
  onSelect: (emoji: string) => void;
}

export default function EmojiPickerUI({ onSelect }: Props) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white relative h-[46vh]">
      <EmojiPicker
        theme={Theme.AUTO}
        onEmojiClick={(e) => onSelect(e.emoji)}
        width="100%"
        height="100%"
        searchPlaceHolder="rechercher votre emojie"
        autoFocusSearch
        className="h-[46vh] text-sm"
      />
    </div>
  );
}

"use client";

import { Button } from "../button/button";

interface ModalProps {
  onClose: () => void;
  title?: string;
  showButton?: boolean;
  children: React.ReactNode;
}

export default function Modal({
  onClose,
  title,
  showButton = true, 
  children,
}: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white rounded-lg px-6 py-4 max-w-sm w-full shadow-lg">
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

        {children}

        {showButton && (
          <Button onClick={onClose} className="mt-4 w-full cursor-pointer">
            Fermer
          </Button>
        )}
      </div>
    </div>
  );
}

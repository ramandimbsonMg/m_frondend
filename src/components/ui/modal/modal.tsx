import { Button } from "../button/button";

interface ModalProps {
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }
  
  export default function Modal({ onClose, title, children }: ModalProps) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 z-50 rounded-lg">
        <div className="bg-white rounded-lg px-6 py-3 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          {children}
          <Button onClick={onClose} className="mt-4">
            Fermer
          </Button>
        </div>
      </div>
    );
  }
  
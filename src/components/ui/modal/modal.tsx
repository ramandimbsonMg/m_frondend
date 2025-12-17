interface ModalProps {
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }
  
  export default function Modal({ onClose, title, children }: ModalProps) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          {children}
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded">
            Fermer
          </button>
        </div>
      </div>
    );
  }
  
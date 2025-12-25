import clsx from "clsx";
import { IconProps } from "@/types/iconProps";

interface Props {
  type?:
    | "text"
    | "email"
    | "password"
    | "date"
    | "number"
    | "color"
    | "button"
    | "submit"
    | "search"
    | "tel"
    | "file"
    | "checkbox"
    | "textarea"; // Champ optionnel avec "text" par défaut
  register?: any; // Pour les formulaires utilisant React Hook Form
  iconSize?: "sm" | "md" | "lg";
  id: string; // Identifiant unique pour l'input
  errors?: any; // Erreurs associées à cet input
  errorMg?: string; // Message d'erreur personnalisé
  className?: string; // Classes CSS supplémentaires
  placeholder?: string; // Texte de remplacement dans l'input
  icon?: IconProps; // Propriété pour ajouter une icône
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; // Indique si le champ est requis
  isLoading?: boolean; // Désactiver l'input si en cours de chargement
  isAutocompleted?: boolean; // Activer/désactiver l'auto-complétion
}

export const Input = ({
  type = "text",
  register,
  id,
  errors,
  errorMg = "Ce champ est requis",
  className,
  placeholder,
  icon,
  value,
  iconSize = "md",
  required = false,
  isLoading = false,
  onChange,
  isAutocompleted = false,
}: Props) => {
  let iconStyles = "";
  switch (iconSize) {
    case "sm":
      iconStyles = "w-3 h-3";
      break;
    case "md":
      iconStyles = "w-4 h-4";
      break;
    case "lg":
      iconStyles = "w-5 h-5";
      break;
  }

  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          disabled={isLoading}
          value={value}
          onChange={onChange}
          autoComplete={isAutocompleted ? "on" : "off"}
          className={clsx(
            "w-full border py-3 pl-4 h-10 pr-10 text-sm font-medium rounded-full focus:outline-none focus:ring-2",
            errors?.[id]
              ? "border-alert-danger placeholder-alert-danger text-alert-danger focus:ring-alert-danger"
              : "border-gray-200 placeholder-gray-400 focus:ring-gray-200",
            isLoading && "cursor-not-allowed",
            className
          )}
          {...(register &&
            register(id, {
              required: required && { value: true, message: errorMg },
            }))}
        />

        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              disabled={isLoading}
              className={clsx("flex items-center text-primary", iconStyles)}
            >
              <icon.icon />
            </button>
          </div>
        )}
      </div>

      {errors?.[id]?.message && (
        <p className="text-xs text-alert-danger mt-1">{errors[id].message}</p>
      )}
    </div>
  );
};

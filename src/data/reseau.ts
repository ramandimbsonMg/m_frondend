import { useCountUp } from "@/hooks/use-count-up";
import {
  Building,
  MapPin,
  Briefcase,
  TrendingUp,
  Award,
  Calendar,
} from "lucide-react";

export const connections = [
  {
    id: 1,
    name: "Amina Diallo",
    title: "Fondatrice - Mode Madagascar",
    company: "AfroChic Collection",
    location: "Madagascar, Fianarantsoa",
    mutualConnections: 12,
    skills: ["Fashion Design", "E-commerce", "Marketing"],
    avatarUrl: "/assets/images/optimisation/avatar.jpeg",
    status: "active",
    connectionType: "1st",
    lastActive: "Actif il y a 2h",
  },
  {
    id: 2,
    name: "Mohamed Keita",
    title: "CEO Tech Startup",
    company: "Tech Innov CI",
    location: "Tamatave, 13 Mai",
    mutualConnections: 8,
    skills: ["Software Development", "AI", "Business Strategy"],
    avatarUrl: "/assets/images/optimisation/avatar.jpeg",
    status: "active",
    connectionType: "2nd",
    lastActive: "Actif maintenant",
  },
  {
    id: 3,
    name: "Fatou Sow",
    title: "Directrice Artistique",
    company: "Artisanat WA",
    location: "Tamatave, Tanambao",
    mutualConnections: 15,
    skills: ["Artisanat", "Design", "Gestion Projet"],
    avatarUrl: null,
    status: "offline",
    connectionType: "1st",
    lastActive: "Hors ligne",
  },
  {
    id: 4,
    name: "Ibrahim Ba",
    title: "Expert E-commerce",
    company: "E-com Africa",
    location: "Madagascar, Antananarivo",
    mutualConnections: 6,
    skills: ["E-commerce", "Logistique", "Mobile Money"],
    avatarUrl: null,
    status: "active",
    connectionType: "2nd",
    lastActive: "Actif il y a 30min",
  },
];
export const suggestedConnections = [
  {
    id: 5,
    name: "Jean Koffi",
    title: "Investisseur Tech",
    company: "Africa Ventures",
    location: "Antananarivo, Meteo",
    mutualConnections: 3,
    reason: "Vous avez des compétences complémentaires en e-commerce",
    avatarUrl: null,
  },
  {
    id: 6,
    name: "Marie Ndiaye",
    title: "Spécialiste Marketing",
    company: "Digital Africa",
    location: "Fianarantsoa, Ankofafa",
    mutualConnections: 5,
    reason: "Membre de Fashion Entrepreneurs Africa",
    avatarUrl: "/assets/images/optimisation/avatar.jpeg",
  },
];

export const networkStats = {
  total: 342,
  newThisWeek: 24,
  byLocation: [
    { location: "Antananarivo", count: 156 },
    { location: "Tamatave", count: 78 },
    { location: "Antsirabe", count: 45 },
    { location: "Fianarantsoa", count: 32 },
    { location: "Autres", count: 31 },
  ],
  byIndustry: [
    { industry: "Mode & Design", count: 89 },
    { industry: "Tech & Innovation", count: 76 },
    { industry: "Artisanat", count: 54 },
    { industry: "Commerce", count: 48 },
    { industry: "Services", count: 32 },
  ],
};

export const filters = [
  { id: "location-madagascar", label: "Madagascar", icon: MapPin },
  { id: "fashion", label: "Mode & Design", icon: Briefcase },
  { id: "tech", label: "Tech", icon: Building },
  { id: "artisanat", label: "Artisanat", icon: Award },
  { id: "ecommerce", label: "E-commerce", icon: TrendingUp },
  { id: "recent", label: "Actifs récemment", icon: Calendar },
];

export const collab = [
  {
    name: "Papa Diop",
    company: "Google Africa",
    role: "Senior Developer",
    avatarUrl: "/assets/images/optimisation/avatar.jpeg",
  },
  {
    name: "Aissatou Diallo",
    company: "Amazon",
    role: "Product Manager",
    avatarUrl: "/assets/images/optimisation/avatar.jpeg",
  },
  {
    name: "Moussa Traoré",
    company: "Facebook",
    role: "Design Lead",
    avatarUrl: "/assets/images/optimisation/avatar.jpeg",
  },
];

export const events = [
  {
    title: "Meetup E-commerce Madagascar",
    date: "25 mars",
    attendees: 45,
  },
  {
    title: "Webinar: Marketing Digital",
    date: "28 mars",
    attendees: 89,
  },
  {
    title: "Networking Tech Abidjan",
    date: "2 avril",
    attendees: 32,
  },
];

export const groups = [
  {
    name: "Fashion Entrepreneurs Africa",
    members: "2.4k",
  },
  { name: "Tech Startups Afrique", members: "3.1k" },
  { name: "Artisans du Sahel", members: "1.8k" },
];

export const groupes = [
  {
    name: "Fashion Madagascar",
    description: "Designers et créateurs de mode à Madagascar",
    members: 245,
    posts: 156,
    privacy: "public",
  },
  {
    name: "Tech Entrepreneurs CI",
    description: "Startups et innovateurs tech en Côte d'Ivoire",
    members: 128,
    posts: 89,
    privacy: "private",
  },
  {
    name: "Artisanat du Sahel",
    description: "Artisans et créateurs du Sahel",
    members: 89,
    posts: 45,
    privacy: "public",
  },
];

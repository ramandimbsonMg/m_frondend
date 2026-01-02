import { User } from "@/types/types";

export const mockUsers: User[] = [
  {
    id: 1,
    email: "alice.l@missera.com",
    name: "Alice",
    firstname: "L.",
    fonction: "Admin",
    avatar: "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
  },
  {
    id: 2,
    email: "bob.k@missera.com",
    name: "Bob",
    firstname: "K.",
    fonction: "Utilisateur",
    avatar: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
  },
  {
    id: 3,
    email: "charlie.m@missera.com",
    name: "Charlie",
    firstname: "M.",
    fonction: "Utilisateur",
  },
];

export const UsersP: User[] = [
  {
    id: 1,
    email: "teresperanto@missera.com",
    name: "Ter",
    firstname: "Esperanto",
    fonction: "Vendeur Pro",
    avatar: "https://img.daisyui.com/images/profile/john-doe.jpg",
  },
];
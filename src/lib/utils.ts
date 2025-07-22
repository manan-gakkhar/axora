import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
  hoverColor: string;
}

// Centralized social links configuration to use across components
export const socialLinks = {
  whatsapp: {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/HKZI9X9FjWR7aQ34uaXThM",
    color: "bg-[#25D366] hover:bg-[#128C7E]",
    textColor: "text-[#25D366]",
    hoverBg: "hover:bg-[#25D366]/10",
    hoverBorder: "hover:border-[#25D366]/40"
  },
  telegram: {
    name: "Telegram",
    url: "https://t.me/+Ouh8sRHtoX05OThl",
    color: "bg-[#0088cc] hover:bg-[#0077b5]",
    textColor: "text-[#0088cc]",
    hoverBg: "hover:bg-[#0088cc]/10",
    hoverBorder: "hover:border-[#0088cc]/40"
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/axora.official",
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90",
    textColor: "text-[#E4405F]",
    hoverBg: "hover:bg-gradient-to-br hover:from-[#833AB4]/10 hover:via-[#FD1D1D]/10 hover:to-[#FCAF45]/10",
    hoverBorder: "hover:border-[#E4405F]/40"
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/officialaxora/",
    color: "bg-[#0A66C2] hover:bg-[#004182]",
    textColor: "text-[#0A66C2]",
    hoverBg: "hover:bg-[#0A66C2]/10",
    hoverBorder: "hover:border-[#0A66C2]/40"
  },
  discord: {
    name: "Discord",
    url: "https://discord.gg/esPcAAux",
    color: "bg-[#5865F2] hover:bg-[#4752C4]",
    textColor: "text-[#5865F2]",
    hoverBg: "hover:bg-[#5865F2]/10",
    hoverBorder: "hover:border-[#5865F2]/40"
  },
  linktree: {
    name: "Linktree",
    url: "https://linktr.ee/Axora.official",
    color: "bg-[#43E660] hover:bg-[#39c152]",
    textColor: "text-[#43E660]",
    hoverBg: "hover:bg-[#43E660]/10",
    hoverBorder: "hover:border-[#43E660]/40"
  }
};

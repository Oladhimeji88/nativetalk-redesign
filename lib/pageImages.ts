export type PageImage = {
  src: string;
  alt: string;
};

const params = "auto=format&fit=crop&fm=jpg&q=80";

export const PAGE_IMAGES = {
  businessApp: {
    src: `https://images.unsplash.com/photo-1573164574230-db1d5e960238?${params}&w=1400`,
    alt: "Black businesswoman using a smartphone beside an open laptop.",
  },
  crm: {
    src: `https://images.unsplash.com/photo-1573164574511-73c773193279?${params}&w=1400`,
    alt: "Black professionals in a meeting around laptops in a conference room.",
  },
  voip: {
    src: `https://images.unsplash.com/photo-1573164713712-03790a178651?${params}&w=1400`,
    alt: "Black woman holding a tablet while working beside server racks.",
  },
  about: {
    src: `https://images.unsplash.com/photo-1573166953836-06864dc70a21?${params}&w=1400`,
    alt: "Black professional woman working on a laptop in a bright workspace.",
  },
  blog: {
    src: `https://images.unsplash.com/photo-1606596556957-f6566cc865a9?${params}&w=1400`,
    alt: "Black professional woman working from a laptop in a modern setting.",
  },
  personal: {
    src: `https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?${params}&w=1400`,
    alt: "Black woman seated near a window while using a laptop.",
  },
  business: {
    src: `https://images.unsplash.com/photo-1573164574397-dd250bc8a598?${params}&w=1400`,
    alt: "Black women collaborating around a laptop in an office.",
  },
} satisfies Record<string, PageImage>;

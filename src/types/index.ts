export interface Work {
  title: string;
  description: string;
  imageUrls: string[];
  tags: string[];
  tools: string[];
  createdAt: string;
  link?: string;
  githubUrl?: string;
  demoUrl?: string;
  figmaUrl?: string;
  presentationUrl?: string;
}

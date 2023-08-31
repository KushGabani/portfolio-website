// src/utils.js
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? "",
});

// Retrieve the list of blog posts from Contentful
export const useGetExperiences = async () => {
  const response = await client.getEntries({
    content_type: "experience",
  });

  return response.items;
};

export type Work = {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
};

export const useGetWork = async (): Promise<Work[]> => {
  const response = await client.getEntries({
    content_type: "work",
    order: ["fields.index"],
  });

  return response.items.map((entry) => entry.fields) as Work[];
};

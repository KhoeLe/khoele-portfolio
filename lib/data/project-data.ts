const generateProjectData = (name: string, url: string, description: string, thumbnail: string, status: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name,
    url,
    description,
    thumbnail,
    status,
  }));
}

const myProjectData = generateProjectData(
  "Feedful",
  "https://feedful.app",
  "Modern news reader in tweetdeck style",
  "https://github.com/shadcn.png",
  "Active",
  6
);

export const fetchData = async () => {
  return myProjectData;
}
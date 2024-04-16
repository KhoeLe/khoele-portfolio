
export type introData = {
  path: string;
  component: string;
  data: {
    title: string;
    description: string;
    company: string;
    description2: string;
  };
}

const data: introData[] = [
  {
    path: "intro",
    component: "Intro",
    data: {
      title: "Hello There!",
      description: ` I'm Louis, I work as a software, product engineer and designer from
      SaiGon, VietNam. I specialize in building web applications and sites
      using Javascript, React, NextJs, Node, NestJs. I've procrastinated building this
      website for years but finally it's here, I've carved out my own little
      nook on the internet to share my silly experiments, nifty projects, and
      thoughts (mostly about tech and design).`,
      company: "Keppel",
      description2: ` and
      by night (and weekends), I'm busy tinkering with some random tool or app
      that I am building.`
    }
  }
];

export async function getIntroData() {
  return data;
}
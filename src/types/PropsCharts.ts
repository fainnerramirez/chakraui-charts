type PropsChart = {
  isDrawer?: boolean;
};

type PropsDrawerChart = {
  code: string;
  children: React.ReactNode;
  title: string;
};

type PropsChildren = {
  children: React.ReactNode;
};

export type { PropsChart, PropsChildren, PropsDrawerChart };

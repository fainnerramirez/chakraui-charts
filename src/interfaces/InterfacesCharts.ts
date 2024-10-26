interface ChartDataSource {
  id: string;
  code: string;
  titleChart: string;
  description: string;
  titleDetails: string;
  descriptionDetails: string;
  component: React.ReactNode;
}

export type { ChartDataSource };

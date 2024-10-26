import { ChartDataSource } from "../interfaces/InterfacesCharts";

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

type DataChartType = {
  mes: string;
  data: number;
  data2: number;
};

type TypeChartsData = {
  PRESENTATION: Array<ChartDataSource>;
  BAR: Array<ChartDataSource>;
  LINEBAR: Array<ChartDataSource>;
  AREA: Array<ChartDataSource>;
  PIE: Array<ChartDataSource>;
};

type TypeCodeChart = {
  nameChart: string;
  code: string;
};

type BarsData = {
  barSimple: {
    data: TypeCodeChart;
  };
  barDoble: {
    data: TypeCodeChart;
  };
};

type LineBarData = {
  barSimple: {
    data: TypeCodeChart;
  };
  barDoble: {
    data: TypeCodeChart;
  };
};

type AreaData = {
  barSimple: {
    data: TypeCodeChart;
  };
};

type PieData = {
  barSimple: {
    data: TypeCodeChart;
  };
};

type CodeTypeChartsData = {
  BAR: BarsData;
  LINEBAR: LineBarData;
  AREA: AreaData;
  PIE: PieData;
};

export type {
  CodeTypeChartsData,
  DataChartType,
  PropsChart,
  PropsChildren,
  PropsDrawerChart,
  TypeChartsData,
};

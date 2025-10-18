const COLOR_MAP = {
  success: "#28a745",
  primary: "#007bff",
  danger: "#dc3545",
};

export const getChartColor = (variant) => COLOR_MAP[variant] || "#8884d8";

export const getChartColors = (metrics) => metrics.map(({ variant }) => getChartColor(variant));

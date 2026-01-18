import { TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    label: "Total Crawls",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
  },
  {
    label: "Pages Crawled",
    value: "124,532",
    change: "+8.2%",
    trend: "up",
  },
  {
    label: "Credits Used",
    value: "12,450",
    change: "-3.1%",
    trend: "down",
  },
  {
    label: "Success Rate",
    value: "99.8%",
    change: "+0.2%",
    trend: "up",
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="p-5 rounded-xl bg-card border border-border hover:shadow-medium transition-shadow"
        >
          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
            <div
              className={`flex items-center gap-1 text-xs font-medium ${
                stat.trend === "up" ? "text-success" : "text-destructive"
              }`}
            >
              {stat.trend === "up" ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

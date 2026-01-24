import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const ExpensesBarchart = ({ expenses }) => {
  const dailyData = getDailySpendingData(expenses);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <div style={{ width: "100%", minWidth: "300px", height: "300px" }}>
        <h4>Monthly Spending by Date</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              label={{
                value: "Date of Month",
                position: "insideBottom",
                offset: -5,
              }}
            />
            <YAxis />
            <Tooltip formatter={(value) => `Rs. ${value}`} />
            <Bar dataKey="amount" fill="#8884d8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const ExpensesPieChart = ({ expenses }) => {
  const categoryData = getCategoryData(expenses);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <div style={{ width: "100%", minWidth: "300px", height: "300px" }}>
        <h4>Expenses by Category</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const getDailySpendingData = (expenses) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const dailyMap = {};

  expenses.forEach((e) => {
    const d = new Date(e.date);
    if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
      const day = d.getDate();
      dailyMap[day] = (dailyMap[day] || 0) + Number(e.amount);
    }
  });

  return Object.keys(dailyMap)
    .map((day) => ({ day: parseInt(day), amount: dailyMap[day] }))
    .sort((a, b) => a.day - b.day);
};

const getCategoryData = (expenses) => {
  const categoryMap = {};

  expenses.forEach((e) => {
    const cat = e.category || "Other";
    categoryMap[cat] = (categoryMap[cat] || 0) + Number(e.amount);
  });

  return Object.keys(categoryMap).map((name) => ({
    name,
    value: categoryMap[name],
  }));
};

export { ExpensesBarchart, ExpensesPieChart };

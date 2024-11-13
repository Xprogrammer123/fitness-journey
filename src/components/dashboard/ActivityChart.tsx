import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", steps: 7500 },
  { day: "Tue", steps: 9200 },
  { day: "Wed", steps: 8100 },
  { day: "Thu", steps: 10500 },
  { day: "Fri", steps: 8800 },
  { day: "Sat", steps: 12000 },
  { day: "Sun", steps: 8459 },
];

export const ActivityChart = () => {
  return (
    <div className="w-full h-[300px] bg-white/5 backdrop-blur-sm rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="steps"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ fill: "#8B5CF6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
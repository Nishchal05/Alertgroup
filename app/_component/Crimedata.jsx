"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer, // Ensure this is properly imported
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { Year: "2017", CSI: 72.9 },
  { Year: "2018", CSI: 75.6 },
  { Year: "2019", CSI: 79.5 },
  { Year: "2020", CSI: 73.4 },
  { Year: "2021", CSI: 73.7 },
  { Year: "2022", CSI: 77.0 },
  { Year: "2023", CSI: 78.6 },
]

const chartConfig = {
  CSI: {
    label: "CSI",
    color: "blue",
  },
}

export function Crimedata() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-6  text-white">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Why Choose Us?</h1>
        <p className="text-lg text-gray-400 mt-2">We provide reliable services based on data-driven insights to help improve safety and security.</p>
      </div>
      
      <Card className="h-auto w-full max-w-4xl bg-black shadow-lg rounded-lg overflow-hidden"> 
        <CardHeader className="border-b border-gray-700 pb-4">
          <CardTitle className="text-2xl">Crime Severity Index (CSI)</CardTitle>
          <CardDescription className="text-gray-400">Yearly Data from 2017 - 2023</CardDescription>
        </CardHeader>

        <CardContent className="h-96 p-6">
          {/* Ensure ChartContainer is properly used here */}
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="Year" tickLine={false} axisLine={false} />
                <YAxis domain={['auto', 'auto']} tickLine={false} axisLine={false} />
                <ChartTooltip
                  cursor={{ stroke: 'gray', strokeWidth: 1 }}
                  content={<ChartTooltipContent />}
                />
                <Line
                  type="monotone"
                  dataKey="CSI"
                  stroke="var(--color-CSI)"
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex items-center justify-between px-6 py-4 border-t border-gray-700">
          <div className="text-sm flex items-center gap-2 font-medium">
            Crime rate increased by 5.2% this year
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-sm text-gray-400">
            Data for the last 7 years.
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

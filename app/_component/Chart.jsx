"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", Partner: 186, Clients: 80 },
  { month: "February", Partner: 305, Clients: 200 },
  { month: "March", Partner: 237, Clients: 120 },
  { month: "April", Partner: 73, Clients: 190 },
  { month: "May", Partner: 209, Clients: 130 },
  { month: "June", Partner: 214, Clients: 140 },
]

const chartConfig = {
    Partner: {
      label: "Partner",
      color: "hsl(var(--chart-1))",
    },
    Clients: {
      label: "Clients",
      color: "hsl(var(--chart-2))",
    },
  }

export function Chart() {
  return (
    <Card className=' bg-black w-[80%]'>
      <CardHeader>
        <CardTitle>Track Record</CardTitle>
        <CardDescription>
          Showing total Partner and Clients for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="Partner"
              type="natural"
              fill="var(--color-Partner)"
              fillOpacity={0.4}
              stroke="var(--color-Partner)"
              stackId="a"
            />
            <Area
              dataKey="Clients"
              type="natural"
              fill="var(--color-Clients)"
              fillOpacity={0.4}
              stroke="var(--color-Clients)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
  )
}

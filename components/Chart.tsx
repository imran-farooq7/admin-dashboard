"use client";

import { AreaChart, Card, Title } from "@tremor/react";

const data = [
	{
		Month: "Jan 21",
		Sales: 2890,
		Profit: 2400,
	},
	{
		Month: "Feb 21",
		Sales: 1890,
		Profit: 1398,
	},
	{
		Month: "Mar 21",
		Sales: 3890,
		Profit: 2980,
	},
];

export default function Chart() {
	return (
		<Card className="mt-8">
			<Title>Performance</Title>
			<Title>Comparision between sales and profits</Title>
			<AreaChart
				className="mt-4 h-96"
				data={data}
				categories={["Sales", "Profit"]}
				index="Month"
				colors={["indigo", "fuchsia"]}
				yAxisWidth={60}
				valueFormatter={(number: number) => {
					return "$" + Intl.NumberFormat("us").format(number).toString();
				}}
			/>
		</Card>
	);
}

"use client";

import { BarList, Card, Flex, Grid, Metric, Text, Title } from "@tremor/react";
import { it } from "node:test";
import Chart from "./Chart";

const website = [
	{ name: "/home", value: 1230 },
	{ name: "/contact", value: 751 },
	{ name: "/gallery", value: 471 },
	{ name: "/august-discount-offer", value: 280 },
	{ name: "/case-studies", value: 78 },
];

const shop = [
	{ name: "/home", value: 453 },
	{ name: "/imprint", value: 351 },
	{ name: "/shop", value: 271 },
	{ name: "/pricing", value: 191 },
];

const app = [
	{ name: "/shop", value: 789 },
	{ name: "/product-features", value: 676 },
	{ name: "/about", value: 564 },
	{ name: "/login", value: 234 },
	{ name: "/downloads", value: 191 },
];

const data = [
	{
		category: "Website",
		stat: "10,234",
		data: website,
	},
	{
		category: "Online Shop",
		stat: "12,543",
		data: shop,
	},
	{
		category: "Mobile App",
		stat: "2,543",
		data: app,
	},
];

export default function Analytics() {
	return (
		<main className="p-4 md:p-10  mx-auto max-w-7xl">
			<Grid numItemsSm={2} numItemsLg={3} className="gap-6">
				{data.map((item) => (
					<Card key={item.category}>
						<Title>{item.category}</Title>
						<Flex
							justifyContent="start"
							alignItems="baseline"
							className="space-x-2"
						>
							<Metric>{item.stat}</Metric>
							<Text>Total Views</Text>
						</Flex>
						<Flex className="mt-6">
							<Text>Pages</Text>
							<Text className="text-right">View</Text>
						</Flex>
						<BarList
							data={item.data}
							valueFormatter={(number: number) => {
								return Intl.NumberFormat("us").format(number).toString();
							}}
						/>
					</Card>
				))}
			</Grid>
			<Chart />
		</main>
	);
}

import Search from "@/components/Search";
import UserTable from "@/components/UsersTable";
import client from "@/lib/prisma";
import { Text, Title } from "@tremor/react";

interface Props {
	searchParams: {
		q?: string;
	};
}

export default async function Home({ searchParams }: Props) {
	const users = await client.user.findMany({
		where: {
			name: {
				contains: searchParams.q,
				mode: "insensitive",
			},
		},
	});
	return (
		<main className="max-w-7xl mx-auto p-4 md:p-10">
			<div className="space-y-2 mb-4">
				<Title>Users</Title>
				<Text>A table of users</Text>
				<Search query={searchParams.q} />
			</div>
			<UserTable users={users} />
		</main>
	);
}

import Search from "@/components/Search";
import UserTable from "@/components/UsersTable";
import client from "@/lib/prisma";
import { Text, Title } from "@tremor/react";

export default async function Home() {
	const users = await client.user.findMany({});
	// console.log(users);
	return (
		<main className="max-w-7xl mx-auto p-4 md:p-10">
			<div className="space-y-2 mb-4">
				<Title>Users</Title>
				<Text>A table of users</Text>
				<Search />
			</div>
			<UserTable users={users} />
		</main>
	);
}

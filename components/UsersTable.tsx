"use client";
import { User } from "@prisma/client";
import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Text,
	Title,
} from "@tremor/react";
import { useSearchParams } from "next/navigation";

interface Props {
	users: User[];
}

const UserTable = ({ users }: Props) => {
	const params = useSearchParams();
	return (
		<Card>
			<Table className="mt-5">
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>CreatedAt</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>{item.createdAt.toDateString()}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
};
export default UserTable;

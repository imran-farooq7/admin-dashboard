// import { StatusOnlineIcon } from "@heroicons/react/outline";
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

interface Props {
	users: User[];
}

const UserTable = ({ users }: Props) => (
	<Card>
		{/* <Title>List of Swiss Federal Councillours</Title> */}
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
export default UserTable;

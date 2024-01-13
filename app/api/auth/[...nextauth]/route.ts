import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import client from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const handler = NextAuth({
	adapter: PrismaAdapter(client),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
	],
	session: {
		strategy: "jwt",
	},
});
export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(client),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
	],
	session: {
		strategy: "jwt",
	},
};

export { handler as GET, handler as POST };

import Analytics from "@/components/Analytics";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const AnalyticPage = async () => {
	const session = await getServerSession(authOptions);
	if (!session) return redirect("/api/auth/signin");
	return <Analytics />;
};
export default AnalyticPage;

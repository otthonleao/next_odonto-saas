import getSession from "@/lib/getSession"
import { redirect } from "next/navigation";

export default async function Dashboard() {

	const session = await getSession();

	if (!session) {
		redirect("/")
	}
	// console.log(session);

  return (
    <div>
      <h1>Dashboard Page</h1>
			<div className="w-full h-[600px] bg-gray-200 mb-10"></div>
			<div className="w-full h-[600px] bg-gray-300 mb-10"></div>
    </div>
  );
}

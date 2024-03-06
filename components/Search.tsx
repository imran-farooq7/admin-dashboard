"use client";
import { RotateCwIcon, SearchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
interface Props {
	query?: string;
}

export default function Search({ query }: Props) {
	const params = new URLSearchParams(window?.location?.search);
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const pathName = usePathname();
	// console.log(params);
	const handleSearch = (value: string) => {
		if (value) {
			params.set("q", value);
		} else {
			params.delete("q");
		}
		startTransition(() => {
			router.replace(`${pathName}?${params.toString()}`);
		});
	};
	return (
		<div className="relative mt-5 max-w-md">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="rounded-md shadow-sm">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<SearchIcon className="mr-3 h-4 w-4 text-gray-400" />
				</div>
				<input
					type="text"
					name="search"
					id="search"
					autoComplete="off"
					className="h-10 w-full rounded-md border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-9"
					placeholder="Search by name"
					onChange={(e) => handleSearch(e.target.value)}
					defaultValue={query}
				/>
				{isPending && (
					<div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
						<RotateCwIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" />
					</div>
				)}
			</div>
		</div>
	);
}

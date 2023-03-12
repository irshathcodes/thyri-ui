import fs from "fs";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export default function Home(
	props: InferGetStaticPropsType<typeof getStaticProps>
) {
	return (
		<div>
			<ul className="p-4 md:max-w-3xl gap-4 flex mx-auto mt-12">
				{props.myFileNames.map((fileName) => {
					return (
						<li key={fileName}>
							<Link
								className="p-12 inline-block shadow-xl border border-gray-200 rounded-xl capitalize font-semibold text-slate-700"
								href={`/${fileName}`}
							>
								{fileName}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export const getStaticProps: GetStaticProps<{
	myFileNames: string[];
}> = async () => {
	const allFiles = fs.readdirSync(__dirname, "utf-8");

	const myFileNames = allFiles
		.filter((file) => !file.startsWith("_") && !file.startsWith("index"))
		.map((file) => file.split(".")[0]);

	return {
		props: {
			myFileNames,
		},
	};
};

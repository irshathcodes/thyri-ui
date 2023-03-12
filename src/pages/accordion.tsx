import AccordionList from "@/ui/Accordion";
import React from "react";

const questions = [
	{
		title: "What is this page?",
		info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque facere facilis repudiandae quas nostrum neque est corporis rem inventore deleniti.",
		show: true,
	},
	{
		title: "Is this page statically generated?",
		info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque facere facilis repudiandae quas nostrum neque est corporis rem inventore deleniti.",
	},
	{
		title: "Is this page built with NextJS",
		info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque facere facilis repudiandae quas nostrum neque est corporis rem inventore deleniti.",
	},
];

export default function Index() {
	return <AccordionList data={questions} />;
}

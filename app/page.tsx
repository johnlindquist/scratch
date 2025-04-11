import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";

export default function Page() {
	return (
		// Minimal wrapper, adjust styling as needed
		<div className="flex min-h-screen flex-col items-center justify-center py-10 px-5">
			{/* Render the editor directly */}
			<TailwindAdvancedEditor />
		</div>
	);
}

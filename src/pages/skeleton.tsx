import React from 'react';

export default function skeleton() {
	return (
		<div className="mt-10 space-y-8 w-96 mx-auto">
			<div className="w-full relative before:bg-slate-300/10 before:-translate-x-full before:rounded-2xl before:-skew-x-12 overflow-hidden bg-slate-300/50 rounded-2xl p-4 h-48 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent before:animate-shimmer">
				<div className="bg-slate-300/70 h-16 rounded-2xl"></div>
				<div className="space-y-2">
					<div className="h-8 bg-slate-300/80 rounded-xl mt-4"></div>
					<div className="h-8 bg-slate-300/80 rounded-xl"></div>
				</div>
			</div>
		</div>
	);
}

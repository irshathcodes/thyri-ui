import React from 'react';

export default function skeleton() {
	return (
		<div className="mt-10 space-y-8 w-96 mx-auto">
			<div className="w-full relative overflow-hidden bg-slate-300/50 rounded-2xl p-4 h-48">
				<div className="-translate-x-full animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-black/10 -skew-x-12" />
				<div className="bg-slate-300/70 h-16 rounded-2xl"></div>
				<div className="space-y-2">
					<div className="h-8 bg-slate-300/80 rounded-xl mt-4"></div>
					<div className="h-8 bg-slate-300/80 rounded-xl"></div>
				</div>
			</div>
		</div>
	);
}

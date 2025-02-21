"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { availableLeaugesData } from "@/app/lib/availableLeauges";

const LeaguesPanel = () => {
	return (
		<div className="overflow-hidden py-6">
			<motion.div
				className="flex gap-6 cursor-grab"
				drag="x"
				dragConstraints={{ left: -800, right: 0 }}
			>
				{availableLeaugesData.map((league) => (
					<motion.div
						key={league.id}
						className="min-w-[200px] p-4 bg-gray-800 rounded-lg flex flex-col items-center text-center shadow-lg"
					>
						<Image
							src={league.img}
							alt={league.name}
							className="w-20 h-20 object-contain mb-3"
						/>
						<p className="text-white text-lg font-medium">{league.name}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default LeaguesPanel;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { availableLeaugesData } from "@/app/lib/availableLeauges";

const LeaguesPanel = () => {
	const [positionIndex, setPositionIndex] = useState([1, 2, 3, 4, 5]);

	const handleNext = () => {
		setPositionIndex((prev) => {
			const updatePosition = prev.map((position) => (position + 1) % 5);
			return updatePosition;
		});
	};

	const images = availableLeaugesData.slice(0, 5).map((itm) => {
		return {
			image: itm.img,
			league: itm.name,
		};
	});

	const positions = ["center", "left1", "left", "right", "right1"];

	const imageVariants = {
		center: { x: "0%", scale: 1, zIndex: 5 },
		left1: { x: "-93%", scale: 0.7, zIndex: 2 },
		left: { x: "-160%", scale: 0.5, zIndex: 1 },
		right: { x: "160%", scale: 0.5, zIndex: 1 },
		right1: { x: "93%", scale: 0.7, zIndex: 2 },
	};

	return (
		<div className=" bg-custom-gradient-league w-full">
			<div className="flex items-center flex-col justify-center">
				{images.map((img, idx) => (
					<AnimatePresence key={idx}>
						<motion.div
							key={idx}
							initial="center"
							animate={positions[positionIndex[idx]]}
							exit="center"
							variants={imageVariants}
							transition={{ duration: 0.5 }}
							className="flex flex-col items-center justify-center bg-indigo-800 rounded-[15px]"
							style={{ position: "absolute", width: "240px", height: "280px" }}
						>
							<div className="bg-card-league w-full h-[60%] flex items-center justify-center rounded-t-[15px]">
								<Image src={img.image} alt={img.league} width={100} height={100} />
							</div>
							<div className="  w-full h-[40%] flex items-center justify-center rounded-b-[15px]">
								<p className=" text-xl">{img.league}</p>
							</div>
						</motion.div>
					</AnimatePresence>
				))}
				<button onClick={handleNext} className=" bg-red-500 mt-[600px]">
					clicj
				</button>
				<h1>gkhjv</h1>
			</div>
		</div>
	);
};

export default LeaguesPanel;

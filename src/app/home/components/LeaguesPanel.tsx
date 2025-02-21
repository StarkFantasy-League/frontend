"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { availableLeaugesData } from "@/app/lib/availableLeauges";

const LeaguesPanel = () => {
	const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	const handleSwipe = (direction: "left" | "right") => {
		setPositionIndex((prev) => {
			if (direction === "left") {
				return prev.map((pos) => (pos + 1) % 5);
			} else {
				return prev.map((pos) => (pos - 1 + 5) % 5);
			}
		});
	};

	const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
		touchStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
	};

	const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
		touchEndX.current = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
		const swipeDistance = touchEndX.current - touchStartX.current;
		const swipeThreshold = 100;

		if (swipeDistance > swipeThreshold) {
			handleSwipe("right");
		} else if (swipeDistance < -swipeThreshold) {
			handleSwipe("left");
		}
	};

	const images = availableLeaugesData.map((itm) => ({
		image: itm.img,
		league: itm.name,
	}));

	const positions = ["center", "left1", "left", "right", "right1"];

	const imageVariants = {
		center: { x: "0%", scale: 1, zIndex: 5 },
		left1: { x: "-93%", scale: 0.7, zIndex: 2 },
		left: { x: "-160%", scale: 0.5, zIndex: 1 },
		right: { x: "160%", scale: 0.5, zIndex: 1 },
		right1: { x: "93%", scale: 0.7, zIndex: 2 },
	};

	return (
		<div className="bg-custom-gradient-league w-full relative h-[400px] flex items-center justify-center overflow-hidden">
			{/* Left Arrow */}
			<motion.button
				whileTap={{ scale: 0.9 }}
				className="absolute left-5 z-10 bg-gray-800/70 w-11 h-11 rounded-full cursor-pointer hover:bg-gray-700 transition"
				onClick={() => handleSwipe("right")}
			>
				&lt;
			</motion.button>

			{/* League Cards */}
			<motion.div
				className="relative w-full h-full flex items-center justify-center select-none cursor-grabbing"
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onMouseDown={handleTouchStart}
				onMouseUp={handleTouchEnd}
				role="button"
			>
				{images.map((img, idx) => (
					<AnimatePresence key={idx}>
						<motion.div
							key={idx}
							initial="center"
							animate={positions[positionIndex[idx]]}
							exit="center"
							variants={imageVariants}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="flex flex-col items-center justify-center bg-indigo-800 rounded-[15px]"
							style={{ position: "absolute", width: "240px", height: "280px" }}
						>
							<div className="bg-card-league w-full h-[60%] flex items-center justify-center rounded-t-[15px]">
								<Image src={img.image} alt={img.league} width={100} height={100} />
							</div>
							<div className="w-full h-[40%] flex items-center justify-center rounded-b-[15px]">
								<p className="text-xl">{img.league}</p>
							</div>
						</motion.div>
					</AnimatePresence>
				))}
			</motion.div>
			<motion.button
				whileTap={{ scale: 0.9 }}
				className="absolute right-5 z-10 bg-gray-800/70 w-11 h-11 rounded-full cursor-pointer hover:bg-gray-700 transition"
				onClick={() => handleSwipe("left")}
			>
				&gt;
			</motion.button>
		</div>
	);
};

export default LeaguesPanel;

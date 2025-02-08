import React from "react";
import { Card, CardContent } from "src/components/ui/card.jsx";
import { motion } from "framer-motion";

const FinalWinnerCard = ({ name, position }) => {
  const colors = ["bg-yellow-400", "bg-gray-400", "bg-orange-500"];
  const color = colors[position - 1] || "bg-gray-700";

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className={`w-64 text-center shadow-lg border-2 ${color}`}>
        <CardContent className="p-6 text-white">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-lg">🏆 {position === 1 ? "Winner" : `Position: ${position}`}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FinalWinnerCard;

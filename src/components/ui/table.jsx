import React from "react";

export const Table = ({ children, className }) => (
  <table className={`min-w-full border-collapse ${className}`}>{children}</table>
);

export const TableHead = ({ children }) => (
  <thead className="bg-gray-800 text-white">{children}</thead>
);

export const TableRow = ({ children }) => (
  <tr className="border-b border-gray-700">{children}</tr>
);

export const TableCell = ({ children, className }) => (
  <td className={`p-3 text-center ${className}`}>{children}</td>
);

export const TableBody = ({ children }) => <tbody>{children}</tbody>;

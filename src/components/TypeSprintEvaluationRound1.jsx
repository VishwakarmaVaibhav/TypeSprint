import { useState } from "react";
import { CSVLink } from "react-csv";
import { Button } from "./ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "./ui/table";
import { Menu, X, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";


const TypingEvaluation = () => {
    const [participants, setParticipants] = useState([]);
    const [batchResults, setBatchResults] = useState([]);
    const [name, setName] = useState("");
    const [wpm, setWpm] = useState("");
    const [accuracy, setAccuracy] = useState("");
    const [classLevel, setClassLevel] = useState("FE");
    const [menuOpen, setMenuOpen] = useState(false);

    const addParticipant = () => {
        if (wpm > 100 || accuracy > 100) {
            alert("WPM and Accuracy should not be more than 100");
            return;
        }
        const percent = (wpm * (accuracy / 100)).toFixed(2);
        setParticipants([...participants, { name, classLevel, wpm, accuracy, percent }]);
        setName("");
        setWpm("");
        setAccuracy("");
    };

    const evaluateBatch = () => {
        if (participants.length === 0) {
            alert("No entries available! Please add participants before evaluating.");
            return;
        }
        const sortedParticipants = [...participants].sort((a, b) => b.percent - a.percent);
        const top10 = sortedParticipants.slice(0, 10).map(p => ({ ...p, status: "Success" }));
        const failed = sortedParticipants.slice(10).map(p => ({ ...p, status: "Fail" }));
        setBatchResults([...batchResults, { batchNumber: batchResults.length + 1, results: [...top10, ...failed] }]);
        setParticipants([]);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
   <header className="bg-blue-600 text-white p-4 text-lg font-bold flex justify-between items-center relative">
   <Link to="/" ><span className="text-4xl" >TypeSprint</span> </Link> 
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`absolute md:relative top-12 right-0 bg-blue-600 p-4 md:p-0 md:flex md:static ${menuOpen ? 'block' : 'hidden'}`}>
    <Link to="/round1" className="mx-2 px-4 py-2 bg-gray-800 text-white rounded block md:inline">Round 1</Link>
    <Link to="/round2" className="mx-2 px-4 py-2 bg-gray-800 text-white rounded block md:inline">Round 2</Link>
    <Link to="/final" className="mx-2 px-4 py-2 bg-gray-800 text-white rounded block md:inline">Final</Link>
</nav>

            </header>

        <div className="  bg-gray-100 min-h-screen">
            
           
            <h1 className="text-3xl font-extrabold pt-6 text-center mb-6 animate-fade-in">Typing Speed Evaluation Round-1</h1>
            <div className="flex flex-wrap gap-4 justify-center mb-6 animate-slide-in">
                <input className="border p-2 rounded shadow-sm" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <select className="border p-2 rounded shadow-sm" value={classLevel} onChange={(e) => setClassLevel(e.target.value)}>
                    <option value="FE">FE</option>
                    <option value="SE">SE</option>
                    <option value="TE">TE</option>
                    <option value="BE">BE</option>
                </select>
                <input className="border p-2 rounded shadow-sm" type="number" placeholder="WPM" value={wpm} onChange={(e) => setWpm(e.target.value)} />
                <input className="border p-2 rounded shadow-sm" type="number" placeholder="Accuracy" value={accuracy} onChange={(e) => setAccuracy(e.target.value)} />
                <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md" onClick={addParticipant}>Add</Button>
            </div>
            
            <h2 className="text-xl font-bold mt-6 text-center animate-fade-in">Ongoing Entries</h2>
            <div className="overflow-x-auto p-4 animate-slide-in max-w-full">
                <Table className="min-w-full">
                    <TableHead>
                        <TableRow className="bg-blue-500 text-white">
                            <TableCell>Name</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>WPM</TableCell>
                            <TableCell>Accuracy</TableCell>
                            <TableCell>Percent</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {participants.map((p, index) => (
                            <TableRow key={index} className="hover:bg-gray-200 transition-all">
                                <TableCell>{p.name}</TableCell>
                                <TableCell>{p.classLevel}</TableCell>
                                <TableCell>{p.wpm}</TableCell>
                                <TableCell>{p.accuracy}</TableCell>
                                <TableCell>{p.percent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <div className="text-center mt-6 animate-bounce">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md" onClick={evaluateBatch}>Evaluate Batch</Button>
            </div>
            
            {batchResults.map((batch, index) => (
                <div key={index} className="mt-8">
                    <h2 className="text-xl font-bold text-center animate-fade-in">Batch {batch.batchNumber} Results</h2>
                    <div className="overflow-x-auto p-4 animate-slide-in max-w-full">
                        <Table className="min-w-full">
                            <TableHead>
                                <TableRow className="bg-gray-700 text-white">
                                    <TableCell>Name</TableCell>
                                    <TableCell>Class</TableCell>
                                    <TableCell>WPM</TableCell>
                                    <TableCell>Accuracy</TableCell>
                                    <TableCell>Percent</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {batch.results.map((p, index) => (
                                    <TableRow key={index} className={p.status === "Success" ? "bg-green-200 hover:bg-green-300 transition-all" : "bg-red-200 hover:bg-red-300 transition-all"}>
                                        <TableCell>{p.name}</TableCell>
                                        <TableCell>{p.classLevel}</TableCell>
                                        <TableCell>{p.wpm}</TableCell>
                                        <TableCell>{p.accuracy}</TableCell>
                                        <TableCell>{p.percent}</TableCell>
                                        <TableCell>{p.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="text-center mt-4 animate-pulse">
                        <CSVLink data={batch.results} filename={`batch_${batch.batchNumber}_typing_evaluation.csv`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md">Download CSV</CSVLink>
                    </div>
                </div>
            ))}
             <footer className="bg-gray-800 text-white text-center p-4 mt-auto w-full fixed bottom-0">
                Follow <a href="https://github.com/VaibhavVishwakarma" className="text-blue-400 underline">this guy</a> for more!
            </footer>
        </div>
        </div>
    );
};

export default TypingEvaluation;

"use client";
import React, { useState, useRef, useEffect } from "react";

export default function FloatingTerminal() {
  const [open, setOpen] = useState(false);
  const [logs, setLogs] = useState([
    { type: "system", text: "Welcome! Type 'help' to see commands." }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalRef = useRef(null);

  // blinking cursor
  useEffect(() => {
    const i = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(i);
  }, []);

  // auto-scroll
  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [logs, currentInput]);

  const handleKeyDown = (e) => {
    if (!open) return;
    e.preventDefault();
    if (e.key === "Backspace") setCurrentInput(prev => prev.slice(0, -1));
    else if (e.key === "Enter") {
      executeCommand(currentInput.trim());
      setCurrentInput("");
    } else if (e.key.length === 1) setCurrentInput(prev => prev + e.key);
    else if (e.key === "Escape") setOpen(false);
  };

  const executeCommand = (cmd) => {
    if (!cmd) return;
    let response = "";
    let type = "response";
    switch (cmd.toLowerCase()) {
      case "help":
        response = "Available commands: about, skills, contact, clear";
        break;
      case "about":
        response = "Hi! I'm VETTRIVEL U, Offensive Security Expert from India.";
        break;
      case "skills":
        response = "Skills: Penetration Testing, Bug Bounty, Web Security, Linux";
        break;
      case "contact":
        response = "Contact: uvettrivel007@gmail.com";
        break;
      case "clear":
        setLogs([]);
        return;
      default:
        response = `Command not found: ${cmd}`;
        type = "error";
    }
    setLogs(prev => [
      ...prev,
      { type: "command", text: cmd },
      { type, text: response }
    ]);
  };

  return (
    <>
      {/* Floating round button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Terminal"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full
                   bg-gradient-to-r from-gray-800 to-gray-700
                   border border-blue-600/40
                   shadow-xl hover:scale-110 hover:shadow-2xl
                   transition duration-200 ease-in-out"
      >
        <span className="text-blue-300 text-2xl font-bold">&gt;_</span>
      </button>

      {/* Slide-in terminal panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full sm:w-[480px]
                    bg-gradient-to-b from-[#0d1117] to-[#000]
                    text-green-500 shadow-2xl
                    rounded-r-lg border-r border-gray-700/40
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* Header bar */}
        <div className="flex items-center gap-2 px-4 py-2
                        bg-[#1a1f24] border-b border-gray-700/50
                        rounded-tr-lg">
          <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
          <span className="ml-3 text-gray-300 text-sm font-semibold">
            kali@user:~ 
          </span>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto text-gray-400 hover:text-white
                       text-lg font-bold px-2 focus:outline-none"
          >
            ×
          </button>
        </div>

        {/* Terminal output */}
        <div
          ref={terminalRef}
          className="p-6 max-h-[calc(100vh-60px)] overflow-y-auto
                     whitespace-pre-wrap font-mono text-base leading-relaxed"
        >
          {logs.map((log, idx) => (
            <div key={idx} className="mb-1">
              {log.type === "command" && (
                <span className="text-green-400">
                  kali@user:~$ {log.text}
                </span>
              )}
              {log.type === "response" && (
                <div className="ml-4 text-green-300">{log.text}</div>
              )}
              {log.type === "system" && (
                <div className="text-gray-400">{log.text}</div>
              )}
              {log.type === "error" && (
                <div className="ml-4 text-red-400">{log.text}</div>
              )}
            </div>
          ))}

          {/* Prompt */}
          <div className="flex mt-2">
            <span className="text-green-400">kali@user:~$ </span>
            <span className="text-green-200">{currentInput}</span>
            {cursorVisible && (
              <span className="animate-pulse text-green-300">█</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

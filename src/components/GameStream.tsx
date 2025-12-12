import { useEffect, useRef } from "react";

export default function GameStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("I GOT EXECUTED");
    if ((window as any).__gameServerStarted) return;
    (window as any).__gameServerStarted = true;
    const startServerAndConnect = async () => {
      try {
        console.log("I got executed");
        // 1. Start Python server via Tauri
        // await invoke("start_python_server");
        console.log("Python server started");

        // 2. Give the server a short delay to actually bind
        await new Promise((res) => setTimeout(res, 1000));

        // 3. Connect WebSocket
        const ws = new WebSocket("ws://127.0.0.1:8765");
        ws.binaryType = "arraybuffer";

        ws.onmessage = (event) => {
          const blob = new Blob([event.data], { type: "image/jpeg" });
          const img = new Image();
          img.onload = () => {
            const ctx = canvasRef.current!.getContext("2d");
            ctx?.drawImage(
              img,
              0,
              0,
              canvasRef.current!.width,
              canvasRef.current!.height
            );
            URL.revokeObjectURL(img.src);
          };
          img.src = URL.createObjectURL(blob);
        };

        ws.onopen = () => console.log("WebSocket connected!");
        ws.onerror = (err) => console.error("WebSocket error:", err);
      } catch (err) {
        console.error("Failed to start server or connect:", err);
      }
    };

    startServerAndConnect();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-64 rounded-lg"></canvas>;
}

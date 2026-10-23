import { useEffect } from "react";
import { sizeCharts, type ChartKey } from "@/lib/sizeCharts";

export function SizeChartModal({ charts, onClose }: { charts: ChartKey[]; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="chrome-border max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-card p-6 animate-in zoom-in-95"
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="chrome-text font-display text-xl font-black uppercase">Size chart</h3>
          <button onClick={onClose} aria-label="Close size chart" className="h-9 w-9 rounded-full border">
            ✕
          </button>
        </div>
        {charts.map((k) => {
          const c = sizeCharts[k];
          return (
            <div key={k} className="mb-7 last:mb-0">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.title}</p>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    {c.columns.map((col) => (
                      <th key={col} className="border-b pb-2 text-left font-display text-xs uppercase tracking-wider">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((r) => (
                    <tr key={r[0]}>
                      {r.map((cell, i) => (
                        <td key={i} className="border-b border-border/50 py-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {c.note && <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

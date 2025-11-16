
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme:{ extend:{ colors:{ ink:"#0b1220", accent:"#0ea5e9", accent2:"#22d3ee" },
    boxShadow:{ ring:"0 10px 30px rgba(34,211,238,.35)", ring2:"0 8px 20px rgba(14,165,233,.25)" } } },
  plugins: [],
};
export default config;

window.GRIND_CFG = {
  NAME: "GRINDSET",
  TICKER: "GRIND",
  CA: "",
  CHAIN: "solana",
  PAD: "pumpfun",
  PAIR: "",
  X: "",
  BUY: "",
  CHART: "",
  // live server (Supabase) — empty = demo mode with bots
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",
  // wallet that receives $GRIND spent in-game (perks, exclusive gear, market fee)
  TREASURY: "",
  MARKET_FEE: 0.05,          // 5% of each market sale -> weekly pool
  WEEKLY_POOL_CAP: 250000,   // max $GRIND paid out per week
  DEMO_GRIND: 25000          // demo wallet balance in preview
};

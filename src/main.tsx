import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TooltipProvider } from "./components/ui/tooltip.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// The `tooltip` component has been added. Remember to wrap your app with the `TooltipProvider` component.

// ```tsx title="app/layout.tsx"
// import { TooltipProvider } from "@/components/ui/tooltip"

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <TooltipProvider>{children}</TooltipProvider>
//       </body>
//     </html>
//   )
// }
// import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Home, AlertCircle } from "lucide-react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import { motion } from "framer-motion";

// const ErrorPage = () => {
//   const error = useRouteError();

//   let title = "Unexpected Error";
//   let message = "Something went wrong.";
//   let statusCode = 500;

//   if (isRouteErrorResponse(error)) {
//     statusCode = error.status;
//     if (error.status === 404) {
//       title = "Page Not Found";
//       message = "The page you are looking for doesn't exist.";
//     } else if (error.status === 401) {
//       title = "Unauthorized";
//       message = "You need to be logged in to access this page.";
//     } else if (error.status === 403) {
//       title = "Forbidden";
//       message = "You don't have permission to access this resource.";
//     } else if (error.status === 500) {
//       title = "Server Error";
//       message = "Something went wrong on our servers. Please try again later.";
//     } else {
//       title = error.statusText || title;
//       message = error.data || message;
//     }
//   }

//   // Different Lottie animations based on error type
//   const getLottieAnimation = () => {
//     if (statusCode === 404) {
//       return "https://lottie.host/4b0f7a9f-5c6d-4c3e-8a7f-7a3d3c6a9c3d/4XwUqg2XpW.json";
//     } else if (statusCode === 401 || statusCode === 403) {
//       return "https://lottie.host/5b5e5c5d-5c6d-4c3e-8a7f-7a3d3c6a9c3d/6XwUqg2XpW.json";
//     } else {
//       return "https://lottie.host/8d3c6c7a-4a4e-4a3e-8a7f-7a3d3c6a9c3d/5XwUqg2XpW.json";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-md w-full text-center"
//       >
//         {/* Error Code */}
//         <motion.div 
//           initial={{ scale: 0.5 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
//           className="text-8xl font-bold mb-2 text-destructive"
//         >
//           {statusCode}
//         </motion.div>

//         {/* Lottie Animation */}
//         <div className="mb-6">
//           <Player
//             autoplay
//             loop
//             src={getLottieAnimation()}
//             style={{ height: '200px', width: '200px' }}
//           />
//         </div>

//         {/* Icon */}
//         <div className="flex justify-center mb-4">
//           <div className="p-3 rounded-full bg-destructive/20">
//             <AlertCircle className="h-10 w-10 text-destructive" />
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold mb-4 text-foreground">
//           {title}
//         </h1>

//         {/* Message */}
//         <p className="text-muted-foreground mb-8">
//           {message}
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button asChild className="bg-primary hover:bg-primary/90">
//             <Link to="/" className="flex items-center gap-2">
//               <Home className="h-4 w-4" />
//               Go Home
//             </Link>
//           </Button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ErrorPage;







import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, RefreshCcw, ShieldAlert, WifiOff } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "System Malfunction";
  let message = "We've encountered an unexpected issue.";
  let statusCode = 500;
  let errorType = "server"; // '404', 'auth', 'server'

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    if (error.status === 404) {
      title = "Page Not Found";
      message = "The page you are looking for has vanished into the digital void.";
      errorType = "404";
    } else if (error.status === 401) {
      title = "Unauthorized Access";
      message = "Your session has expired or you do not have clearance.";
      errorType = "auth";
    } else if (error.status === 403) {
      title = "Access Forbidden";
      message = "You don't have permission to access this financial resource.";
      errorType = "auth";
    } else if (error.status === 500) {
      title = "Server Error";
      message = "Our servers are experiencing heavy traffic. Please try again later.";
      errorType = "server";
    } else {
      title = error.statusText || title;
      message = error.data || message;
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-emerald-500/30">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full" />
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center relative z-10"
      >
        {/* --- VISUAL SECTION --- */}
        <div className="mb-8 flex justify-center">
          {errorType === "404" ? (
             // The Requested GIF for 404
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-800"
             >
                <img
                  src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                  alt="404 illustration"
                  className="w-full max-w-md object-cover"
                />
             </motion.div>
          ) : (
             // Fallback Icon Animation for Non-404 Errors
             <div className="relative">
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 rounded-full border-2 border-slate-800 border-dashed"
                />
                <div className="w-40 h-40 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 shadow-xl relative z-10">
                   {errorType === 'auth' ? (
                     <ShieldAlert size={64} className="text-amber-500" />
                   ) : (
                     <WifiOff size={64} className="text-red-500" />
                   )}
                </div>
             </div>
          )}
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="space-y-4 mb-10">
          <motion.div 
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.1, type: "spring" }}
             className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 font-mono text-sm"
          >
             Error Code: <span className={errorType === '404' ? "text-emerald-500" : "text-red-500"}>{statusCode}</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {title}
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            {message}
          </p>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
          >
            <Home size={18} />
            Go Home
          </Link>
          
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white font-medium rounded-xl transition-all"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>
        </div>

      </motion.div>

      {/* Decorative Bottom Text */}
      <div className="absolute bottom-8 text-center text-slate-600 text-xs uppercase tracking-widest">
        Gigi Wallet System Diagnostics
      </div>
    </div>
  );
};

export default ErrorPage;
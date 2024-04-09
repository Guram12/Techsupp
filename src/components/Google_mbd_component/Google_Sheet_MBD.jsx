import "./Google_Sheet_MBD.css"


function GoogleSheetEmbed() {
  return (
      <iframe className="google-sheet-iframe"  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSt9M45IZqPCDCcHDfE846NIfmPOUID-P8ga6xQq8nionHziq7faWA0IIiY5yJ6G_YmMLz95eYGZkM_/pubhtml?widget=true&amp;headers=false"></iframe>
  );
}

export default GoogleSheetEmbed;












// import "./Google_Sheet_MBD.css";
// import React, { useState } from 'react';

// function GoogleSheetEmbed() {
//   // Initialize isLoading to true because we are starting in a loading state
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <>
//       {isLoading ? 
//         <div>Loading...</div> : // Show this div while isLoading is true
//         <iframe 
//             className="google-sheet-iframe" 
//             src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSt9M45IZqPCDCcHDfE846NIfmPOUID-P8ga6xQq8nionHziq7faWA0IIiY5yJ6G_YmMLz95eYGZkM_/pubhtml?widget=true&amp;headers=false"
//             onLoad={() => {
//               console.log('Iframe has loaded');
//               setIsLoading(false);
//           }}
//         ></iframe>
//       }
//     </>
//   );
// }

// export default GoogleSheetEmbed;

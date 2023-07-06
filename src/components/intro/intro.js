import React from 'react';
// Ō
import '../../index.css';
import reportWebVitals from '../../reportWebVitals';
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

import Auth from './Auth.jsx';
import LoginForm from './Login.jsx';
import RegisterForm from './Register.jsx';
import Phonenoform from './Phoneno.jsx';
import Numberverificationform from './Numberverification.jsx'
import Domainselectionform from './Selectdomain.jsx'
import Skillselectionform from './Otherskills';
import TermsForm from './T&c';
import Birthdayform from './Birthday';
import Thanks from './Thanks';
const intro = (
  <div>
    <Auth>
      <Routes>
        <Route element={<LoginForm />} index={true} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="phone" element={<Phonenoform />} />
        <Route path="verification" element={<Numberverificationform />} />
        <Route path="domain" element={<Domainselectionform />} />
        <Route path="terms" element={<TermsForm />} />
        <Route path="skills" element={<Skillselectionform />} />
        <Route path="birthday" element={<Birthdayform />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
    </Auth>
  </div>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Auth />,
//     children: [
//       {
//         index: true,
//         element: <LoginForm />
//       },
//       {
//         path: "register",
//         element: <RegisterForm />
//       },
//       {
//         path: "phone",
//         element: <Phonenoform />
//       },
//       {
//         path: "verification",
//         element: <Numberverificationform />
//       },
//       {
//         path: "domain",
//         element: <Domainselectionform />
//       },
//       {
//         path: "terms",
//         element: <TermsForm />
//       },
//       {
//         path: "skills",
//         element: <Skillselectionform />
//       },
//       {
//         path: "birthday",
//         element: <Birthdayform />
//       }
//     ]
//   },
//   {
//     path: "/thanks",
//     element: <Thanks />
//   }
// ]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <RouterProvider router={router} /> */}
//     {/* {intro} */}
//   </React.StrictMode>
// );
reportWebVitals();

export default intro;
// export default createBrowserRouter;

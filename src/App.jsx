import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import Layout from "./Layout/Layout";
import HomePage from "./pages/Homepage/HomePage";
import AboutPage from "./pages/Aboutpage/AboutPage";
import TemplatePage from "./pages/Templatepage/TemplatePage";
import { ThemeProvider } from "./ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store/Store.js";
import Login from "./auth/Login.jsx";
import Register from "./auth/RegisterForm.jsx";
import Profile from "./auth/Profile.jsx";
import UserDetail from "./auth/UserDetail.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import OverviewPage from "./pages/Dashboard/components/OverviewPage.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import GetPortfolio10 from "./portfolios/Portfolio/GetPortfolio10.jsx";
import { Navigate } from "react-router";
// dashboard
import FavoritesPage from "./pages/Dashboard/components/FavoritesPage.jsx";
// import MyTemplates from "./pages/Dashboard/components/MyTemplates.jsx";
import DashboardComponent from "./template/DashBoardComponent06.jsx";
import FormEducation from "../test/EducationForm.jsx";
import UserTemplate01 from "./pages/Templates/UserTemplate01.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import EditContact from "./Update/EditContact.jsx";
import EditEducation from "./Update/EditEducation.jsx";
import EditSkill from "./Update/EditSkill.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Portfolio1 from "./components/Portfolio1.jsx";
import Portfolio2 from "./components/Portfolio2.jsx";
import Portfolio3 from "./components/Portfolio3.jsx";
import Portfolio4 from "./portfolios/Portfolio-static/Portfolio4.jsx";
import Portfolio5 from "./portfolios/Portfolio-static/Portfolio5.jsx";
import Portfolio6 from "./portfolios/Portfolio-static/Portfolio6.jsx";
import Portfolio7 from "./portfolios/Portfolio-static/Portfolio7.jsx";
import Portfolio8 from "./portfolios/Portfolio-static/Portfolio8.jsx";
import Portfolio9 from "./portfolios/Portfolio-static/Portfolio9.jsx";
import Portfolio10 from "./portfolios/Portfolio-static/Portfolio10.jsx";
import Portfolio11 from "./portfolios/Portfolio-static/Portfolio11.jsx";
import Portfolio12 from "./portfolios/Portfolio-static/Portfolio12.jsx";
import GetPortfolio4 from "./portfolios/Portfolio/GetPortfolio4.jsx";
import GetPortfolio8 from "./portfolios/Portfolio/GetPortfolio8.jsx";
import SkillForm from "../test/SkillForm.jsx";
import JobForm from "../test/JobForm.jsx";
import EducationForm from "../test/EducationForm.jsx";
import SocialAccountForm from "../test/SocialAccountForm.jsx";
import ProjectForm from "../test/ProjectForm.jsx";
import Template from "./pages/Dashboard/components/Template.jsx";
import EditJob from "./Update/EditJob.jsx";
import EditSocialAccount from "./Update/EditSocialAccount.jsx";
import EditProject from "./Update/EditProject.jsx";
import PortfolioPreview from "./pages/Dashboard/PortfolioPreview.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import AOSRefresh from "./AOSRefresh";
import Developer from "./pages/Templatepage/Categories/Developer.jsx";
import Photographer from "./pages/Templatepage/Categories/Photographer.jsx";
import GetPortfolio5 from "./portfolios/Portfolio/GetPortfolio5.jsx";
import PreviewPage from "./pages/Dashboard/components/PreviewPage.jsx";
import EditProfile from "./auth/EditProfile.jsx";
// import EditUser from "./auth/EditUser.jsx";
import AdminUsers from "./pages/Admin/AdminUsers.jsx";
import AdminAnalytics from "./pages/Admin/AdminAnalytics.jsx";
import AdminPortfolios from "./pages/Admin/AdminPortfolios.jsx";
import AdminTemplates from "./pages/Admin/AdminTemplates.jsx";
import AdminSettings from "./pages/Admin/AdminSettings.jsx";
import AdminPermissions from "./pages/Admin/AdminPermissions.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import DashboardComponent06 from "./template/DashBoardComponent06.jsx";
import AdminContact from "./pages/Admin/AdminContact.jsx";
import AdminJob from "./pages/Admin/AdminJob.jsx";
import AdminProject from "./pages/Admin/AdminProject.jsx";
import AdminSkill from "./pages/Admin/AdminSkill.jsx";
import AdminSocial from "./pages/Admin/AdminSocail.jsx";
import PublicPortfolio from "./pages/Dashboard/PublicPortfolio.jsx";
import { fa } from "zod/v4/locales";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);
  const token = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <ScrollToTop />
            <AOSRefresh />
            <Routes>
              <Route path="/contact/edit/:id" element={<EditContact />} />
              <Route path="/education/edit/:id" element={<EditEducation />} />
              <Route path="/skills/edit/:id" element={<EditSkill />} />
              <Route path="/1" element={<DashboardComponent06 />}></Route>

              <Route path="/*" element={<NotFoundPage />}></Route>
              <Route path="/template1" element={<UserTemplate01 />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>{" "}
              <Route path="/portfolio1" element={<Portfolio1 />}></Route>{" "}
              <Route path="/portfolio2" element={<Portfolio2 />}></Route>{" "}
              <Route path="/portfolio3" element={<Portfolio3 />}></Route>{" "}
              {" "}

              <Route path="/portfolio6" element={<Portfolio6 />}></Route>
              <Route path="/portfolio7" element={<Portfolio7 />}></Route>

              <Route path="/portfolio9" element={<Portfolio9 />}></Route>{" "}
              <Route path="/portfolio10" element={<Portfolio10 />}></Route>
              <Route path="/portfolio11" element={<Portfolio11 />}></Route>
              <Route path="/portfolio12" element={<Portfolio12 />}></Route>
              {/* Layout Routes */}
              <Route path="/:username" element={<PublicPortfolio />} />
              <Route path="/" element={<Layout />}>
                {/* public portfolio */}



                {/* portfolio prevview */} <Route path="/portfolio4" element={<Portfolio4 />}></Route>
                <Route path="/portfolio5" element={<Portfolio5 />}></Route>
                <Route path="/portfolio8" element={<Portfolio8 />}></Route>
                {/*  category*/}
                <Route path="/developer-category" element={<Developer />}></Route>
                <Route path="/photographer-category" element={<Photographer />}></Route>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="template" element={<TemplatePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/userDetail" element={<UserDetail />}></Route>
                <Route path="/homepage" element={<HomePage />} />


                <Route path="/getPortfolio4" element={<GetPortfolio4 />}></Route>
                <Route path="/getPortfolio8" element={<GetPortfolio8 />}></Route>
              </Route>

              {/* <Route path="template1" element={<Template1 />}></Route> */}

              {/* dashboard  */}
              <Route path="/*" element={<NotFoundPage />}></Route>
              <Route path="/preview/:templateId" element={<PreviewPage />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>

                <Route path="profile" element={<EditProfile />}></Route>
                <Route index element={<Navigate to="overview" replace />} />
                <Route path="create-skill" element={<SkillForm />} />
                <Route path="create-job" element={<JobForm />} />
                <Route path="create-education" element={<EducationForm />} />
                <Route path="create-project" element={<ProjectForm />} />
                <Route path="create-social-account" element={<SocialAccountForm />} />

                <Route path="skill/:id" element={<EditSkill />} />
                <Route path="education/:id" element={<EditEducation />} />
                <Route path="project/:id" element={<EditProject />} />
                <Route path="job/:id" element={<EditJob />} />
                <Route
                  path="social/:id"
                  element={<EditSocialAccount />}
                />
                <Route path="edit-skill" element={<EditSkill />}></Route>
                <Route path="edit-job" element={<EditJob />}></Route>
                <Route path="edit-education" element={<EditEducation />}></Route>
                <Route path="edit-socail-account" element={<EditSocialAccount />}></Route>
                <Route path="edit-project" element={<EditProject />}></Route>
                <Route path="edit-contact" element={<EditContact />}></Route>
                <Route path="overview" element={<OverviewPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="template" element={<Template />} />
                <Route path="portfolio/1" element={<GetPortfolio4 />}></Route>
                <Route path="portfolio/2" element={<GetPortfolio5 />}></Route>
                <Route path="portfolio/3" element={<GetPortfolio8 />}></Route>
                <Route path="portfolio/4" element={<GetPortfolio10 />}></Route>
                <Route path="admin/jobs" element={<ProtectedRoute requiredRole="admin"><AdminJob /></ProtectedRoute>} />
                {/* Admin Routes within Dashboard */}
                <Route path="admin/users" element={<ProtectedRoute requiredRole="admin"><AdminUsers /></ProtectedRoute>} />
                <Route path="admin/contacts" element={<ProtectedRoute requiredRole="admin"><AdminContact /></ProtectedRoute>} />

                <Route path="admin/projects" element={<ProtectedRoute requiredRole="admin"><AdminProject /></ProtectedRoute>} />
                <Route path="admin/skills" element={<ProtectedRoute requiredRole="admin"><AdminSkill /></ProtectedRoute>} />
                <Route path="admin/socails" element={<ProtectedRoute requiredRole="admin"><AdminSocial /></ProtectedRoute>} />
                <Route path="admin/analytics" element={<ProtectedRoute requiredRole="admin"><AdminAnalytics /></ProtectedRoute>} />
                <Route path="admin/templates" element={<ProtectedRoute requiredRole="admin"><AdminTemplates /></ProtectedRoute>} />
                <Route path="admin/portfolios" element={<ProtectedRoute requiredRole="admin"><AdminPortfolios /></ProtectedRoute>} />
                <Route path="admin/settings" element={<ProtectedRoute requiredRole="admin"><AdminSettings /></ProtectedRoute>} />
                <Route path="admin/logs" element={<ProtectedRoute requiredRole="admin"><div className="p-6"><h1 className="text-2xl font-bold">System Logs</h1><p>System logs coming soon...</p></div></ProtectedRoute>} />
                <Route path="admin/backup" element={<ProtectedRoute requiredRole="admin"><div className="p-6"><h1 className="text-2xl font-bold">Backup & Restore</h1><p>Backup functionality coming soon...</p></div></ProtectedRoute>} />
              </Route>
              <Route path="/edit-template" element={<DashboardComponent />} />
              {/* Admin Routes */}
              {/* <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>}>
                <Route index element={<AdminUsers />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="analytics" element={<AdminAnalytics />} />
                <Route path="portfolios" element={<AdminPortfolios />} />
                <Route path="templates" element={<AdminTemplates />} />
                <Route path="contacts" element={<AdminContact />} />
                <Route path="jobs" element={<AdminJob />} />
                <Route path="projects" element={<AdminProject />} />
                <Route path="skills" element={<AdminSkill />} />
                <Route path="socails" element={<AdminSocial />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="permissions" element={<AdminPermissions />} />
              </Route> */}
              <Route
                path="admin"
                element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>}
              >
                <Route index element={<AdminUsers />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="analytics" element={<AdminAnalytics />} />
                <Route path="portfolios" element={<AdminPortfolios />} />
                <Route path="templates" element={<AdminTemplates />} />
                <Route path="contacts" element={<AdminContact />} />
                <Route path="jobs" element={<AdminJob />} />
                <Route path="projects" element={<AdminProject />} />
                <Route path="skills" element={<AdminSkill />} />
                <Route path="socails" element={<AdminSocial />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="permissions" element={<AdminPermissions />} />
              </Route>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/form" element={<FormEducation />}></Route>
            </Routes>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App




// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Provider } from "react-redux";
// import { store } from "./store/Store.js";
// import { ThemeProvider } from "./ThemeContext";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Layout from "./Layout/Layout";
// import ScrollToTop from "./ScrollToTop.jsx";
// import AOSRefresh from "./AOSRefresh";

// // Pages
// import HomePage from "./pages/Homepage/HomePage";
// import AboutPage from "./pages/Aboutpage/AboutPage";
// import TemplatePage from "./pages/Templatepage/TemplatePage";

// // Auth
// import Login from "./auth/Login.jsx";
// import Register from "./auth/RegisterForm.jsx";
// import Profile from "./auth/Profile.jsx";
// import UserDetail from "./auth/UserDetail.jsx";
// import EditProfile from "./auth/EditProfile.jsx";

// // Dashboard
// import Dashboard from "./pages/Dashboard/Dashboard.jsx";
// import OverviewPage from "./pages/Dashboard/components/OverviewPage.jsx";
// import FavoritesPage from "./pages/Dashboard/components/FavoritesPage.jsx";
// import Template from "./pages/Dashboard/components/Template.jsx";
// import PreviewPage from "./pages/Dashboard/PortfolioPreview.jsx";

// // Portfolio
// import Portfolio from "./components/Portfolio.jsx";
// import Portfolio1 from "./components/Portfolio1.jsx";
// import Portfolio2 from "./components/Portfolio2.jsx";
// import Portfolio3 from "./components/Portfolio3.jsx";
// import Portfolio4 from "./portfolios/Portfolio-static/Portfolio4.jsx";
// import Portfolio5 from "./portfolios/Portfolio-static/Portfolio5.jsx";
// import Portfolio6 from "./portfolios/Portfolio-static/Portfolio6.jsx";
// import Portfolio7 from "./portfolios/Portfolio-static/Portfolio7.jsx";
// import Portfolio8 from "./portfolios/Portfolio-static/Portfolio8.jsx";
// import Portfolio9 from "./portfolios/Portfolio-static/Portfolio9.jsx";
// import Portfolio10 from "./portfolios/Portfolio-static/Portfolio10.jsx";
// import Portfolio11 from "./portfolios/Portfolio-static/Portfolio11.jsx";
// import Portfolio12 from "./portfolios/Portfolio-static/Portfolio12.jsx";

// import GetPortfolio4 from "./portfolios/Portfolio/GetPortfolio4.jsx";
// import GetPortfolio5 from "./portfolios/Portfolio/GetPortfolio5.jsx";
// import GetPortfolio8 from "./portfolios/Portfolio/GetPortfolio8.jsx";
// import GetPortfolio10 from "./portfolios/Portfolio/GetPortfolio10.jsx";

// // Forms
// import SkillForm from "../test/SkillForm.jsx";
// import JobForm from "../test/JobForm.jsx";
// import EducationForm from "../test/EducationForm.jsx";
// import SocialAccountForm from "../test/SocialAccountForm.jsx";
// import ProjectForm from "../test/ProjectForm.jsx";

// // Edit components
// import EditContact from "./Update/EditContact.jsx";
// import EditEducation from "./Update/EditEducation.jsx";
// import EditSkill from "./Update/EditSkill.jsx";
// import EditJob from "./Update/EditJob.jsx";
// import EditSocialAccount from "./Update/EditSocialAccount.jsx";
// import EditProject from "./Update/EditProject.jsx";

// // Admin
// import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
// import AdminUsers from "./pages/Admin/AdminUsers.jsx";
// import AdminAnalytics from "./pages/Admin/AdminAnalytics.jsx";
// import AdminPortfolios from "./pages/Admin/AdminPortfolios.jsx";
// import AdminTemplates from "./pages/Admin/AdminTemplates.jsx";
// import AdminSettings from "./pages/Admin/AdminSettings.jsx";
// import AdminPermissions from "./pages/Admin/AdminPermissions.jsx";
// import AdminContact from "./pages/Admin/AdminContact.jsx";
// import AdminJob from "./pages/Admin/AdminJob.jsx";
// import AdminProject from "./pages/Admin/AdminProject.jsx";
// import AdminSkill from "./pages/Admin/AdminSkill.jsx";
// import AdminSocial from "./pages/Admin/AdminSocail.jsx";

// // Other
// import Developer from "./pages/Templatepage/Categories/Developer.jsx";
// import Photographer from "./pages/Templatepage/Categories/Photographer.jsx";
// import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";

// // Protected Route
// import ProtectedRoute from "./auth/ProtectedRoute.jsx";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     AOS.init({
//       duration: 900,
//       easing: "ease-out-cubic",
//       once: false,
//     });
//   }, []);

//   return (
//     <BrowserRouter>
//       <Provider store={store}>
//         <ThemeProvider>
//           <ScrollToTop />
//           <AOSRefresh />
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Layout />}>
//               <Route index element={<HomePage />} />
//               <Route path="about" element={<AboutPage />} />
//               <Route path="template" element={<TemplatePage />} />
//               <Route path="profile" element={<Profile />} />
//               <Route path="userDetail" element={<UserDetail />} />
//               <Route path="/portfolio" element={<Portfolio />} />
//               <Route path="/portfolio1" element={<Portfolio1 />} />
//               <Route path="/portfolio2" element={<Portfolio2 />} />
//               <Route path="/portfolio3" element={<Portfolio3 />} />
//               <Route path="/portfolio4" element={<Portfolio4 />} />
//               <Route path="/portfolio5" element={<Portfolio5 />} />
//               <Route path="/portfolio6" element={<Portfolio6 />} />
//               <Route path="/portfolio7" element={<Portfolio7 />} />
//               <Route path="/portfolio8" element={<Portfolio8 />} />
//               <Route path="/portfolio9" element={<Portfolio9 />} />
//               <Route path="/portfolio10" element={<Portfolio10 />} />
//               <Route path="/portfolio11" element={<Portfolio11 />} />
//               <Route path="/portfolio12" element={<Portfolio12 />} />
//               <Route path="/developer-category" element={<Developer />} />
//               <Route path="/photographer-category" element={<Photographer />} />
//             </Route>

//             {/* Auth Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* Dashboard - Protected */}
//             <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             >
//               <Route index element={<Navigate to="overview" replace />} />
//               <Route path="overview" element={<OverviewPage />} />
//               <Route path="favorites" element={<FavoritesPage />} />
//               <Route path="template" element={<Template />} />
//               <Route path="preview/:templateId" element={<PreviewPage />} />

//               {/* Portfolio inside Dashboard */}
//               <Route path="portfolio/1" element={<GetPortfolio4 />} />
//               <Route path="portfolio/2" element={<GetPortfolio5 />} />
//               <Route path="portfolio/3" element={<GetPortfolio8 />} />
//               <Route path="portfolio/4" element={<GetPortfolio10 />} />

//               {/* Forms */}
//               <Route path="create-skill" element={<SkillForm />} />
//               <Route path="create-job" element={<JobForm />} />
//               <Route path="create-education" element={<EducationForm />} />
//               <Route path="create-project" element={<ProjectForm />} />
//               <Route path="create-social-account" element={<SocialAccountForm />} />

//               {/* Edit */}
//               <Route path="skill/:id" element={<EditSkill />} />
//               <Route path="education/:id" element={<EditEducation />} />
//               <Route path="project/:id" element={<EditProject />} />
//               <Route path="job/:id" element={<EditJob />} />
//               <Route path="social/:id" element={<EditSocialAccount />} />
//               <Route path="edit-profile" element={<EditProfile />} />
//               <Route path="edit-contact" element={<EditContact />} />

//               {/* Admin inside Dashboard */}
//               <Route
//                 path="admin/*"
//                 element={
//                   <ProtectedRoute requiredRole="admin">
//                     <AdminDashboard />
//                   </ProtectedRoute>
//                 }
//               >
//                 <Route index element={<AdminUsers />} />
//                 <Route path="users" element={<AdminUsers />} />
//                 <Route path="analytics" element={<AdminAnalytics />} />
//                 <Route path="portfolios" element={<AdminPortfolios />} />
//                 <Route path="templates" element={<AdminTemplates />} />
//                 <Route path="contacts" element={<AdminContact />} />
//                 <Route path="jobs" element={<AdminJob />} />
//                 <Route path="projects" element={<AdminProject />} />
//                 <Route path="skills" element={<AdminSkill />} />
//                 <Route path="socails" element={<AdminSocial />} />
//                 <Route path="settings" element={<AdminSettings />} />
//                 <Route path="permissions" element={<AdminPermissions />} />
//               </Route>
//             </Route>

//             {/* Catch all */}
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </ThemeProvider>
//       </Provider>
//     </BrowserRouter>
//   );
// }

// export default App;
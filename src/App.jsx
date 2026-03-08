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
import Portfolio from "./portfolios/Portfolio-static/Portfolio.jsx";
import Portfolio1 from "./portfolios/Portfolio-static/Portfolio1.jsx";
import Portfolio2 from "./portfolios/Portfolio-static/Portfolio2.jsx";
import Portfolio3 from "./portfolios/Portfolio-static/Portfolio3.jsx";
import Portfolio4 from "./portfolios/Portfolio-static/Portfolio4.jsx";
import Portfolio5 from "./portfolios/Portfolio-static/Portfolio5.jsx";
import Portfolio6 from "./portfolios/Portfolio-static/Portfolio6.jsx";
import Portfolio7 from "./portfolios/Portfolio-static/Portfolio7.jsx";
import Portfolio8 from "./portfolios/Portfolio-static/Portfolio8.jsx";
import Portfolio9 from "./portfolios/Portfolio-static/Portfolio9.jsx";
import Portfolio10 from "./portfolios/Portfolio-static/Portfolio10.jsx";
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
// import EditUser from "./auth/EditUser.jsx";
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







              {/* Layout Routes */}
              <Route path="/" element={<Layout />}>
                {/*  category*/}
                <Route path="/developer-category" element={<Developer />}></Route>
                <Route path="/photographer-category" element={<Photographer />}></Route>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="template" element={<TemplatePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/userDetail" element={<UserDetail />}></Route>
                <Route path="/homepage" element={<HomePage />} />

                <Route path="/*" element={<NotFoundPage />}></Route>
              </Route>

              {/* <Route path="template1" element={<Template1 />}></Route> */}
              <Route path="/template1" element={<UserTemplate01 />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>{" "}
              <Route path="/portfolio1" element={<Portfolio1 />}></Route>{" "}
              <Route path="/portfolio2" element={<Portfolio2 />}></Route>{" "}
              <Route path="/portfolio3" element={<Portfolio3 />}></Route>{" "}
              <Route path="/portfolio4" element={<Portfolio4 />}></Route>{" "}
              <Route path="/portfolio5" element={<Portfolio5 />}></Route>
              <Route path="/portfolio6" element={<Portfolio6 />}></Route>
              <Route path="/portfolio7" element={<Portfolio7 />}></Route>
              <Route path="/portfolio8" element={<Portfolio8 />}></Route>
              <Route path="/portfolio9" element={<Portfolio9 />}></Route>{" "}
              <Route path="/portfolio10" element={<Portfolio10 />}></Route>
              <Route path="/getPortfolio4" element={<GetPortfolio4 />}></Route>
              <Route path="/getPortfolio8" element={<GetPortfolio8 />}></Route>
              {/* dashboard  */}
              <Route path="/*" element={<NotFoundPage />}></Route>
              <Route path="/dashboard" element={<Dashboard />}>

                {/* <Route
                  path="/dashboard/portfolio/:id"
                  element={
                    <ProtectedRoute token={token}>
                      <PortfolioPreview />
                    </ProtectedRoute>
                  }
                />      */}
                {/* <Route path="/dashboard/portfolio/1" element={<Portfolio1 />} />
                <Route path="/dashboard/portfolio/2" element={<Portfolio2 />} /> */}
                {/* <Route
                  path="/dashboard/portfolio/:id"
                  element={
                    <ProtectedRoute token={token}>
                      <PortfolioPreview />
                    </ProtectedRoute>
                  }
                /> */}
                <Route
                  path="/dashboard/portfolio/:id"
                  element={
                    <ProtectedRoute token={token}>
                      <PortfolioPreview />
                    </ProtectedRoute>
                  }
                />
                <Route index element={<Navigate to="overview" replace />} />
                <Route path="/dashboard/create-skill" element={<SkillForm />} />
                <Route path="/dashboard/create-job" element={<JobForm />} />
                <Route path="/dashboard/create-education" element={<EducationForm />} />
                <Route path="/dashboard/create-project" element={<ProjectForm />} />
                <Route path="/dashboard/create-social-account" element={<SocialAccountForm />} />

                <Route path="/dashboard/skill/:id" element={<EditSkill />} />
                <Route path="/dashboard/education/:id" element={<EditEducation />} />
                <Route path="/dashboard/project/:id" element={<EditProject />} />
                <Route path="/dashboard/job/:id" element={<EditJob />} />
                <Route
                  path="/dashboard/social/:id"
                  element={<EditSocialAccount />}
                />

                <Route path="/dashboard/edit-skill" element={<EditSkill />}></Route>
                <Route path="/dashboard/edit-job" element={<EditJob />}></Route>
                <Route path="/dashboard/edit-education" element={<EditEducation />}></Route>
                <Route path="/dashboard/edit-socail-account" element={<EditSocialAccount />}></Route>
                <Route path="/dashboard/edit-project" element={<EditProject />}></Route>
                <Route path="/dashboard/edit-contact " element={<EditContact />}></Route>

                <Route path="overview" element={<OverviewPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="template" element={<Template />} />

              </Route>
              <Route path="/portfolio/:id" element={<PortfolioPreview />} />

              <Route path="/edit-template" element={<DashboardComponent />} />
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

export default App;

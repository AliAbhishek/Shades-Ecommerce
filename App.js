import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import LandingPage from "./Pages/LandingPage";
import OtpVarification from "./Pages/OtpVarification";
import PasswordChangeSuccessfully from "./Pages/PasswordChangeSuccessfully";
import CreateProfile from "./Pages/CreateProfile";
import ContactInformation from "./Pages/ContactInformation";
import CreateAccount from "./Pages/CreateAccount";
import VerifyIdentity from "./Pages/VerifyIdentity";
import MembershipPlan from "./Pages/MembershipPlan";
import SearchResult from "./Pages/SearchResult";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SocialLoginAgeVerification from "./Pages/SocialLoginAgeVerification";
import Orders from "./Pages/Orders";
import Community from "./Pages/Community";
import EventView from "./Pages/EventView";
import CreatPost from "./Pages/CreatPost";
import CreatEvent from "./Pages/CreatEvent";
import CreatCourse from "./Pages/CreatCourse";
import Profile from "./Pages/profile";
import ContributorPoint from "./Pages/ContributorPoint";
import BadgesEarned from "./Pages/BadgesEarned";
import Message from "./Pages/Message";
import CreateGroup from "./Pages/CreateGroup";
import Settings from "./Pages/Settings";
import TermsService from "./Pages/TermsService";
import Transactions from "./Pages/Transactions";
import Support from "./Pages/Support";
import WineEducation from "./Pages/WineEducation";
import ReferFriend from "./Pages/ReferFriend";
import HistoryOfWine from "./Pages/HistoryOfWine";
import SavedPost from "./Pages/SavedPost";
import Subscription from "./Pages/Subscription";
import Results from "./Pages/Results";
import CourseOverview from "./Pages/CourseOverview";
import Quiz from "./Pages/Quiz";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ConfirmPayment from "./Pages/ConfirmPayment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Create-account" element={<CreateAccount />}></Route>
          <Route path="/otp-verification" element={<OtpVarification />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route
            path="/password-change-successfully"
            element={<PasswordChangeSuccessfully />}
          ></Route>

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/social-login-age-verification"
              element={<SocialLoginAgeVerification />}
            ></Route>

            <Route path="/create-profile" element={<CreateProfile />}></Route>
            <Route
              path="/contact-information"
              element={<ContactInformation />}
            ></Route>

            <Route path="/verify-identity" element={<VerifyIdentity />}></Route>
            <Route path="/membership-plan" element={<MembershipPlan />}></Route>
            <Route path="/search-result" element={<SearchResult />}></Route>
            <Route path="/product-details/:id" element={<ProductDetails />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/community" element={<Community />}></Route>
            <Route path="/event-view" element={<EventView />}></Route>
            <Route path="/create-post" element={<CreatPost />}></Route>
            <Route path="/create-event" element={<CreatEvent />}></Route>
            <Route path="/create-course" element={<CreatCourse />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route
              path="/contributor-point"
              element={<ContributorPoint />}
            ></Route>
            <Route path="/badges-earned" element={<BadgesEarned />}></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/create-group" element={<CreateGroup />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/terms-service" element={<TermsService />}></Route>
            <Route path="/transactions" element={<Transactions />}></Route>
            <Route path="/support" element={<Support />}></Route>
            <Route path="/wine-education" element={<WineEducation />}></Route>
            <Route path="/refer-friend" element={<ReferFriend />}></Route>
            <Route path="/history-wine" element={<HistoryOfWine />}></Route>
            <Route path="/saved-post" element={<SavedPost />}></Route>
            <Route path="/subscription" element={<Subscription />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/course-overview" element={<CourseOverview />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/confirm-payment/:id" element={<ConfirmPayment />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

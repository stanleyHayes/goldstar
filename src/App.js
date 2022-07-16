import './App.css';
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice";
import {ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import {THEMES} from "./utils/themes";
import HomePage from "./pages/home/home-page";
import SafetyAndSecurityPage from "./pages/safety-and-security/safety-and-security-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import FreightPage from "./pages/freight/freight-page";
import ContactPage from "./pages/contact/contact-page";
import NotFoundPage from "./pages/404/not-found-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import LoginPage from "./pages/authentication/login-page";
import RegisterPage from "./pages/authentication/register-page";
import VerifyLoginOtpPage from "./pages/authentication/verify-login-otp-page";
import VerificationAcknowledgmentPage from "./pages/authentication/verification-acknowledgment-page";
import InsurancePage from "./pages/insurance/insurance-page";
import MineralStoragePage from "./pages/mineral-storage/mineral-storage";
import TrackingPage from "./pages/tracking/tracking-page";

function App() {
    const {themeVariant} = useSelector(selectUI);
    const theme = themeVariant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route element={<HomePage/>} exact={true} path="/"/>
                <Route element={<ContactPage/>} exact={true} path="/contact"/>
                <Route element={<TrackingPage/>} exact={true} path="/tracking"/>
                <Route element={<SafetyAndSecurityPage/>} exact={true} path="/safety-and-security"/>
                <Route element={<MineralStoragePage/>} exact={true} path="/mineral-storage"/>
                <Route element={<InsurancePage/>} exact={true} path="/insurance"/>
                <Route element={<FreightPage/>} exact={true} path="/freight"/>
                <Route element={<VerifyAccountPage/>} exact={true} path="/auth/verify/:token"/>
                <Route element={<VerificationAcknowledgmentPage/>} exact={true} path="/account/verify/success"/>
                <Route element={<RegisterPage/>} exact={true} path="/auth/register"/>
                <Route element={<VerifyLoginOtpPage/>} exact={true} path="/auth/otp/:token/verify"/>
                <Route element={<LoginPage/>} exact={true} path="/auth/login"/>
                <Route element={<ResetPasswordPage/>} exact={true} path="/auth/reset-password"/>
                <Route element={<ForgotPasswordPage/>} exact={true} path="/auth/forgot-password"/>
                <Route element={<NotFoundPage/>} exact={true} path="*"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;

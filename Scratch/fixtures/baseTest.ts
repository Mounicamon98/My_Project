import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { Dashboard } from "../pages/Dashboard"
type Fixtures={
    loginPage: LoginPage;
    dashboard: Dashboard;
};

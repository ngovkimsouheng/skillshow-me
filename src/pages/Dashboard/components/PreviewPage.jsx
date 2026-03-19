// src/pages/PreviewPage.jsx
import { useParams } from "react-router";
import UserPortfolio from "../user-portfolio/UserPortfolio";
import GetPortfolio5 from "../../../portfolios/Portfolio/GetPortfolio5";
import GetPortfolio8 from "../../../portfolios/Portfolio/GetPortfolio8";
import GetPortfolio10 from "../../../portfolios/Portfolio/GetPortfolio10";
import UserPortfolio1 from "../user-portfolio/UserPortfolio1";


const templates = {
    template1: <UserPortfolio />,
    template2: <UserPortfolio1/>,
    template3: <GetPortfolio8 />,
    template4: <GetPortfolio10 />,
};

export default function PreviewPage() {
    const { templateId } = useParams();
    return templates[templateId] || templates.template1;
}
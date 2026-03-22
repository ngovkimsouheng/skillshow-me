// PublicPortfolio.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import UserPortfolio from "../Dashboard/user-portfolio/UserPortfolio"; // your component
import NotFoundPage from "../NotFound/NotFoundPage";
export default function PublicPortfolio() {
    const { username } = useParams();
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
console.log(username)
    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`https://skillshow-api.srengchipor.dev/portfolios/${username}`);
                if (!res.data || !res.data.data) {
                    setError("Portfolio not found or private");
                } else {
                    setPortfolio(res.data.data);
                }
            } catch (err) {
                console.error(err);
                setError("Failed to fetch portfolio");
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, [username]);

    if (loading) return <p className="p-6 text-center">Loading portfolio...</p>;
    // if (error) return <NotFoundPage />;

    // Pass portfolio data as props
    return <UserPortfolio portfolio={portfolio} isPublic={true} />;
}

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import UserPortfolio from "../Dashboard/user-portfolio/UserPortfolio"; // your component
// import NotFoundPage from "../NotFound/NotFoundPage";

// export default function PublicPortfolio() {
//     const { username } = useParams();
//     const [portfolio, setPortfolio] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const controller = new AbortController();

//         const fetchPortfolio = async () => {
//             try {
//                 setLoading(true);

//                 const res = await axios.get(
//                     `https://skillshow-api.srengchipor.dev/portfolios/${username}`,
//                     { signal: controller.signal }
//                 );

//                 // Check if portfolio exists and is public
//                 if (!res.data?.data || !res.data.data.is_public) {
//                     setError("Portfolio not found or private");
//                 } else {
//                     setPortfolio(res.data.data);
//                 }
//             } catch (err) {
//                 if (err.name !== "CanceledError") {
//                     setError("Failed to fetch portfolio");
//                     console.error(err);
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPortfolio();
//         return () => controller.abort();
//     }, [username]);

//     if (loading) return <p className="p-6 text-center">Loading portfolio...</p>;
//     if (error) return <NotFoundPage />;

//     return <UserPortfolio portfolio={portfolio} isPublic={true} />;
// }
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import NotFoundPage from "../NotFound/NotFoundPage";

// import Portfolio1 from "../Dashboard/user-portfolio/UserPortfolio";
// import Portfolio2 from "../Dashboard/user-portfolio/UserPortfolio1";
// import Portfolio3 from "../Dashboard/user-portfolio/UserPortfolio";

// const portfolioMap = {
//     portfolio1: Portfolio1,
//     portfolio2: Portfolio2,
//     portfolio3: Portfolio3,
// };

// export default function PublicPortfolio() {
//     const { username } = useParams();
//     const [portfolio, setPortfolio] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const fetchPortfolio = async () => {
//             try {
//                 setLoading(true);
//                 const res = await axios.get(
//                     `https://skillshow-api.srengchipor.dev/portfolios/${username}`
//                 );

//                 if (!res.data || !res.data.data) {
//                     setError("Portfolio not found or private");
//                 } else {
//                     setPortfolio(res.data.data);
//                 }
//             } catch (err) {
//                 console.error(err);
//                 setError("Failed to fetch portfolio");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPortfolio();
//     }, [username]);

//     if (loading) return <p className="p-6 text-center">Loading portfolio...</p>;
//     if (error) return <NotFoundPage />;

//     const SelectedPortfolio = portfolioMap[portfolio.template];

//     if (!SelectedPortfolio) return <NotFoundPage />;

//     return <SelectedPortfolio portfolio={portfolio} isPublic={true} />;
// }

// PublicPortfolio.jsx
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import UserPortfolio from "../Dashboard/user-portfolio/UserPortfolio"; // your component

// export default function PublicPortfolio() {
//     const { username } = useParams();
//     const [portfolio, setPortfolio] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const fetchPortfolio = async () => {
//             try {
//                 setLoading(true);
//                 const res = await axios.get(`https://skillshow-api.srengchipor.dev/portfolios/${username}`);
//                 if (!res.data || !res.data.data) {
//                     setError("Portfolio not found or private");
//                 } else {
//                     setPortfolio(res.data.data);
//                 }
//             } catch (err) {
//                 console.error(err);
//                 setError("Failed to fetch portfolio");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPortfolio();
//     }, [username]);

//     if (loading) return <p className="p-6 text-center">Loading portfolio...</p>;
//     if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

//     // Pass portfolio data as props
//     return <UserPortfolio portfolio={portfolio} isPublic={true} />;
// }
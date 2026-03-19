// PublicPortfolio.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import UserPortfolio from "../Dashboard/user-portfolio/UserPortfolio"; // your component

export default function PublicPortfolio() {
    const { username } = useParams();
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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
    if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

    // Pass portfolio data as props
    return <UserPortfolio portfolio={portfolio} isPublic={true} />;
}
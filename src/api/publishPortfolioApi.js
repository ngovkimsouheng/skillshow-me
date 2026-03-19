// src/api/publishPortfolioApi.js
export const publishPortfolio = async (token, username) => {
  try {
    const res = await fetch(
      "https://skillshow-api.srengchipor.dev/portfolios/me",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_public: true }),
      },
    );

    if (!res.ok) {
      throw new Error(
        `Failed to publish portfolio: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to publish portfolio");
    }

    const publicUrl = `http://localhost:5173/${username}`;

    return { success: true, publicUrl };
  } catch (err) {
    console.error("publishPortfolioApi error:", err);
    throw err;
  }
};

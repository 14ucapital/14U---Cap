import fs from "fs";
import path from "path";
import { getDb, hasFirebaseAdminConfig } from "@/lib/firebaseAdmin";

export async function getPortfolioData() {
  try {
    if (!hasFirebaseAdminConfig()) {
      const dataFilePath = path.join(process.cwd(), "src", "data", "portfolio.json");
      const fileContents = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(fileContents);
    }

    const db = getDb();
    const snapshot = await db.collection("portfolio").get();
    return snapshot.docs.map((doc) => {
      const { password, passwordHash, ...safeData } = doc.data();
      return { id: doc.id, ...safeData };
    });
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return [];
  }
}

export async function getTeamData() {
  try {
    if (!hasFirebaseAdminConfig()) {
      const teamFilePath = path.join(process.cwd(), "src", "data", "team.json");
      if (!fs.existsSync(teamFilePath)) return [];
      const fileContents = fs.readFileSync(teamFilePath, "utf8");
      return JSON.parse(fileContents);
    }

    const db = getDb();
    const snapshot = await db.collection("team").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
}

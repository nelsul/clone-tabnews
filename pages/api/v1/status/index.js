import database from "../../../../infra/database.js";

async function status(request, response) {
  const dbStatus = await database.query("SELECT 8 + 8 AS sum");
  response.status(200).json({
    status: "Working fine!",
    dbStatus: dbStatus.rows[0],
  });
}

export default status;

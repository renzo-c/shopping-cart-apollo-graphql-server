export const testConnection = async (dbInstance: any) => {
  try {
    await dbInstance.authenticate();
    console.log("🖥️ Database connection established !!!.");
  } catch (error) {
    console.error("🐛 Unable to connect to the database:", error);
  }
};

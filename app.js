import express from "express";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

export default app;
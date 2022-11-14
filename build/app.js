"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./models/index");
const morgan_1 = __importDefault(require("morgan"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const householdRoutes_1 = __importDefault(require("./routes/householdRoutes"));
const rewardRoutes_1 = __importDefault(require("./routes/rewardRoutes"));
const discussionRoutes_1 = __importDefault(require("./routes/discussionRoutes"));
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const { Sequelize } = require("sequelize");
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
app.use((0, morgan_1.default)("dev"));
console.log(process.env);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/tasks", taskRoutes_1.default);
app.use("/users", userRoutes_1.default);
app.use("/household", householdRoutes_1.default);
app.use("/rewards", rewardRoutes_1.default);
app.use("/discussion", discussionRoutes_1.default);
app.use((req, res, next) => {
    res.status(404).end();
});
index_1.db.sync({ alter: true }).then(() => {
    console.log("connected to database");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT);

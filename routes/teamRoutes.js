import express from "express";
import { getAllTeams, createTeam, getTeam, userTeam } from "../controllers/teamController.js";

const teamRouter = express.Router();

teamRouter.route('/')
    .get(getAllTeams)
    .post(createTeam);

teamRouter.route('/team/:id')
    .get(getTeam);


teamRouter.route('/your-team')
    .post(userTeam)

export default teamRouter;

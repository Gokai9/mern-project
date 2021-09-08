import express from "express";
import { getPosts, createPost } from "../controller/RouteFunc.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", createPost);

export default router;

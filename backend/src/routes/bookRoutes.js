import express from "express";
import { addBook, addReview, getBooks } from "../controllers/bookController.js";  

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.post("/:id/review", addReview);

export default router;

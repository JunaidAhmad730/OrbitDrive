import multer from "multer";
import path from "path";
import { randomUUID } from "crypto";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/");
  },

  filename: (_req, file, cb) => {
    const extension = path.extname(file.originalname);

    cb(null, `${randomUUID()}${extension}`);
  },
});

export const upload = multer({
  storage,
});

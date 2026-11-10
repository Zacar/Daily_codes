import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, "../data/users.json");

export const readUsers = () => {
  const fileContent = fs.readFileSync(DB_PATH, "utf-8").trim();

  if (!fileContent) {
    return [];
  }

  return JSON.parse(fileContent);
};

export function writeUsers(users) {
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
}

export function findByEmail(email){
    return readUsers().find((u)=> u.email ===email) || null;
}


export function findById(id){
    return readUsers().find((u)=> u.id ===id) || null;
}
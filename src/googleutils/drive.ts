import { drive } from "@googleapis/drive";
import auth from "./auth";

const myDrive = drive({ version: "v2", auth: auth });

export const listFiles = async () => {
  const files = await myDrive.files.list()

  return files.data;
}

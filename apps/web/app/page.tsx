import styles from "./page.module.css";
import { prisma } from "db/client";

export default async function Home() {
  const data = await prisma.user.findMany();
  return <div className={styles.page}>{JSON.stringify(data)}</div>;
}

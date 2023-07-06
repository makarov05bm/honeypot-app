import styles from './page.module.css'

async function sendGuestData() {
  const res = await fetch("/api")

  if (!res.ok) {
    throw new Error('Failed to send user data')
  }

  return res.json()
}

export default async function Home() {
  await sendGuestData()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        🚧 Site is currently under maintenance 🚧
        </p>
      </div>

      <footer className={styles.footer}>
        Made by ykb_x7 &nbsp;⚔️&nbsp; on the Algerian lands
      </footer>
    </main>
  )
}

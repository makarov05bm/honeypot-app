'use client'

import styles from './page.module.css'

export const revalidate = 0

async function sendGuestData() {
  const resIp = await fetch('https://api.myip.com')
  const dataIp = await resIp.json()
  const ip = dataIp.ip

  const res = await fetch(`http://localhost:3000/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ip
    })
  })

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

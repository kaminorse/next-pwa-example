import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CommonLayout from '@/layouts/CommonLayout'
import PwaInstallButton from '@/components/PwaInstallButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CommonLayout title="test">
        <h1>
          {"Next.jsとPWAのサンプルサイト"}
        </h1>
        <section>
          <div>
            {"インストール可能な場合、下にボタンが表示されます。"}
          </div>
          <div style={{
            margin: "16px auto"
          }}>
            <PwaInstallButton />
          </div>
          <div>
            <small>
              {"※iOS および iPadOS の Chrome と Edge は PWA のインストールをサポートしていないため表示されない"}
            </small>
          </div>
        </section>
      </CommonLayout>
    </>
  )
}

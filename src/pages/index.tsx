import CommonLayout from '@/layouts/CommonLayout'
import PwaInstallButton from '@/components/PwaInstallButton'

export default function Home() {
  return (
    <>
      <CommonLayout title="test">
        <h1>
          {"Next.jsとPWAのサンプルサイト"}
        </h1>
        <section>
          <h2>
            {"インストールボタン"}
          </h2>
          <div style={{
            margin: "16px auto"
          }}>
            <PwaInstallButton />
          </div>
          <div>
            <small>
              {"※インストール可能な場合、上にボタンが表示されます。"}
            </small>
          </div>
          <div>
            <small>
              {"※iOS および iPadOS の Chrome と Edge は PWA のインストールをサポートしていないため表示されない"}
            </small>
          </div>
        </section>
        <section>
          <h2>
            {"PWA判定"}
          </h2>
          {
            typeof window !== "undefined" && window.matchMedia('(display-mode: standalone)').matches ? (
              <div style={{color: "green"}}>
                {"現在、スタンドアローン(PWA)モード"}
              </div>
            ) : (
              <div style={{color: "orange"}}>
                {"現在、スタンドアローン（PWA）以外のモード"}
              </div>
            )
          }
          <div>
            {"※PWAで動いてる場合、スタンドアローンモードで表示される設定にしている"}
          </div>
        </section>
      </CommonLayout>
    </>
  )
}

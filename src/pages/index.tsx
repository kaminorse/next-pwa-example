import CommonLayout from "@/layouts/CommonLayout";
import PwaInstallButton from "@/components/PwaInstallButton";
import reactNativeUtility from "@/utilities/reactNativeUtility";
import powerWebAppUtility from "@/utilities/powerWebAppUtility";
import NotificationPermissionButton from "@/components/NotificationPermissionButton";
import { Button } from "@mui/material";
import TestMessagePayload from "@/models/ReactNativeActionPayload/TestMessagePayload";
import ReactNativeActionType from "@/constants/ReactNativeActionType";

export default function Index() {
  return (
    <>
      <CommonLayout title="test">
        <h1>{"Next.jsとPWAのサンプルサイト"}</h1>
        <section>
          <h2>{"インストールボタン"}</h2>
          <div
            style={{
              margin: "16px auto",
            }}
          >
            <PwaInstallButton />
          </div>
          <div>
            <small>
              {"※インストール可能な場合、上にボタンが表示されます。"}
            </small>
          </div>
          <div>
            <small>
              {
                "※iOS および iPadOS の Chrome と Edge は PWA のインストールをサポートしていないため表示されない"
              }
            </small>
          </div>
        </section>
        <section>
          <h2>{"PWA判定"}</h2>
          {powerWebAppUtility.isDisplayModeStandalone() ? (
            <div style={{ color: "green" }}>
              {"現在、スタンドアローン(PWA)モード"}
            </div>
          ) : (
            <div style={{ color: "orange" }}>
              {"現在、スタンドアローン（PWA）以外のモード"}
            </div>
          )}
          <div>
            {
              "※PWAで動いてる場合、スタンドアローンモードで表示される設定にしている"
            }
          </div>
        </section>
        <section>
          <h2>{"React Native WebView判定"}</h2>
          {reactNativeUtility.isReactNative() ? (
            <div style={{ color: "green" }}>
              {"現在、React Native WebViewモード"}
            </div>
          ) : (
            <div style={{ color: "orange" }}>{"現在、通常のWebモード"}</div>
          )}
        </section>
        <section>
          <h2>{"通知の承認"}</h2>
          <div
            style={{
              margin: "16px auto",
            }}
          >
            <NotificationPermissionButton />
          </div>
        </section>
        <section>
          <h2>{"React Native メッセージ送信"}</h2>
          {reactNativeUtility.isReactNative() ? (
            <div>
              <Button
                variant="contained"
                color="info"
                onClick={() => {
                  reactNativeUtility.postAction<TestMessagePayload>({
                    type: ReactNativeActionType.TEST_MESSAGE,
                    payload: {
                      message: `今の時間は「${Date.now().toString()}」です。`,
                    },
                  });
                }}
              >
                {"メッセージ送信"}
              </Button>
            </div>
          ) : (
            <div style={{ color: "orange" }}>
              {"React Nativeでないため無効です"}
            </div>
          )}
        </section>
      </CommonLayout>
    </>
  );
}

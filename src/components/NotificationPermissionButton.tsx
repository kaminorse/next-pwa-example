import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function NotificationPermissionButton(): JSX.Element {
  const [permission, setPermission] = useState<NotificationPermission>("default");

  useEffect(() => {
    if (typeof Notification !== "undefined") {
      const currentPermission = Notification.permission;
      setPermission(currentPermission);
      if (currentPermission === "granted") {
        const notify = () => {
          const notification = new Notification("next-pwa-exampleの通知テスト", {
            body: "10秒に一回通知してます。拒否するまで止まりません。",
          });
        };
        setTimeout(notify, 10000);
      }
    }
  }, []);



  return (
    <>
      {permission === "granted" ? (
        <span style={{ color: "green" }}>{"承認済み"}</span>
      ) : (
        <span>
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              Notification.requestPermission().then((value) => {
                if (value === "granted") {
                  setPermission(value);
                }
              });
            }}
          >
            {"通知の承認"}
          </Button>
        </span>
      )}
    </>
  );
}

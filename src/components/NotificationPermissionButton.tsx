import { Button } from "@mui/material";

export default function NotificationPermissionButton() {
  const permission = Notification.permission;
  return (
    <>
      {permission === "granted" ? (
        <></>
      ) : (
        <Button
          onClick={() => {
            Notification.requestPermission()
              .then(value => {
                if (value === "granted") {
                  console.log("通承認")
                }
              })
          }}
        ></Button>
      )}
    </>
  );
}

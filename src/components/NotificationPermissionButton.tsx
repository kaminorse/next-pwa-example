import { Button } from "@mui/material";

export default function NotificationPermissionButton() {
  if (typeof Notification === "undefined") {
    return <></>;
  }
  const permission = Notification.permission;
  return (
    <>
      {permission === "granted" ? (
        <div style={{ color: "green" }}>{"承認済み"}</div>
      ) : (
        <Button
          variant="contained"
          color="info"
          onClick={() => {
            Notification.requestPermission().then((value) => {
              if (value === "granted") {
                console.log("承認");
              }
            });
          }}
        >
          {"通知の承認"}
        </Button>
      )}
    </>
  );
}

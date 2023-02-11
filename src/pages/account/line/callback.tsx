import CommonLayout from "@/layouts/CommonLayout";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import queryString from "query-string";

export default function AccountLineCallbackPage(): JSX.Element {
  const parsed = typeof location !== "undefined" ? queryString.parse(location.search) : { code: "", state: "" };
  return (
    <CommonLayout title="LINEログイン完了">
      <Container>
        <h1>{"LINEログイン完了"}</h1>
        <Grid container>
          <Grid item xs={3}>
            {"code"}
          </Grid>
          <Grid item xs={9}>
            {parsed && parsed.code ? parsed.code : ""}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            {"state"}
          </Grid>
          <Grid item xs={9}>
            {parsed && parsed.state ? parsed.state : ""}
          </Grid>
        </Grid>
      </Container>
    </CommonLayout>
  );
}

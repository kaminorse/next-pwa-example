import LineLoginButton from "@/components/LineLoginButton";
import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";

export default function AccountSignUpPage() {
  return (
    <CommonLayout title="サインアップ">
      <Container>
        <h1>
          {"サインアップ"}
        </h1>
        <LineLoginButton />
      </Container>
    </CommonLayout>
  );
}

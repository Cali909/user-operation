import Login from "@/components/auth/Login";
import CBox from "@/components/generic/CBox";

export default function Home() {
  return (
    <CBox col jc ac sx={{ height: "500px" }}>
      <Login />
    </CBox>
  );
}

import CBox from "@/components/generic/CBox";
import CContainer from "@/components/generic/CContainer";
import UserForm from "@/components/users/UserForm";
import GetUserById from "@/lib/GetUserById";
import { UserDataType } from "@/types/auth/Login";

const UserPage = async ({ params }: { params: { userID: string } }) => {
  const data: UserDataType = await GetUserById(params.userID);

  return (
    <CContainer>
      <CBox col siPadding NoXPadding>
        <UserForm data={data} />
      </CBox>
    </CContainer>
  );
};

export default UserPage;

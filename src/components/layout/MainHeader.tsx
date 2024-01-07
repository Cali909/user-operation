import { Box, Typography } from "@mui/material";
import CBox from "../generic/CBox";
import CContainer from "../generic/CContainer";
import CButton from "../generic/CButton";
import Link from "next/link";

let data = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Users",
    url: "/users",
  },
];

const MainHeader = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <CContainer>
        <CBox siPadding jsb ac>
          <Link href="https://alireza.tech" className="link" target="_blank">
            <Typography variant="h4" sx={{ color: "white" }}>
              Alireza Garshasbi
            </Typography>
          </Link>
          <CBox ac customGap={5} sx={{ color: "white" }}>
            {data.map((item, i) => (
              <Typography key={i} variant="body1">
                <Link href={item.url} className="link">
                  {item.title}
                </Link>
              </Typography>
            ))}
          </CBox>
        </CBox>
      </CContainer>
    </Box>
  );
};

export default MainHeader;

import { CBreadCrumbsType } from "@/types/generic/CBreadCrumbsType";
import { Typography } from "@mui/material";
import Link from "next/link";
import CBox from "./CBox";
import CIcon from "./CIcon";

type props = {
  data: CBreadCrumbsType[];
};

export default function DBreadCrumbs({ data }: props) {
  return (
    <CBox ac sx={{ overflowX: "auto", flexWrap: "nowrap" }}>
      {data.slice(0, -1).map((item, i) => (
        <CBox mediumGap ac key={i}>
          <Link href={item.url} className="link">
            <Typography
              sx={{
                typography: { xs: "small-50", sm: "body-50" },
                color: "primary.dark300",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {item.title}
            </Typography>
          </Link>
          {i !== data.length - 1 && (
            <CIcon
              customSize={10}
              src="/icons/chevron_right.svg"
              alt="chevron right icon"
            />
          )}
        </CBox>
      ))}
      <Typography
        sx={{
          typography: { xs: "small-50", sm: "body-50" },
          color: "primary.dark300",
        }}
      >
        {data[data.length - 1].title}
      </Typography>
    </CBox>
  );
}

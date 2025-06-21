import { Pagination, PaginationItem } from "@mui/material";

type Props = {
  count?: number;
  variant?: string | any;
  shape?: string | any;
  size?: string | number | any;
  maxRendercount?: number | any;
  onChange?: any;
};

interface CustomPagination {
  onChange?: (value: string) => void;
}

function CustomPagination({
  count,
  variant,
  shape,
  size,
  maxRendercount,
  onChange,
}: Props) {
  const renderCount =
    maxRendercount == 1
      ? maxRendercount
      : maxRendercount == 2
      ? maxRendercount + 1
      : 3;


  return (
    <>
      <Pagination
        count={count}
        variant={variant}
        shape={shape}
        size={size}
        className="home_pagination "
        renderItem={(item: any) => {
          if (item.page > renderCount && item.type === "page") {
            return <></>;
          }
          if (item.type === "start-ellipsis" || item.type === "end-ellipsis") {
            return null;
          }

          return <PaginationItem {...item} />;
        }}
        onChange={(event: any, value: any) => onChange(value)}
      />
    </>
  );
}

export default CustomPagination;

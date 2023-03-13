import { Box } from "@mui/material";
import { FC } from "react";
import LogLine, { Log } from "./LogLine";

export interface ListProps {
  logs: Log[];
}

const List: FC<ListProps> = ({ logs }) => {
  return (
    <Box sx={{ height: "500px", width: "500px", overflowY: "auto" }}>
      {logs.map((l, i) => (
        <LogLine log={l} />
      ))}
    </Box>
  );
};

export default List;

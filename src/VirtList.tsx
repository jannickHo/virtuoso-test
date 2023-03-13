import { Box } from "@mui/material";
import { FC } from "react";
import { Virtuoso } from "react-virtuoso";
import LogLine, { Log } from "./LogLine";

export interface VirtListProps {
  logs: Log[];
}

const VirtList: FC<VirtListProps> = ({ logs }) => {
  const itemContent = (index: number, log: Log) => <LogLine log={log} />;
  return (
    <Box sx={{ height: "500px", width: "500px" }}>
      <Virtuoso
        followOutput
        style={{ height: "100%" }}
        data={logs}
        itemContent={itemContent}
      />
    </Box>
  );
};

export default VirtList;

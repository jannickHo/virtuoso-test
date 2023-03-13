import {
  AddCircleOutlineOutlined,
  AdjustOutlined,
  CircleOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { Box, Collapse, Divider, IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { FC } from "react";

export interface Log {
  code: string;
  path: string;
  message: string;
}

export interface LogLineProps {
  log: Log;
}

const LogLine: FC<LogLineProps> = ({ log }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const renderIcon = () => {
    if (log.code === "changed")
      return (
        <AdjustOutlined
          sx={{
            color: "#c69026",
            fontSize: "16px",
          }}
        />
      );
    if (log.code === "removed")
      return (
        <CircleOutlined
          sx={{
            color: "red",
            fontSize: "16px",
          }}
        />
      );
    if (log.code === "created")
      return (
        <AddCircleOutlineOutlined
          sx={{
            fontSize: "16px",
            color: "#57ab5a",
          }}
        />
      );

    return (
      <CircleOutlined
        sx={{
          fontSize: "16px",
        }}
      />
    );
  };

  return (
    <Box>
      <Paper sx={{ paddingTop: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            padding: 1,
            backgroundColor: "#D3D9DE",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {renderIcon()}
          </div>
          <div>{`'${log.path}'`}</div>

          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            {log.code !== "ok" && log.message && (
              <IconButton onClick={() => setExpanded(!expanded)}>
                {expanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            )}
          </div>
        </Box>

        <Divider />
        <Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box
              sx={{
                padding: 1,
                paddingLeft: 2,
              }}
            >
              <div>{log.message}</div>
            </Box>
          </Collapse>
        </Box>
      </Paper>
    </Box>
  );
};

export default React.memo(LogLine);

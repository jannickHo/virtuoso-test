import { Box, Button } from "@mui/material";
import { Virtuoso } from "react-virtuoso";
import LogLine, { Log } from "./LogLine";
import { faker } from "@faker-js/faker";
import { useEffect, useMemo, useState } from "react";
import List from "./List";
import VirtList from "./VirtList";

function generateLogs(amount: number): Log[] {
  const newData: Log[] = [];

  for (let i = 0; i < amount; i++) {
    newData.push({
      path: faker.system.filePath(),
      code: "changed",
      message: faker.lorem.text(),
    });
  }

  return newData;
}

export default function App() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setLogs(generateLogs(500));
  }, []);

  return (
    <>
      <Box>
        <Button onClick={() => setShow(!show)}>show</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,

          padding: 1,
          backgroundColor: "#f2f2f2",
          fontFamily: "Monaco, monospace",
          fontSize: "14px",
          lineHeight: 1.5,
          borderRadius: "5px",
          color: "#333",
        }}
      >
        {show && (
          <>
            {/*  <List logs={logs} /> */}
            <VirtList logs={logs} />
          </>
        )}
      </Box>
    </>
  );
}

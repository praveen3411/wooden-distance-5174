import { Alert, AlertIcon, Box } from "@chakra-ui/react";

export default function Alerts() {
  return (
    <Box>
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    </Box>
  );
}

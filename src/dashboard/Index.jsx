import React, { useEffect, useState } from "react";
import { Container, Text, VStack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";

const Index = () => {
  const [status, setStatus] = useState("idle");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await axios.get("/status");
      setStatus(response.data.status);
    };

    const fetchHistory = async () => {
      const response = await axios.get("/history");
      setHistory(response.data);
    };

    fetchStatus();
    fetchHistory();

    const interval = setInterval(() => {
      fetchStatus();
      fetchHistory();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Service Status: {status}</Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Start Time</Th>
              <Th>End Time</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {history.map((entry, index) => (
              <Tr key={index}>
                <Td>{new Date(entry.startTime).toLocaleString()}</Td>
                <Td>{new Date(entry.endTime).toLocaleString()}</Td>
                <Td>{entry.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;

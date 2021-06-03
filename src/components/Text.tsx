import { Text } from "@chakra-ui/layout";

interface HeadlingProps {
  children: string;
  mb: string;
}

export default function Headling({children, mb}: HeadlingProps) {
  return (
    <Text as="h1" fontSize="3xl" align="center" fontWeight="bold" mb={mb}>
      {children}
    </Text>
  );
}
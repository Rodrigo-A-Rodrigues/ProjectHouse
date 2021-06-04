import { Text } from "@chakra-ui/layout";

interface HeadlingProps {
  children: string;
  mb: string;
  align: CanvasTextAlign;
}

export default function Headling({children, mb, align}: HeadlingProps) {
  return (
    <Text as="h1" fontSize="3xl" align={align} fontWeight="bold" mb={mb}>
      {children}
    </Text>
  );
}
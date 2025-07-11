import { TextInput, TextInputProps } from "react-native";
import { Box, BoxPros } from "./Box";
import { Icon } from "./Icon";

type SearchInputProps = {} & Pick<TextInputProps, "onChangeText" | "value">;

export function SearchInput({ onChangeText, value }: SearchInputProps) {
  return (
    <Box>
      <TextInput
        onChangeText={onChangeText}
        value={value}
      />
      <Icon
        name="Search-outline"
        color="primary"
        size={24}
      />
    </Box>
  );
}

const boxStyle: BoxPros = {
  flexDirection: "row",
  padding: "s8",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "gray1",
  height: 70,
};

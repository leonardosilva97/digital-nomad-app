import { Text } from "@/src/components/Text";
import { useAppTheme } from "@/src/theme/useAppTheme";
import { CityPreview } from "@/src/types/types";
import { ImageBackground } from "react-native";
import { Box } from "./Box";
import { Icon } from "./Icon";

type CityCardProps = {
  cityPreview: CityPreview;
};

export function CityCard({ cityPreview }: CityCardProps) {
  const { borderRadii, spacing } = useAppTheme();
  return (
    <ImageBackground
      source={cityPreview.coverImage}
      style={{ width: `100%`, height: 280 }}
      imageStyle={{ borderRadius: borderRadii.default }}
    >
      <Box
        position="absolute"
        width={"100%"}
        height={"100%"}
        backgroundColor="midnightBlack"
        opacity={0.25}
      />
      <Box
        flex={1}
        justifyContent="space-between"
        padding="s24"
      >
        <Box alignSelf="flex-end">
          <Icon
            name="Favorite-outline"
            color="text"
            size={24}
          />
        </Box>
        <Box>
          <Text variant="title22">{cityPreview.name}</Text>
          <Text variant="text16">{cityPreview.country}</Text>
        </Box>
      </Box>
    </ImageBackground>
  );
}

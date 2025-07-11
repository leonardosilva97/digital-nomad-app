import { PropsWithChildren } from "react";
import { Box, BoxPros } from "./Box";

export function Screen({children, ...boxProps}: PropsWithChildren & BoxPros) {
  return (
    <Box flex={1} backgroundColor="background" paddingHorizontal="padding" {...boxProps}>
      {children}
    </Box>
  )
}

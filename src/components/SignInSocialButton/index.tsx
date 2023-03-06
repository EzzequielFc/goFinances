import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import { Button, ImagemContainer, Text } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInSocialButton({ svg: Svg, title, ...rest }: Props) {
  return (
    <Button>
      <ImagemContainer>{/* <Svg /> */}</ImagemContainer>

      <Text>{title}</Text>
    </Button>
  );
}

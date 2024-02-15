import { extendTheme } from "@chakra-ui/react";
import { Text } from './components/text';
import { Input } from './components/input';
import { Button } from './components/button';

export const theme = extendTheme({
  components: {
    Text,
    Input,
    Button
  }
})

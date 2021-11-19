import React from 'react'
import { Text, HStack, Switch, useColorMode } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Light</Text>
      <Switch isChecked={colorMode === 'dark' ? true : false} onToggle={toggleColorMode}></Switch>
      <Text>Kira</Text>
    </HStack>
  )
}

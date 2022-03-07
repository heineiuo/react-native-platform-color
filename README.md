# React Native PlatformColor

A `PlatformColor` shim for react-native-web (Did not implement `PlatformColor` yet). 

If Platform.OS is not web, use native `PlatformColor` instead.


```tsx

import { PlatformColor } from 'react-native-platform-color'

// in light mode
const systemBackground = PlatformColor('systemBackground') // `rgba(255,255,255, 1) `

// in dark mode
const systemBackground = PlatformColor('systemBackground') // `rgba(0,0,0, 1) `


```


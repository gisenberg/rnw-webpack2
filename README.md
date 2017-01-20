react-native-web + webpack@2.2.0
====
This repository exists to demonstrate a difference in module resolution behavior between `webpack@1.x.x` and `webpack@2.x.x`. The current guidance from react-native-web] is [this](https://github.com/necolas/react-native-web/blob/master/docs/guides/react-native.md):

> More substantial Web-specific implementation code should be written in files with the extension .web.js, which webpack will automatically resolve.

It looks like this behavior has changed in `webpack@2.x.x`. The intent here is to understand whether or not this is now a documentation bug in `react-native-web` or if this is a regression in `webpack`.

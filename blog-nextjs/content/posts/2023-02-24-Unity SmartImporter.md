---
title: Smart Importer released
date: '2023-02-24'
excerpt: Allows import Unity packages (.unitypackage) to custom folder, ignoring initial assets paths.
---

Allows import Unity packages (.unitypackage) to custom folder, ignoring initial assets paths.

### Install from npm 🤖
* Navigate to the `Packages` directory of your project.
* Adjust the [project manifest file](https://docs.unity3d.com/Manual/upm-manifestPrj.html) `manifest.json` in a text editor and add `com.dreamcode` is part of scopes.

Open `Package Manager` and press `Install` button.

<img src="https://user-images.githubusercontent.com/7010398/221207311-81e95b1e-8ea4-4530-82bd-9409f19b878b.png" width="730">

### Well done 🤝
Now you can import .unitypackage to custom folder.

### Unity Editors Support
`Smart Importer` implemented via C# Reflection  and pass tests on the editor versions

`2020`, `2021`, `2022`

---
title: The secret to publishing UPM package to the Asset Store
date: '2024-03-03'
tags:
  - unity
  - asset store
  - c#
  - dotnet
  - upm
  - package
excerpt: "\U0001F4D8 Unity native solution\r\n\r\nIn 2018, Unity's developers released a centralized repository for iterative updates to their Editor engine and extensions called UPM - Unity Package Manager.\r\n\r\nLater, t..."
---

# 📘 Unity native solution

In 2018, Unity's developers released a centralized repository for iterative updates to their Editor engine and extensions called UPM - Unity Package Manager.

Later, third-party services appeared through which UPM packages were distributed:

<ul>
  <li><a href="https://openupm.com/">OpenUPM</a></li>
  <li><a href="https://www.npmjs.com/">NpmJs</a></li>
  <li><a href="https://verdaccio.org/">Verdaccio</a></li>
</ul>

Separately, [NuGetForUnity](https://github.com/GlitchEnzo/NuGetForUnity) can be highlighted, which runs the NuGet client within the Unity editor.

Despite this, more than 93 thousand assets and extensions have been published on the Asset Store, but it does not officially offer UPM package downloading functionality.

# 🎯 Seeking a solution

[Asset Store Tools](https://assetstore.unity.com/packages/tools/utilities/asset-store-publishing-tools-115) v11.3.1, allows you to download assets from the following sources:

<ul>
  <li>From Assets Folder</li>
  <li>Pre-exported .unitypackage</li>
</ul>

![](../../assets/img/posts/as-upload-type.png)

Looking through the sources of the Asset Store Tools, we see the experimental functionality wrapped in the<br>
 `#if UNITY_ASTOOLS_EXPERIMENTAL` directive:

![](../../assets/img/posts/astools-experimental.png)

The functionality has already been on the Unity side, but it is not available to third-party developers:

![](../../assets/img/posts/astools-ex-code.png)

Meanwhile, Unity Technologies developers load their own assets in the form of UPM packages:

![](../../assets/img/posts/ast-folders.png)

To achieve a similar result, follow these steps:

1. Create a draft package using the [Unity Publisher Portal](https://publisher.unity.com/packages):
![](../../assets/img/posts/pp-draft.png)
![](../../assets/img/posts/asu-draft.png)

2. Add the value `UNITY_ASTOOLS_EXPERIMENTAL` to *Project Settings > Scripting Define Symbols*:
![](../../assets/img/posts/ase-define.png)

3. After compilation is complete, select the option to load the local UPM package and specify the package path:
![](../../assets/img/posts/upm-package-path.png)

4. Click the `Upload` button and 🎉:
![](../../assets/img/posts/smart-importer-astore.png)

# 💻 Conclusion

The type of download using UPM packages is suitable for assets or tools that have version control and configure dependencies between packages.

This results in a uniform asset structure for the Unity Package Registry and Asset Store.

In future Unity releases, it is likely that an open solution will be published for publishers.

# 🎁 Helpful Links

[Guide](https://youtu.be/-W7BtzhHUpA)

[Smart Importer](https://github.com/dreamcodestudio/com.dreamcode.editor.smart-importer)

[Asset Store Tools](https://github.com/Unity-Technologies/com.unity.asset-store-tools)

[Unity’s Package Manager](https://docs.unity3d.com/Manual/Packages.html)

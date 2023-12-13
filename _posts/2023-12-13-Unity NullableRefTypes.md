---
layout: post
title: Setup Nullable reference type in Unity
tags: [unity, nullable, c#, dotnet, analysis]
---

# 🎯 What is Nullable reference type?

`Nullable reference type` explicitly specifies whether a variable must contain a value or may not.

### Key Features

<ul>
  <li>Design-time analysis</li>
  <li>Explicit API contracts</li>
  <li>Search for potential locations with NullReference</li>
</ul>

# 📑 Software requirements

<ul>
  <li>.NET Standard 2.1+</li>
  <li>Unity 2021+</li>
</ul>

# 📃 How to turn on static analysis

### To analyze the individual assemblies

Create a `csc.rsp` file next to the `asmdef`:

![](../../assets/img/posts/WpzfPNCjxy.png)

Add the `nullable` argument to the contents of `csc.rsp`:

```
-nullable:enable
```

### To analyze individual .cs files

Add the `#nullable` annotation context to the `.cs` content:

```
#nullable enable
```

![](../../assets/img/posts/rider64_U8BVwLGqck.png)

# 💻 Migration Guide

#### What to do with Unity UI bindings and DI Inject attributes?

Explicitly tell the analyzer that you guarantee their assignment and suppress the warnings using the `!` null-forgiving operator.

#### Unity UI example:

```csharp
[SerializeField] private Image _image = null!;
```

#### VContainer DI example:

```csharp
namespace Sandbox.Domain
{
    private MoveController _moveController = null!;

    [Inject]
    public void Init(MoveController moveController)
    {
        _moveController = moveController;
    }
}
```

To exclude a separate part of the code from analysis, you can use the following annotation:

```csharp
#nullable disable

using System;

namespace Sandbox.Server.Responses
{
    [Serializable]
    public class UserResponse
    {
        public int Id;
        public string Name;
    }
}
```

# 🎁 Helpful Links

[Microsoft guide](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references)
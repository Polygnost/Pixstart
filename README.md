# Pixstart!, THE Editor

**Important Subtitle:** _another ONLINE Pixelart editor for a NEW **Generation**, an ONLINE tool **Rev-O-LutION**, probably... except it's meant to be used offline as well. but BEHOLD!, **youths** & Olds alike, MY Creation!_

---
---

**Some Advice**: _If you truly want to create pixelart & were somehow misguided into my little slice of the uncaring cosmos, please leave now and visit [Lospec's Pixel Art Software List](https://lospec.com/pixel-art-software-list)_. Godspeed.

---
---

## TS(tupid);DR:

It's a pixelart editor.

---

## Original TS;DR (got carried away again...):

It's a toy pixelart editor that may grow in features, but probably not as there are many better & more useful pixelart editors out there. I recommend [Graphics Gale](https://graphicsgale.com/us/) &-or [Aseprite](https://www.aseprite.org/) &-or [Krita]() &-or [Gimp]() &-or ~~[MSPaint](https://archive.org/details/MSPaintWinXP)~~ &-or [GrafX2](http://pulkomandy.tk/projects/GrafX2), if you want the [Emacs](https://www.gnu.org/software/emacs/) of pixelart editors. Emacs can be **soooo** good & it only takes a few years and a single surgery to learn. I really do love Emacs, & Vim, actually... but not as gods, as one might suspect, but rather as text editors. That's it really. However, if you find my subtitle as unfunny as I do, please leave. There isn't room here for both of us.

---
---

## Description:

A thing ununique & unspecial. If anything below contradicts this factual statement, it may be wrong.

Pixstart! is the most unique & special browser-persistent on- & offline pixelart editor **ever create**, utilizing a React+Redux+Styled Component frontend & Node+Express+Postgres backend. The backend exists mostly for more permanent & safe-ish-esque file storage system, or because I need a nontrivial & fun project for learning about this Node thing. It (pronoun used as a reference to the word "backend", which happens to be the subject of this sentence) also takes care of User (here as a capitalized abstract object representing an entity who subscribes to—& interacts with—Pixstart!; I am not referring humans,to be Clarify) management.

It is possible I may introduce My own image format or at least a unique filetype specific to storing pixelart assets as multilayered maps, those being Pixstart! (`pxs`) files. If this occurs, it is for fun & I am sorry, to everyone... for everything.

---

## Stretch:

- Pixstart!-specific fileformat for representing art & game assets along with metadata intended for consumption by other tools, maybe
- Ability to save as binary asset, probably meaning it compiles the files into something like a GBA asset binary that can me imported straight into a developer's code, or something similar-like
- Animation tooling of some basic sort
- Scene & map editing
- Possibly some novel, or silly, form of animating sprites within the contest of the game world shown by the map parser
- Tabs?

---

## The Plan

![Adobe Photoshop](https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ipg7kadajtykjfxn_1618219527.jpeg)
> ... source: [~~Adobe~~](https://www.adobe.com) [Pixstart! Headquarters](/pixstart) _(but really it's [Adobe Photoshop](https://www.adobe.com/products/photoshop.html))_

## How are we going to do it?

Probably something like...

```jsx
<Pixstart>
  <MenuBar><MenuStuff></MenuStuff></MenuBar>
  <ContextBar>
    <ContextThing />
    <ContextsThing />
  </ContextBar>
  <ToolBar>
    <Tool />
    <Tool />
    <Tool />
  </ToolBar>
  <Canvas>
    <View />
    <HoverData />
    <RightClickMenuModalThing />
  </Canvas>
  <PaletteColumn>
    <Palette></Palette>
    <ActiveColor></ActiveColor>
    <BufferedColor></BufferedColor>
  </PaletteColumn>
  <Timeline>
    <ActionsDataBar><ActionBtn /><DataBtn /><ActionBtn \></ActionsDataBar>
    <Frames>
      <Frame>
        <FrameImg />
        <HoverData />
      </Frame>
      <Frame>
        <FrameImg />
        <HoverData />
      </Frame>
    </Frames>
    <Keyframes>
      <FrameRuler />
      <KeyLane />
    </Keyframes>
  </Timeline>
  <StatusBar></StatusBar>
</Pixstart>
```

except not. It's a JSX representation of my great vision, both convoluted & misleading. Enjoy. It is for your imagination, a glips of the not-Photoshop viscera of Pixstart!! If you want the code, look at the code! Please. But yeah, this is getting out of hand and probably broken so we will end with this little markdown markup.

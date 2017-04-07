[![GitHub issues](https://img.shields.io/github/issues/bmatto/cellulose.svg)](https://github.com/bmatto/cellulose/issues)
[![CircleCI](https://img.shields.io/circleci/project/github/bmatto/cellulose.svg)]()
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/bmatto/cellulose/master/LICENSE)

# Cellulose

Cellulose is a React layout library based on contextually aware components using flexbox.

[//]: # (`npm i -S cellulose` or `yarn add cellulose`)

## Usage

Cellulose offers a responsive-style grid system

```
const breakPoints = {
  768:  'point768',
  1024: 'point1024'
}

return (
  <Cellulose columns={12} breakPoints={breakPoints}>
    <Cell spanOptions={{ 768: 6, 1024: 8 }}>
      <div>One</div>
    </Cell>
    <Cell spanOptions={{ 768: 6, 1024: 4 }}>
      <div>Two</div>
    </Cell>
  </Cellulose>
)
```

With Cellulose, changing styles responsively based on breakpoints is simple

```
const breakPoints = {
  768:  'point768',
  1024: 'point1024'
}

return (
  <Cellulose columns={12} breakPoints={breakPoints}>
    <Cell
        spanOptions={{
          768: { cols: 6, className: 'tabletCell' },
          1024: { cols: 8, className: 'desktopCell' }
        }}>
      One
    </Cell>
    <Cell spanOptions={{ 768: 6, 1024: 4 }}>
      <div>Two</div>
    </Cell>
  </Cellulose>
)
```

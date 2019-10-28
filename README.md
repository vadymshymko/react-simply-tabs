# react-simply-tabs

[![npm version](https://img.shields.io/npm/v/react-simply-tabs.svg?style=flat)](https://www.npmjs.com/package/react-simply-tabs)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-simply-tabs?label=size)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vadymshymko/react-simply-tabs/blob/master/LICENSE)

Simple and small react.js tabs component 

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Props](#props)
* [Demo](#demo)

## Installation

**npm**

```bash
npm install react-simply-tabs --save
```

**yarn**

```bash
yarn add react-simply-tabs
```

## Usage

#### Basic Example:

```js
import React, { useState } from 'react';
import Tabs from 'react-simply-tabs';

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return(
    <Tabs
      activeTabIndex={activeTabIndex}
      onRequestChange={setActiveTabIndex}
      controls={[
        <button type="button">
          Show 1
        </button>,
        <button type="button">
          Show 2
        </button>,
        <button type="button">
          Show 3
        </button>,
      ]}
    >
      <div>1 tab</div>

      <div>2 tab</div>

      <div>3 tab</div>
    </Tabs>
  );
};
```

## Props

Name | Type | Default Value | Description   
---- | ---- | ------------- | --------------
activeControlProps | object | `{}` | Props (valid DOM props or your custom props) for active control node. Will be merged with default control props
activeTabIndex | number | `0` | Index of visible tab
activeTabProps | object | `{}` | Props (valid DOM props or your custom props) for active tab node. Will be merged with default tab props
children | node | `null` | Tabs nodes
controls | array of nodes | `[]` | Array of controls nodes
controlsWrapperProps | object | `{}` | DOM props for div inside which will be rendered controls
hiddenTabProps | object | `{}` | Props (valid DOM props or your custom props) for hidden (not active) tab node. Will be merged with default tab props
onRequestChange | function | | Function that will be run when the activeTabIndex is requested to be changed (either by clicking on control) (required)
renderOnlyActiveTab | boolean | false | If `true` hidden tabs will not be rendered
tabsWrapperProps | object | {} | DOM props for div inside which will be rendered tabs
wrapperProps | object | {} | DOM props for div inside which will be rendered tabs && controls

## Demo

[![Edit react-simply-tabs](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-simply-tabs-hty96)

## Flexbox a Quick Guide

### Introduction
Flexbox is a CSS layout model that helps arrange items in a container and align them, making it easy to manage space and adapt to different screen sizes. It's great for all kinds of layouts, big or small.

### Basic Flexbox Concepts

#### Container
The Flexbox layout starts with a flex container. All direct children of this container become flex items. You establish a flex container by setting `display: flex;` or `display: inline-flex;` on the parent element.

Here's an example of a basic flex container:

```css
.container {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    max-width: 800px;
    min-height: 400px;
    margin-inline: auto;
    border: 1px solid #000;
}
```

#### Items
Flex items are the children of a flex container and are the building blocks of the flexbox layout. Their behavior and placement inside the container can be individually adjusted using flex properties.

Example of a flex item configuration:

```css
.box {
    height: 100px;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 250px;
}
```

### Key Flexbox Properties

#### 1. `display`
- `flex` or `inline-flex` sets the element as a flex container.

#### 2. `flex-flow`
A shorthand property that combines `flex-direction` and `flex-wrap`.
- `flex-direction` (e.g., `row`, `column`) determines the main axis of the layout.
- `flex-wrap` (e.g., `wrap`, `nowrap`) specifies whether the items should wrap onto multiple lines.

#### 3. `justify-content`
Aligns items along the main axis and distributes extra space. Options include:
- `flex-start`
- `flex-end`
- `center`
- `space-between`
- `space-around`
- `space-evenly`

#### 4. `align-items`
Aligns items along the cross axis. Useful for aligning items in a line when there are items of varying sizes.
- `flex-start`
- `flex-end`
- `center`
- `baseline`
- `stretch`

### 4.1 `align-content`
Using with flex-wrap: wrap and has the same properties.
- `flex-start`
- `flex-end`
- `center`
- `baseline`
- `stretch`

#### 5. `flex`
A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
- `flex-grow` defines the ability of a flex item to grow if necessary.
- `flex-shrink` defines its ability to shrink if necessary.
- `flex-basis` defines the default size of an element before remaining space is distributed.

### Practical Example

In a simple web layout using Flexbox, elements can be arranged responsively with minimal effort. Consider the CSS provided, which demonstrates a practical use of Flexbox for creating a flexible and responsive container layout:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    padding: 20px;
}

.container {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    max-width: 800px;
    min-height: 400px;
    margin-inline: auto;
    border: 1px solid #000;
}

.box {
    height: 100px;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 250px;
}
```

### Conclusion
Flexbox is a powerful tool for designing layouts in CSS, enabling developers to create responsive designs easily. It simplifies alignment, distribution, and spacing of elements within a container, regardless of their size.

### 1. `align-items`
The `align-items` property sets the alignment of items along the cross axis (perpendicular to the main axis). By default, if you don't set this property, it assumes the value `stretch`, which means stretching the items to fill the container along the cross axis. Other values include:
- `flex-start`: aligns items at the start of the cross axis.
- `flex-end`: aligns items at the end of the cross axis.
- `center`: centers items along the cross axis.
- `baseline`: aligns items along the baseline of the text within the items.

### 2. `align-content`
The `align-content` properhty defines te spacing between lines within the container when there is extra space along the cross axis beyond what is needed to fit the items. This property only works when there are multiple lines of items, which can occur if the `flex-wrap` property is used. Possible values:
- `flex-start`: groups all lines at the start of the container.
- `flex-end`: groups all lines at the end of the container.
- `center`: centers the lines within the container.
- `space-between`: distributes lines so that the spacing between them is even.
- `space-around`: distributes space around the lines so that the spacing before the first and after the last line is half the spacing between the lines.
- `stretch`: stretches the lines to fill the container.

### 3. `flex-wrap: wrap`
The `flex-wrap` property controls whether the items can wrap onto the next line within the container. By default, items are laid out in a single line. The value `wrap` allows items to move onto a new line if there is not enough space in the current line. This is particularly useful when item sizes are unknown or dynamic, and you want to ensure adaptive layout behavior without content overflow.

Using `flex-wrap: wrap` together with `align-content` allows for more flexible control over the distribution and alignment of items in multi-line flex containers, enabling complex and adaptive layouts.
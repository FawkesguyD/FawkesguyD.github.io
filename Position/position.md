<!-- TODO: make it better, add more info about position -->
# Position
## Properties

- **Static**: The default position value for all elements. They are already static when you put them on the page.

- **Fixed**: The element is positioned relative to the viewport. It will not move even if the page is scrolled.

- **Sticky**: The element is positioned based on the user's scroll position. It behaves like `relative` until the element reaches a specified threshold, then it becomes `fixed`.

- **Absolute**: The element is positioned relative to its nearest positioned ancestor. If there is no positioned ancestor, it is positioned relative to the initial containing block (usually the viewport).

- **Relative**: The element is positioned relative to its normal position. It can be moved using the `top`, `right`, `bottom`, and `left` properties.

## Something new

- z-index: 0; (0 - minimal) position on the screen. Which element will be in front
- to remove something from the page without deleting it
  ```
  position: absolute;
  lef: -1000000px; # or another random big number with -
  ```
- The *inherit* property in CSS is used to set the value of an element's property to be the same as its parent element.
- **String scroll-behavior: smooth;** adds smooth scrolling to an element or container when using scrolling.
# CSS Flex Properites & Values

## ```flex value```
* The ```flex``` value for ```display``` property on a containing div creates a parent container
```
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;    
    display: flex;
}
```
Applying ```display: flex;``` sets the following default property values:
```
flex-direction: row;
flex-wrap: nowrap;
``` 
## ```flex-inline``` value
* The ```flex-inline``` value does not allow resizing of specified widths
```
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;    
    display: flex-inline;
}
```

## Main & Cross Axes
```flex-direction: row```

```
display: flex;
flex-direction: row;

  ---------main axis-->
  |
  |
  | cross axis
  |
 \|/

```
```flex-direction: row-reverse```
```
display: flex;
flex-direction: row-reverse;

  <--------main axis---
                      |
                      |
           cross axis |
                      |
                     \|/

```

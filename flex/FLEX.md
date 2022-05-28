# CSS Flex Properites & Values

## ```flex``` value
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
Elements are appended into the DOM starting at the main axis and then filling into the cross axis as needed.

```flex-direction: row```

```
display: flex;
flex-direction: row;

  ---------main axis-->
  | 1  2  3  4  5  6 
  | 7  8  9 ...
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
     6  5  4  3  2  1 |
          ... 9  8  7 |
                      |
           cross axis |
                      |
                     \|/

```

```flex-direction: column```

```
display: flex;
flex-direction: column;

  ---------cross axis-->
  | 1  5  9 
  | 2  6  .
  | 3  7  .
  | 4  8  .
 \|/
 main axis
```
```flex-direction: column-reverse```
```
display: flex;
flex-direction: row-reverse;

main axis
 /|\         
  | 4  8  .     
  | 3  7  .      
  | 2  6  .       
  | 1  5  9              
  -------cross axis--->
```
## Align and Justify

```align-items``` aligns elements along the ***cross*** axis
```justify-content``` aligns elements along the ***main*** axis

```
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;    
    flex-direction: row; 
    flex-wrap: wrap;
    align-items: center;  /* centers along the cross axis */
    justify-content: center; /* centers along the main axis */
    height: 800px;
}
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
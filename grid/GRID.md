# CSS Grid Poperties and Values
[MDN]()

**Using Developer Tools is recommeneded for layout.**

## ```grid``` value
* The ```grid``` value for ```display``` property on a containing div creates a parent container.
```
.container {
    background: white;
    padding: 10px;
    border: 5px solid black;    
    display: grid;
}
```
The default behavior of the grid value creates a container containing one column and as many rows as there are direct child elements of that container.

### ```grid-template-columms```
* To add colums, demnsions can be specifed for each coloum to be displayed.

```
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px auto 200px;
}
```

### ```fr``` (fraction)
* The ```fr``` value can be used specify a demension.  

```
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 2fr 200px 1f;
}
```
In the above snippet, there are 4 columns specified.  The first and third columns are 200 pixels wide.  The remaining space is divided between column 2 and 4 based on the fraction specified.   In this case, the second column will be twice a big as the fourth column

### ```grid-template-rows```
* To add rows, demnsions can be specifed for each row to be displayed in the ```grid-template-rows``` property.

```
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 2fr 200px 1f;
    grid-template-rows: 5rem 2.5rem;
}
```

## Child Properties
### ```grid-column-start```
### ```grid-column-end```
Using line numbers from developer tools, specifying ```grid-column-start``` and ```grid-column-end``` properties within a child elemnent allows for spanning muliple columns.
```
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5;
}
```
### The same can be done for rows:
```
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}
```
also can use ```span``` keyword:
```
grid-column-end: span 2;
```

using a value of (-1) for ```end``` property results in an element occupying and entire row or column
```
grid-column-start: 1;
grid-column-end: -1;
```


## Other Parent Properties
```repeat(numberOfColumns,width)```
```
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 5rem 2.5rem;
}
```

```minmax(minHeight,maxHeight)```
```
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 5rem , minmax(10px,100px), auto;
}
```
```grid-row-gap``` / ```grid-column-gap``` / ```grid-gap```
```
.container {
    ...
    ...
    grid-column-gap: 20px;
    grid-row-gap: 10px;
}
```

## Other notes

* elements can be set to overlap eachother by specifying the same starting row or column number for mulitple elements; ```z-index``` can be useful 
* rows/columns can be named 
```
grid-template-rows: [name-1] 5rem [name-2] 2.5rem
```
* shorthand notation:
list starting and ending columns/rows in one line
```
.el3 {
    grid-column: 3 / 5; 
    grid-row: 1 / 3;
}
```
or completly on one line: 
```
.el3 {
    grid-area: 3 / 5 / 1 / 3; 
}
```

